$(function() {
   $(".web").mouseenter(function() {
     $($(this)).next().css("display", "inline-block");
   });
  $(".web").mouseleave(function() {
     $($(this)).next().css("display", "none");
   })
   
});