$(document).ready(function() {
       curves = (Object.keys(welldata[1]));      
       var form = $(document.createElement('form')).appendTo("#tab2");
       curves.forEach(function(curve){
        var div = $(document.createElement('div')).appendTo(form); 
                  
        $("<input>").attr("type","checkbox").attr("id",curve).attr("name",curve).attr("value",curve).attr("text",curve).appendTo(div);
        
        $("<label>").attr("for",curve).text(curve).appendTo(div); 
        var select = $(document.createElement('select')).appendTo(div);
        $("<option>").val("1").text("1").appendTo(select);
        $("<option>").val("2").text("2").appendTo(select);
        $("<option>").val("3").text("3").appendTo(select);
        $("<option>").val("4").text("4").appendTo(select);
       });
      $("<input>").attr("type","submit").attr("value","Submit").appendTo(form);
  // });
});
