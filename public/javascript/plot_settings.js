var plotCurves = [];
var plotJSON = {};
var myData;
var DEPTH;
if (welldata.curveinfo.DEPT) {
 DEPTH = welldata.logdata['DEPT']
} else {
 DEPTH = welldata.logdata['DEPTH']
}

var unit = ""

var curves = (Object.keys(welldata.curveinfo));
if (welldata.curveinfo.DEPT) {
  unit = welldata.curveinfo.DEPT.unit
} else {
  unit = welldata.curveinfo.DEPTH.unit
}

$(document).ready(function() {    

  var div_header = $(document.createElement('div')).attr("id","well_header").appendTo("#tab2");
  var div_track1 = $(document.createElement('div')).attr("id","track1").appendTo("#tab2");

  var tab2_header = $(document.createElement('table')).attr("id","well_header1").appendTo(div_header); 
  $("<tr>").text("Well Name : "+welldata.wellinfo.wellname).appendTo(tab2_header);
  $("<tr>").text("Field Name : "+welldata.wellinfo.field).appendTo(tab2_header);
  $("<tr>").text("Company : "+welldata.wellinfo.company).appendTo(tab2_header);
  $("<tr>").text("Country : "+welldata.wellinfo.country).appendTo(tab2_header);
  $("<tr>").text("State : "+welldata.wellinfo.state).appendTo(tab2_header);
  $("<tr>").text("Province : "+welldata.wellinfo.province).appendTo(tab2_header);
  $("<tr>").text("UWI : "+welldata.wellinfo.uwi).appendTo(tab2_header);
  $("<tr>").text("Start : "+welldata.wellinfo.start_depth+unit).appendTo(tab2_header);
  $("<tr>").text("Stop : "+welldata.wellinfo.stop_depth+unit).appendTo(tab2_header);
  $("<tr>").text("Location : "+welldata.wellinfo.location).appendTo(tab2_header);
  $("<tr>").text("Unit : "+welldata.wellinfo.unit).appendTo(tab2_header);
  $("<tr>").text("Date : "+welldata.wellinfo.date).appendTo(tab2_header);
});

$(document).ready(function() {

  var form = document.getElementById("main_form");
  curves.forEach(function(curve){
    if ((curve != "DEPTH") && (curve != "DEPT")) {
      var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
      if (curve == "GR") {
        defaults.gr_default(curve)
      } else if ((curve == "DEPT") || (curve == 'DEPTH')) {
        defaults.depth_default(curve)
      } else if (((curve == "CALI") || (curve == "CALS") || (curve == "HCAL")) && ((unit=="F") || (unit=="FT"))) {
        defaults.cali_default_oilfield(curve)
      } else if (((curve == "CALI") || (curve == "CALS") || (curve == "HCAL")) && (unit=="M")) {
        defaults.cali_default_metric(curve)
      } else if (((curve == "RHOB") || (curve == "RHOZ") || (curve == "DEN")) && ((unit=="F") || (unit=="FT"))) {
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
      } else if (((curve == "DT") || (curve == "DTCO") || (curve == "AC")) && ((unit=="F") || (unit=="FT"))) {
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

        $("<input>").attr("class","jscolor").attr("value","AB2567").attr("size","7").attr("name","color"+curve).appendTo(div);

        var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
        $("<option>").val("solid").text("solid").appendTo(line_style_select);
        $("<option>").val("dash").text("dash").appendTo(line_style_select);
        $("<option>").val("dot").text("dot").appendTo(line_style_select);
        $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

        $("<input>").attr("id","minscale").attr("value","0").attr("name","minscale"+curve).attr("size","6").appendTo(div);

        $("<input>").attr("id","maxscale").attr("value","100").attr("name","maxscale"+curve).attr("size","6").appendTo(div);
      }
    }                 

  });

  $("<input>").attr("type","submit").attr("value","Make Plot").appendTo(form);

  $( "form" ).submit(function( event ) {

    selected_curves = $('input[type=checkbox]:checked');
    selected_curves.each(function(index, el){
      plotCurves[index] = el.value;
    });

    myData = $( this ).serializeArray();
    $.each(plotCurves, function(index, value){
      var curve_settings = myData.filter(function(Obj){
        return Obj.name.endsWith(value);
      });
      scale_range = [parseFloat(curve_settings[5].value), parseFloat(curve_settings[6].value)];

      plotJSON[value] = {
        track: curve_settings[1].value,
        track_type: curve_settings[2].value,
        color: curve_settings[3].value,
        line_style: curve_settings[4].value,
        scale: scale_range
      }
    });
    init(plotJSON);
    $('#link_tab2').trigger('click');
    prepForPlot(plotJSON);
    Plotly.newPlot('track1',myData.traces,myData.layout);
    event.preventDefault();
  });
});


