$(function() {
 //slider
 /* var left = $(".left");
  var right = $(".right");
  var photo = $(".photo");
  var slider = $(".background-slider");
  var window = $(".window");
  var photoWidth = photo.width();
  console.log(slider.position().left);

  slider.css({
    width: "30000px",
  });
  var offset = 0;
 var newSlider = slider.clone(true);
 newSlider.css({
   display: "inline-block",
   position: "relative",
 })
 right.on("click", function () {
    if (offset === 800) {
      offset = 0;
      slider.css({
        "left": 0
      });
    } else {
      offset += photoWidth;
      slider.css({
        "left": -offset + 'px'
      });
    }
  });


  left.on("click", function () {
    if (offset === 0) {
      offset = 800;
      slider.css({
        "left": '-800px'
      });
    } else {
      offset -= photoWidth;
      slider.css({
        "left": -offset + 'px'
      });
    }
  });*/

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
  
  
  
});