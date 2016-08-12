var myData = [];
var plotCurves = [];
var plotJSON = {};
var xaxes = [];
var traces = [];
const GRAPH_END = 0.95;
const DEPTH = welldata.logdata['DEPTH'];
const SUBPLOT_SPACING = [ [0, .27], [.33, .43], [.48, .68] ,[.73, 1]];

var layout = {
  margin: {
    l: 50,
    r: 50,
    b: 0,
    t: 50,
    pad: 4
  }
};

$(document).ready(function() {

  function generateLogRange(num){
    if (num == 0)
      num = 0.001;
    return Math.log10(num);
  }

  function generateTraceXAxes(index, val){
    if (index == 0){
      plotJSON[val].xaxis = "x";
    } else {
      plotJSON[val].xaxis = "x" + (index + 1);
    }
  }

  function generateTrackXAxes(index, val, track_num){
    if (index == 0){
      xaxes[index] = ['xaxis', track_num, val];
    } else {
      xaxes[index] = ['xaxis' + (index + 1), track_num, val];
    }
  }

  function generateLayoutYAxis(){
    layout.yaxis = { domain: [0.8],
      title: "Depth",
      autorange: 'reversed',
      side: 'right',
      range: plotJSON['DEPTH'].scale,
      domain: [0, GRAPH_END],
      showgrid: true,
      gridwidth: 3
    }
  }

  function generateLayoutXAxes(){
    xaxes.forEach(function(val, index){
      layout[val[0]] = {
        linecolor: plotJSON[val[2]].color,
        tickcolor: plotJSON[val[2]].color,
        tickvals: plotJSON[val[2]].scale,
        title: val[2],
        side: 'top',
        showline: true,
        type: plotJSON[val[2]].track_type,
        range: (plotJSON[val[2]].track_type == "log") ? plotJSON[val[2]].scale.map(generateLogRange) : plotJSON[val[2]].scale,
        domain: generateSubplotSpacing(val[1]),
        showgrid: true,
        gridwidth: 2
      }
    })
  }

  function generateTraces(){
    plotCurves.forEach(function(val, index){
      traces[index] = {
        x: welldata.logdata[val],
        y: DEPTH,
        type: 'scatter',
        xaxis: plotJSON[val].xaxis,
        line: {
          color: plotJSON[val].color,
          dash: plotJSON[val].line_style,
        }, 
      };
      console.log(welldata.logdata[val]);
    });
  }

  function generateSubplotSpacing(track){
    index = parseInt(track) - 1;
    return SUBPLOT_SPACING[index];
  }
  // Not yet used
  function generateAxisPosition(graph_end, num){
    result = [];
    axis_gap = (1 - graph_end) / num;
    i = 0;
    while ( i < num ){
      result.push(graph_end + axis_gap * i);
      i++;
    }
    return result;
  }

  function prepForPlot(plotObj){
    var track = {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    };
    Object.keys(plotObj).forEach(function(val, index){
      track_num = plotObj[val].track;
      track[track_num] += 1;
      generateTraceXAxes(index, val);
      generateTrackXAxes(index, val, track_num);
    });
    generateLayoutYAxis();
    generateLayoutXAxes();
    generateTraces();
  }

  curves = (Object.keys(welldata.curveinfo));
  if (welldata.curveinfo.DEPT) {
    var unit = welldata.curveinfo.DEPT.unit
  } else {
    var unit = welldata.curveinfo.DEPTH.unit
  }

  var form = document.getElementById("main_form");
  curves.forEach(function(curve){
    var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
    if (curve == "GR") {
      defaults.gr_default(curve)
    } else if (((curve == "CALI") || (curve == "CALS") || (curve == "HCAL")) && (unit=="F")) {
      defaults.cali_default_oilfield(curve)
    } else if (((curve == "CALI") || (curve == "CALS") || (curve == "HCAL")) && (unit=="M")) {
      defaults.cali_default_metric(curve)
    } else if (((curve == "RHOB") || (curve == "RHOZ") || (curve == "DEN")) && (unit=="F")) {
      defaults.rhob_default_oilfield(curve)
    } else if (((curve == "RHOB") || (curve == "RHOZ") || (curve == "DEN")) && (unit=="M")) {
      defaults.rhob_default_metric(curve) 
    } else if ((curve == "ILD") || (curve == 'LLD') || (curve == 'RT')) {
      defaults.ild_default(curve)
    } else if ((curve == "ILM") || (curve == 'LLS') || (curve == 'AT30')) {
      defaults.ilm_default(curve)
    } else if ((curve == "SFL") || (curve == "MSFL") || (curve == "SFLU")) {
      defaults.sfl_default(curve)
    } else if ((curve == "CNS") || (curve == "NPHI") || (curve == "NPSS")) {
      defaults.nphi_default(curve)
    } else if (((curve == "DT") || (curve == "DTCO") || (curve == "AC")) && (unit=="F")) {
      defaults.dt_default_oilfield(curve)
    } else if (((curve == "DT") || (curve == "DTCO") || (curve == "AC")) && (unit=="M")) {
      defaults.dt_default_metric(curve) 
    } else if ((curve == "PEF") || (curve == "PEFZ")) {
      defaults.pef_default(curve)
    } else {
      $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).appendTo(div);

      $("<label>").attr("for",curve).text(curve).appendTo(div); 
      var track_select = $(document.createElement('select')).attr("id","curve_track").attr("name","curve_track"+curve).appendTo(div);
      $("<option>").val("1").text("1").appendTo(track_select);
      $("<option>").val("2").text("2").appendTo(track_select);
      $("<option>").val("3").text("3").appendTo(track_select);
      $("<option>").val("4").text("4").appendTo(track_select);

      var scale_type_select = $(document.createElement('select')).attr("id","scale_type").attr("name","scale_type"+curve).appendTo(div);
      $("<option>").val("linear").text("Linear").appendTo(scale_type_select);
      $("<option>").val("log").text("Log").appendTo(scale_type_select);

      $("<input>").attr("class","jscolor").attr("value","AB2567").attr("size","2").attr("name","color"+curve).appendTo(div);

      var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
      $("<option>").val("solid").text("solid").appendTo(line_style_select);
      $("<option>").val("dash").text("dash").appendTo(line_style_select);
      $("<option>").val("dot").text("dot").appendTo(line_style_select);
      $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

      $("<input>").attr("id","minscale").attr("value","0").attr("name","minscale"+curve).attr("size","5").appendTo(div);

      $("<input>").attr("id","maxscale").attr("value","100").attr("name","maxscale"+curve).attr("size","5").appendTo(div);
    }                 

  });
  $("<input>").attr("type","submit").attr("value","Make Plot").appendTo(form);

  $( "form" ).submit(function( event ) {
    myData = [];
    plotCurves = [];
    plotJSON = {};
    xaxes = [];
    traces = [];

    selected_curves = $('input[type=checkbox]:checked');
    selected_curves.each(function(index, el){
      plotCurves[index] = el.value;
    });

    myData = $( this ).serializeArray();
    $.each(plotCurves, function(index, value){
      var curve_settings = myData.filter(function(Obj){
        return Obj.name.includes(value);
      });
      scale_range = [parseInt(curve_settings[5].value, 10), parseInt(curve_settings[6].value, 10)];

      plotJSON[value] = {
        track: curve_settings[1].value,
        track_type: curve_settings[2].value,
        color: curve_settings[3].value,
        line_style: curve_settings[4].value,
        scale: scale_range
      }
    });
    prepForPlot(plotJSON);
    Plotly.newPlot('track1',traces,layout);
    event.preventDefault();
  });
});

$(document).ready(function() {    

  var div_header = $(document.createElement('div')).attr("id","well_header").appendTo("#tab1");
  $("<h3>").text("Well Name : "+welldata.wellinfo.wellname).appendTo(div_header);
  $("<h3>").text("Field Name : "+welldata.wellinfo.field).appendTo(div_header);
  $("<h3>").text("Company : "+welldata.wellinfo.company).appendTo(div_header);
  $("<h3>").text("Country : "+welldata.wellinfo.country).appendTo(div_header);
  $("<h3>").text("State : "+welldata.wellinfo.state).appendTo(div_header);
  $("<h3>").text("Province : "+welldata.wellinfo.province).appendTo(div_header);
  $("<h3>").text("UWI : "+welldata.wellinfo.uwi).appendTo(div_header);

  var div_track1 = $(document.createElement('div')).attr("id","track1").appendTo("#tab1");
  layout.width = div_track1.width();
  layout.height = div_track1.height();
  // var div_track2 = $(document.createElement('div')).attr("id","track2").appendTo("#tab1");

  // var div_track3 = $(document.createElement('div')).attr("id","track3").appendTo("#tab1");

  // var div_track4 = $(document.createElement('div')).attr("id","track4").appendTo("#tab1"); 
});

