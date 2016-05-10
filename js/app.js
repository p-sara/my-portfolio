$(function() {
  //scrolling 
  var link = $("header li a");
    
    link.on("click", function (){ 
    var position = $($(this).attr("href")).position().top; 
       $("html, body").animate({
     scrollTop: position 
  }, 500) 
    });
  
  //showing websites info
   $(".web-prev").mouseenter(function() {
     $($(this)).prev(".around").find(".info-prev").css("display", "inline-block");
   });
  $(".web-prev").mouseleave(function() {
     $($(this)).prev(".around").find(".info-prev").css("display", "none");
   });
  
  $(".web-next").mouseenter(function() {
     $($(this)).next(".around").find(".info-next").css("display", "inline-block");
   });
  $(".web-next").mouseleave(function() {
     $($(this)).next(".around").find(".info-next").css("display", "none");
   })
   //skills
  $('.skill-wrapper').mouseenter(function(){
$('.bar-percentage[data-percentage]').each(function () {
  var progress = $(this);
  var percentage = Math.ceil($(this).attr('data-percentage'));
  $({countNum: 0}).animate({countNum: percentage}, {
    duration: 2000,
    easing:'linear',
    step: function() {
      // What todo on every count
      var pct = Math.floor(this.countNum) + '%';
      progress.text(pct) && progress.siblings().children().css('width',pct);
    }
  });
});
});
  //fixed menu 
  var menu = $(".main-nav");
    $(window).scroll(function() {
      menu.removeClass("black-nav");
      
    });
    var menuPositionTop = menu.position().top;
   $(window).on("scroll", function(){
      var windowPositionTop = $("body").scrollTop(); 
      if (menuPositionTop<windowPositionTop){
          menu.removeClass("black-nav");
      }else{
          menu.addClass("black-nav");
      }      
    });
      
    

 


  
  
  
  
});