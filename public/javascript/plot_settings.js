$(document).ready(function() {
   curves = (Object.keys(welldata.curveinfo));     
   var form = $(document.createElement('form')).appendTo("#tab2");
   curves.forEach(function(curve){
    var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form); 
              
    $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).appendTo(div);
    
    $("<label>").attr("for",curve).text(curve).appendTo(div); 
    var track_select = $(document.createElement('select')).attr("id","curve_track").appendTo(div);
    $("<option>").val("1").text("1").appendTo(track_select);
    $("<option>").val("2").text("2").appendTo(track_select);
    $("<option>").val("3").text("3").appendTo(track_select);
    $("<option>").val("4").text("4").appendTo(track_select);

    var scale_type_select = $(document.createElement('select')).attr("id","scale_type").appendTo(div);
    $("<option>").val("Linear").text("Linear").appendTo(scale_type_select);
    $("<option>").val("Log").text("Log").appendTo(scale_type_select);

    $("<input>").attr("class","jscolor").attr("value","AB2567").attr("size","2").appendTo(div);

    var line_style_select = $(document.createElement('select')).attr("id","line_type").appendTo(div);
    $("<option>").val("solid").text("solid").appendTo(line_style_select);
    $("<option>").val("dash").text("dash").appendTo(line_style_select);
    $("<option>").val("dotted").text("dotted").appendTo(line_style_select);
    $("<option>").val("dash-dotted").text("dash-dotted").appendTo(line_style_select);

    $("<input>").attr("id","minscale").attr("value","0").attr("size","3").appendTo(div);

    $("<input>").attr("id","maxscale").attr("value","100").attr("size","5").appendTo(div);
   });
  $("<input>").attr("type","submit").attr("value","Make Plot").appendTo(form);
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

  var div_track2 = $(document.createElement('div')).attr("id","track2").appendTo("#tab1");

  var div_track3 = $(document.createElement('div')).attr("id","track3").appendTo("#tab1");

  var div_track4 = $(document.createElement('div')).attr("id","track4").appendTo("#tab1"); 
});


