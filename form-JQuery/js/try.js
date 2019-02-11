$(document).ready(function(){
    $("#edit").hide();

   $("#submit").click(function () {
       let div = $("<div></div>");
       $("#main").append(div);
       div.append("<span>"+$("#textType").val()+"</span>");
       let att = $("<input type="+ $("#formType").val()+" value="+$("#textType").val()+" display: inline>");
       let btn=$("<input type='button' class=\"btn btn-xs\" value='删除' display: inline>");
       div.append(att,btn);
       btn.click(function () {
           $(this).parent().remove();
       });
   });

   $("#look").click(function () {
       $("#add").hide();
       $("#look").hide();
       $("#edit").show();
   });

    $("#edit").click(function () {
        $("#add").show();
        $("#look").show();
        $("#edit").hide();
    });

});

