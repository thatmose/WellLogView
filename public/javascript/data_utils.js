const GRAPH_END = 0.92;
const XAXIS_OFFSET = 0.01;
const SUBPLOT_SPACING = [ [0, .30], [.37, .39], [.40, .66] ,[.70, 1]];

// Initializes the variables storing general plot information.
function init(){
  myData = {};
  // var plotCurves = [];
  // var plotJSON = {};
  myData.track = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0
  };
  myData.xaxes = [];
  myData.traces = [];
  myData.trackPositions = {};
  myData.overlay_axis = null;
  myData.layout = {
    margin: {
      l: 50,
      r: 50,
      b: 0,
      t: 50,
      pad: 4
    },
    hovermode: 'closest',
    width:$("#track1").width(),
    height:$("#track1").height(),
    legend: {
      borderwidth: 2
    }
  };
  return myData;
}

/**
 * Converts a number to its equivalent log (base 10)
 * @param {Number}
 * @return {Number}
 */
 function generateLogRange(num){
  if (num == 0)
    num = 0.001;
  return Math.log10(num);
}

/**
 * Generates a Plotly friendly xaxis shorthand name for a curve based on its location in the queue and appends it to plotJSON object keeping track of plotting data
 * @param {Number} index
 * @param {String} val
 */
 function generateTraceXAxes(index, val){
  if (index == 0){
    plotJSON[val].xaxis = "x";
  } else {
    plotJSON[val].xaxis = "x" + (index + 1);
  }
}

/**
 * Generates a Plotly friendly xaxis for a curve based on its location in the queue and appends it to myData object keeping track of plotting data
 * @param {Number} index
 * @param {String} val
 * @param {Number} track_num
 */
 function generateTrackXAxes(index, val, track_num){
  if (index == 0){
    myData.xaxes[index] = ['xaxis', track_num, val];
  } else {
    myData.xaxes[index] = ['xaxis' + (index + 1), track_num, val];
  }
}

/**
 * Returns the median value of an array
 * @param {Array} values
 * @return {Number} median
 */
 function median(values) {
  values.sort( function(a,b) {return a - b;} );
  var half = Math.floor(values.length/2);
  if(values.length % 2)
    return values[half];
  else
    return (values[half-1] + values[half]) / 2.0;
}

/**
 * Returns the value corresponding to the middle between two points on a log scale
 * @param {Array} values
 * @return {Number} middleValue
 */
 function logMiddle(values) {
  return values[0] * (Math.sqrt(values[1]/values[0]));
}

/*
 * Checks whether scale is log or linear and calls respective function to determine the middle point of the scale
 * @param {String} type
 * @param {Array} scale
 * @return {Number}
 */
 function getMiddle(type, scale){
  if (type == 'log'){
    return logMiddle(scale);
  } else {
    return median(scale);
  }
}

/*
 * Creates the yaxis for the plot. In this case it is always the depth data used for generating the yaxis. Accesses global variables.
 */
 function generateLayoutYAxis(){
  var depth = plotJSON['DEPTH'] || plotJSON['DEPT']
  myData.layout.yaxis = { 
    title: "Depth",
    autorange: 'reversed',
    side: 'right',
    range: depth.scale,
    domain: [0, GRAPH_END],
    showgrid: true,
    gridwidth: 3,
    showline: true,
    mirror: 'all',
    linewidth: 2,
    position: 0.33,

    ticklen: 4,
    tick0: depth.scale[0],
    nticks: 20,
  }
}

/*
 * Sets the position of the curve on its respective subplot (track). First curve is necessary for setting overlay instructions for future curves.
 * @param {Number} track_num
 * @param {String} val
 */
 function setTrackPositions(track_num, val){
  if (typeof myData.trackPositions[track_num] === 'undefined'){
    myData.trackPositions[track_num] = [[val, 1]];
  } else {
    var pos = myData.trackPositions[track_num].length;
    myData.trackPositions[track_num].push([val, pos + 1]);
  };
}

/*
 * Returns the positioning instructions for the XAxes in a Plotly format for a curve based on its subplot (track) positioning
 * @param {Number} track_num
 * @param {String} curve_name
 * @return {Array} [position, overlay_axis]
 */
function positionInstructions(track_num, curve_name){
pos_info = myData.trackPositions[track_num].filter(function(arr){
  return arr[0] === curve_name;
});
var axis_gap = (1 - GRAPH_END)/myData.trackPositions[track_num].length;
var position = XAXIS_OFFSET + GRAPH_END + (pos_info[0][1] - 1) * axis_gap;
  // if position on track is not 1, hence pos > 1
  if (pos_info[0][1] !== 1){
    var result = myData.trackPositions[track_num].filter(function(arr){
      return arr[1] === 1;
    });
    myData.overlay_axis = plotJSON[result[0][0]].xaxis;
  } else {
    myData.overlay_axis = null;
  }

  return [position, myData.overlay_axis];
}

/*
 * Creates the plotly layout object for each XAxis based on user submitted input. Reads from global variables
 */
function generateLayoutXAxes(){
  myData.xaxes.forEach(function(val, index){
    myData.layout[val[0]] = {
      linecolor: plotJSON[val[2]].color,
      linewidth: 2,
      tickcolor: plotJSON[val[2]].color,

      tickvals: [plotJSON[val[2]].scale[0], getMiddle(plotJSON[val[2]].track_type, plotJSON[val[2]].scale), plotJSON[val[2]].scale[1]],

      ticktext: [plotJSON[val[2]].scale[0], val[2], plotJSON[val[2]].scale[1]],
      tickwidth: 2,
    // title: val[2],
    side: 'top',
    showline: true,
    type: plotJSON[val[2]].track_type,
    range: (plotJSON[val[2]].track_type == "log") ? plotJSON[val[2]].scale.map(generateLogRange) : plotJSON[val[2]].scale,
    domain: generateSubplotSpacing(val[1]),
    showgrid: true,
    gridwidth: 2,
    zeroline: false
  };
  if (positionInstructions(val[1], val[2])[1] !== null ){
    myData.layout[val[0]].overlaying = positionInstructions(val[1], val[2])[1];
    myData.layout[val[0]].showgrid = false;
    myData.layout[val[0]].position = positionInstructions(val[1], val[2])[0]
  };
})
}

/*
 * Generates the plotly trace object for each curve selected by the user. Reads and sets data from global variables.
 */
function generateTraces(){
  plotCurves.forEach(function(val, index){
    myData.traces[index] = {
      name: val,
      x: welldata.logdata[val],
      y: DEPTH,
      type: 'scatter',
      xaxis: plotJSON[val].xaxis,
      yaxis: 'y',
      line: {
        color: plotJSON[val].color,
        dash: plotJSON[val].line_style,
      }, 
    };
  });
}

/*
 * Returns the spacing information in Plotly format(layout of the subplots) based on the track provided
 * @param {Numer} track
 * @return {Array} [domain_start, domain_end]
 */
function generateSubplotSpacing(track){
  var track_index = parseFloat(track) - 1;
  return SUBPLOT_SPACING[track_index];
}

/*
 * Reads user input on display preferences and prepares Plotly format objects to be used to generate plots 
 * @param {Object} plotObj
 */
function prepForPlot(plotObj){
  init();
  Object.keys(plotObj).forEach(function(val, index){
    var track_num = plotObj[val].track;
    myData.track[track_num] += 1;
    generateTraceXAxes(index, val);
    generateTrackXAxes(index, val, track_num);
    setTrackPositions(track_num, val);
  });
  generateLayoutYAxis();
  generateLayoutXAxes();
  generateTraces();
}

