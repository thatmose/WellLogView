var defaults 
$(document).ready(function() {

  var form = $(document.createElement('form')).attr("id","main_form").attr("method","post").attr("action","/display").appendTo("#tab2");
  
  defaults = {

    gr_default: function(curve){
      var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
      $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).attr("checked","checked").appendTo(div);
    
      $("<label>").attr("for",curve).text(curve).appendTo(div); 
      var track_select = $(document.createElement('select')).attr("id","curve_track").attr("name","curve_track"+curve).appendTo(div);
      $("<option>").val("1").text("1").attr("selected","selected").appendTo(track_select);
      $("<option>").val("2").text("2").appendTo(track_select);
      $("<option>").val("3").text("3").appendTo(track_select);
      $("<option>").val("4").text("4").appendTo(track_select);

      var scale_type_select = $(document.createElement('select')).attr("id","scale_type").attr("name","scale_type"+curve).appendTo(div);
      $("<option>").val("linear").text("Linear").appendTo(scale_type_select);
      $("<option>").val("log").text("Log").appendTo(scale_type_select);

      $("<input>").attr("class","jscolor").attr("value","20AB0F").attr("size","2").attr("name","color"+curve).appendTo(div);

      var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
      $("<option>").val("solid").text("solid").appendTo(line_style_select);
      $("<option>").val("dash").text("dash").appendTo(line_style_select);
      $("<option>").val("dot").text("dot").appendTo(line_style_select);
      $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

      $("<input>").attr("id","minscale").attr("value","0").attr("name","minscale"+curve).attr("size","5").appendTo(div);

      $("<input>").attr("id","maxscale").attr("value","150").attr("name","maxscale"+curve).attr("size","5").appendTo(div);
    },
    cali_default_oilfield: function(curve){
      var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
      
      $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).attr("checked","checked").appendTo(div);
    
      $("<label>").attr("for",curve).text(curve).appendTo(div); 
      var track_select = $(document.createElement('select')).attr("id","curve_track").attr("name","curve_track"+curve).appendTo(div);
      $("<option>").val("1").text("1").attr("selected","selected").appendTo(track_select);
      $("<option>").val("2").text("2").appendTo(track_select);
      $("<option>").val("3").text("3").appendTo(track_select);
      $("<option>").val("4").text("4").appendTo(track_select);

      var scale_type_select = $(document.createElement('select')).attr("id","scale_type").attr("name","scale_type"+curve).appendTo(div);
      $("<option>").val("Linear").text("Linear").appendTo(scale_type_select);
      $("<option>").val("log").text("Log").appendTo(scale_type_select);

      $("<input>").attr("class","jscolor").attr("value","0960AB").attr("size","2").attr("name","color"+curve).appendTo(div);

      var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
      $("<option>").val("solid").text("solid").appendTo(line_style_select);
      $("<option>").val("dash").text("dash").attr("selected","selected").appendTo(line_style_select);
      $("<option>").val("dot").text("dot").appendTo(line_style_select);
      $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

      $("<input>").attr("id","minscale").attr("value","6").attr("name","minscale"+curve).attr("size","5").appendTo(div);

      $("<input>").attr("id","maxscale").attr("value","16").attr("name","maxscale"+curve).attr("size","5").appendTo(div);
    },
    cali_default_metric: function(curve){
      var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
      
      $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).attr("checked","checked").appendTo(div);
    
      $("<label>").attr("for",curve).text(curve).appendTo(div); 
      var track_select = $(document.createElement('select')).attr("id","curve_track").attr("name","curve_track"+curve).appendTo(div);
      $("<option>").val("1").text("1").attr("selected","selected").appendTo(track_select);
      $("<option>").val("2").text("2").appendTo(track_select);
      $("<option>").val("3").text("3").appendTo(track_select);
      $("<option>").val("4").text("4").appendTo(track_select);

      var scale_type_select = $(document.createElement('select')).attr("id","scale_type").attr("name","scale_type"+curve).appendTo(div);
      $("<option>").val("Linear").text("Linear").appendTo(scale_type_select);
      $("<option>").val("log").text("Log").appendTo(scale_type_select);

      $("<input>").attr("class","jscolor").attr("value","0960AB").attr("size","2").attr("name","color"+curve).appendTo(div);

      var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
      $("<option>").val("solid").text("solid").appendTo(line_style_select);
      $("<option>").val("dash").text("dash").attr("selected","selected").appendTo(line_style_select);
      $("<option>").val("dot").text("dot").appendTo(line_style_select);
      $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

      $("<input>").attr("id","minscale").attr("value","150").attr("name","minscale"+curve).attr("size","5").appendTo(div);

      $("<input>").attr("id","maxscale").attr("value","410").attr("name","maxscale"+curve).attr("size","5").appendTo(div);
    },
    rhob_default_oilfield: function(curve){
      var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
      
      $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).attr("checked","checked").appendTo(div);
    
      $("<label>").attr("for",curve).text(curve).appendTo(div); 
      var track_select = $(document.createElement('select')).attr("id","curve_track").attr("name","curve_track"+curve).appendTo(div);
      $("<option>").val("1").text("1").appendTo(track_select);
      $("<option>").val("2").text("2").appendTo(track_select);
      $("<option>").val("3").text("3").appendTo(track_select);
      $("<option>").val("4").text("4").attr("selected","selected").appendTo(track_select);

      var scale_type_select = $(document.createElement('select')).attr("id","scale_type").attr("name","scale_type"+curve).appendTo(div);
      $("<option>").val("Linear").text("Linear").appendTo(scale_type_select);
      $("<option>").val("log").text("Log").appendTo(scale_type_select);

      $("<input>").attr("class","jscolor").attr("value","E3300E").attr("size","2").attr("name","color"+curve).appendTo(div);

      var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
      $("<option>").val("solid").text("solid").attr("selected","selected").appendTo(line_style_select);
      $("<option>").val("dash").text("dash").appendTo(line_style_select);
      $("<option>").val("dot").text("dot").appendTo(line_style_select);
      $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

      $("<input>").attr("id","minscale").attr("value","1.95").attr("name","minscale"+curve).attr("size","5").appendTo(div);

      $("<input>").attr("id","maxscale").attr("value","2.95").attr("name","maxscale"+curve).attr("size","5").appendTo(div);
    },
    rhob_default_metric: function(curve){
      var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
      
      $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).attr("checked","checked").appendTo(div);
    
      $("<label>").attr("for",curve).text(curve).appendTo(div); 
      var track_select = $(document.createElement('select')).attr("id","curve_track").attr("name","curve_track"+curve).appendTo(div);
      $("<option>").val("1").text("1").appendTo(track_select);
      $("<option>").val("2").text("2").appendTo(track_select);
      $("<option>").val("3").text("3").appendTo(track_select);
      $("<option>").val("4").text("4").attr("selected","selected").appendTo(track_select);

      var scale_type_select = $(document.createElement('select')).attr("id","scale_type").attr("name","scale_type"+curve).appendTo(div);
      $("<option>").val("Linear").text("Linear").appendTo(scale_type_select);
      $("<option>").val("log").text("Log").appendTo(scale_type_select);

      $("<input>").attr("class","jscolor").attr("value","E3300E").attr("size","2").attr("name","color"+curve).appendTo(div);

      var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
      $("<option>").val("solid").text("solid").attr("selected","selected").appendTo(line_style_select);
      $("<option>").val("dash").text("dash").appendTo(line_style_select);
      $("<option>").val("dot").text("dot").appendTo(line_style_select);
      $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

      $("<input>").attr("id","minscale").attr("value","1950").attr("name","minscale"+curve).attr("size","5").appendTo(div);

      $("<input>").attr("id","maxscale").attr("value","2950").attr("name","maxscale"+curve).attr("size","5").appendTo(div);
    },
    ild_default: function(curve){
      var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
      
      $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).attr("checked","checked").appendTo(div);
    
      $("<label>").attr("for",curve).text(curve).appendTo(div); 
      var track_select = $(document.createElement('select')).attr("id","curve_track").attr("name","curve_track"+curve).appendTo(div);
      $("<option>").val("1").text("1").appendTo(track_select);
      $("<option>").val("2").text("2").appendTo(track_select);
      $("<option>").val("3").text("3").attr("selected","selected").appendTo(track_select);
      $("<option>").val("4").text("4").appendTo(track_select);

      var scale_type_select = $(document.createElement('select')).attr("id","scale_type").attr("name","scale_type"+curve).appendTo(div);
      $("<option>").val("Linear").text("Linear").appendTo(scale_type_select);
      $("<option>").val("log").text("Log").attr("selected","selected").appendTo(scale_type_select);

      $("<input>").attr("class","jscolor").attr("value","E3300E").attr("size","2").attr("name","color"+curve).appendTo(div);

      var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
      $("<option>").val("solid").text("solid").attr("selected","selected").appendTo(line_style_select);
      $("<option>").val("dash").text("dash").appendTo(line_style_select);
      $("<option>").val("dot").text("dot").appendTo(line_style_select);
      $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

      $("<input>").attr("id","minscale").attr("value","0.2").attr("name","minscale"+curve).attr("size","5").appendTo(div);

      $("<input>").attr("id","maxscale").attr("value","2000").attr("name","maxscale"+curve).attr("size","5").appendTo(div);
    },
    ilm_default: function(curve){
      var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
      
      $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).attr("checked","checked").appendTo(div);
    
      $("<label>").attr("for",curve).text(curve).appendTo(div); 
      var track_select = $(document.createElement('select')).attr("id","curve_track").attr("name","curve_track"+curve).appendTo(div);
      $("<option>").val("1").text("1").appendTo(track_select);
      $("<option>").val("2").text("2").appendTo(track_select);
      $("<option>").val("3").text("3").attr("selected","selected").appendTo(track_select);
      $("<option>").val("4").text("4").appendTo(track_select);

      var scale_type_select = $(document.createElement('select')).attr("id","scale_type").attr("name","scale_type"+curve).appendTo(div);
      $("<option>").val("Linear").text("Linear").appendTo(scale_type_select);
      $("<option>").val("log").text("Log").attr("selected","selected").appendTo(scale_type_select);

      $("<input>").attr("class","jscolor").attr("value","0960AB").attr("size","2").attr("name","color"+curve).appendTo(div);

      var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
      $("<option>").val("solid").text("solid").appendTo(line_style_select);
      $("<option>").val("dash").text("dash").attr("selected","selected").appendTo(line_style_select);
      $("<option>").val("dot").text("dot").appendTo(line_style_select);
      $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

      $("<input>").attr("id","minscale").attr("value","0.2").attr("name","minscale"+curve).attr("size","5").appendTo(div);

      $("<input>").attr("id","maxscale").attr("value","2000").attr("name","maxscale"+curve).attr("size","5").appendTo(div);
    },
    sfl_default: function(curve){
      var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
      
      $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).attr("checked","checked").appendTo(div);
    
      $("<label>").attr("for",curve).text(curve).appendTo(div); 
      var track_select = $(document.createElement('select')).attr("id","curve_track").attr("name","curve_track"+curve).appendTo(div);
      $("<option>").val("1").text("1").appendTo(track_select);
      $("<option>").val("2").text("2").appendTo(track_select);
      $("<option>").val("3").text("3").attr("selected","selected").appendTo(track_select);
      $("<option>").val("4").text("4").appendTo(track_select);

      var scale_type_select = $(document.createElement('select')).attr("id","scale_type").attr("name","scale_type"+curve).appendTo(div);
      $("<option>").val("linear").text("Linear").appendTo(scale_type_select);
      $("<option>").val("log").text("Log").attr("selected","selected").appendTo(scale_type_select);

      $("<input>").attr("class","jscolor").attr("value","20AB0F").attr("size","2").attr("name","color"+curve).appendTo(div);

      var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
      $("<option>").val("solid").text("solid").appendTo(line_style_select);
      $("<option>").val("dash").text("dash").appendTo(line_style_select);
      $("<option>").val("dot").text("dot").attr("selected","selected").appendTo(line_style_select);
      $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

      $("<input>").attr("id","minscale").attr("value","0.2").attr("name","minscale"+curve).attr("size","5").appendTo(div);

      $("<input>").attr("id","maxscale").attr("value","2000").attr("name","maxscale"+curve).attr("size","5").appendTo(div);
    },
    nphi_default: function(curve){
      var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
      
      $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).attr("checked","checked").appendTo(div);
    
      $("<label>").attr("for",curve).text(curve).appendTo(div); 
      var track_select = $(document.createElement('select')).attr("id","curve_track").attr("name","curve_track"+curve).appendTo(div);
      $("<option>").val("1").text("1").appendTo(track_select);
      $("<option>").val("2").text("2").appendTo(track_select);
      $("<option>").val("3").text("3").appendTo(track_select);
      $("<option>").val("4").text("4").attr("selected","selected").appendTo(track_select);

      var scale_type_select = $(document.createElement('select')).attr("id","scale_type").attr("name","scale_type"+curve).appendTo(div);
      $("<option>").val("Linear").text("Linear").attr("selected","selected").appendTo(scale_type_select);
      $("<option>").val("log").text("Log").appendTo(scale_type_select);

      $("<input>").attr("class","jscolor").attr("value","0960AB").attr("size","2").attr("name","color"+curve).appendTo(div);

      var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
      $("<option>").val("solid").text("solid").appendTo(line_style_select);
      $("<option>").val("dash").text("dash").attr("selected","selected").appendTo(line_style_select);
      $("<option>").val("dot").text("dot").appendTo(line_style_select);
      $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

      $("<input>").attr("id","minscale").attr("value","-0.15").attr("name","minscale"+curve).attr("size","5").appendTo(div);

      $("<input>").attr("id","maxscale").attr("value","0.45").attr("name","maxscale"+curve).attr("size","5").appendTo(div);
    },
    dt_default_oilfield: function(curve){
      var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
      
      $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).attr("checked","checked").appendTo(div);
    
      $("<label>").attr("for",curve).text(curve).appendTo(div); 
      var track_select = $(document.createElement('select')).attr("id","curve_track").attr("name","curve_track"+curve).appendTo(div);
      $("<option>").val("1").text("1").appendTo(track_select);
      $("<option>").val("2").text("2").appendTo(track_select);
      $("<option>").val("3").text("3").appendTo(track_select);
      $("<option>").val("4").text("4").attr("selected","selected").appendTo(track_select);

      var scale_type_select = $(document.createElement('select')).attr("id","scale_type").attr("name","scale_type"+curve).appendTo(div);
      $("<option>").val("Linear").text("Linear").attr("selected","selected").appendTo(scale_type_select);
      $("<option>").val("log").text("Log").appendTo(scale_type_select);

      $("<input>").attr("class","jscolor").attr("value","20AB0F").attr("size","2").attr("name","color"+curve).appendTo(div);

      var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
      $("<option>").val("solid").text("solid").attr("selected","selected").appendTo(line_style_select);
      $("<option>").val("dash").text("dash").appendTo(line_style_select);
      $("<option>").val("dot").text("dot").appendTo(line_style_select);
      $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

      $("<input>").attr("id","minscale").attr("value","140").attr("name","minscale"+curve).attr("size","5").appendTo(div);

      $("<input>").attr("id","maxscale").attr("value","40").attr("name","maxscale"+curve).attr("size","5").appendTo(div);
    },
    dt_default_metric: function(curve){
      var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
      
      $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).attr("checked","checked").appendTo(div);
    
      $("<label>").attr("for",curve).text(curve).appendTo(div); 
      var track_select = $(document.createElement('select')).attr("id","curve_track").attr("name","curve_track"+curve).appendTo(div);
      $("<option>").val("1").text("1").appendTo(track_select);
      $("<option>").val("2").text("2").appendTo(track_select);
      $("<option>").val("3").text("3").appendTo(track_select);
      $("<option>").val("4").text("4").attr("selected","selected").appendTo(track_select);

      var scale_type_select = $(document.createElement('select')).attr("id","scale_type").attr("name","scale_type"+curve).appendTo(div);
      $("<option>").val("Linear").text("Linear").attr("selected","selected").appendTo(scale_type_select);
      $("<option>").val("log").text("Log").appendTo(scale_type_select);

      $("<input>").attr("class","jscolor").attr("value","20AB0F").attr("size","2").attr("name","color"+curve).appendTo(div);

      var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
      $("<option>").val("solid").text("solid").attr("selected","selected").appendTo(line_style_select);
      $("<option>").val("dash").text("dash").appendTo(line_style_select);
      $("<option>").val("dot").text("dot").appendTo(line_style_select);
      $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

      $("<input>").attr("id","minscale").attr("value","500").attr("name","minscale"+curve).attr("size","5").appendTo(div);

      $("<input>").attr("id","maxscale").attr("value","100").attr("name","maxscale"+curve).attr("size","5").appendTo(div);
    },
    pef_default: function(curve){
      var div = $(document.createElement('div')).attr("id","curve_settings").appendTo(form);
      
      $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).attr("checked","checked").appendTo(div);
    
      $("<label>").attr("for",curve).text(curve).appendTo(div); 
      var track_select = $(document.createElement('select')).attr("id","curve_track").attr("name","curve_track"+curve).appendTo(div);
      $("<option>").val("1").text("1").appendTo(track_select);
      $("<option>").val("2").text("2").appendTo(track_select);
      $("<option>").val("3").text("3").appendTo(track_select);
      $("<option>").val("4").text("4").attr("selected","selected").appendTo(track_select);

      var scale_type_select = $(document.createElement('select')).attr("id","scale_type").attr("name","scale_type"+curve).appendTo(div);
      $("<option>").val("Linear").text("Linear").attr("selected","selected").appendTo(scale_type_select);
      $("<option>").val("log").text("Log").appendTo(scale_type_select);

      $("<input>").attr("class","jscolor").attr("value","050203").attr("size","2").attr("name","color"+curve).appendTo(div);

      var line_style_select = $(document.createElement('select')).attr("id","line_type").attr("name","line_type"+curve).appendTo(div);
      $("<option>").val("solid").text("solid").appendTo(line_style_select);
      $("<option>").val("dash").text("dash").attr("selected","selected").appendTo(line_style_select);
      $("<option>").val("dot").text("dot").appendTo(line_style_select);
      $("<option>").val("dashdot").text("dashdot").appendTo(line_style_select);

      $("<input>").attr("id","minscale").attr("value","0").attr("name","minscale"+curve).attr("size","5").appendTo(div);

      $("<input>").attr("id","maxscale").attr("value","10").attr("name","maxscale"+curve).attr("size","5").appendTo(div);
    }                                          
  }   
});


