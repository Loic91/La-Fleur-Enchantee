$(document).ready(function () {
  
    var parallaxItem = document.querySelector('#parallax');
    $('.item a').mousemove(function (e) {
      parallax(e, parallaxItem);
    });
    
    var parallaxItem2 = document.querySelector('#parallax2');
    $('.item a').mousemove(function (e) {
      parallax(e, parallaxItem2);
    });
    
    var parallaxItem3 = document.querySelector('#parallax3');
    $('.item a').mousemove(function (e) {
      parallax(e, parallaxItem3);
    });

    var parallaxItem4 = document.querySelector('#parallax4');
    $('.item a').mousemove(function (e) {
      parallax(e, parallaxItem4);
    });
    
    function parallax(e, target) {
      var x = ($('.sub-menu').width() - target.offsetWidth) / 2 - (e.pageX - ($('.sub-menu').width() / 2)) / 3;
      var y = ($('.sub-menu').height() - target.offsetHeight) / 2 + (e.pageY - ($('.sub-menu').height() / 2)) * 1;
      $(target).offset({
        top: y,
        left: x,
      });
    };
    
  });









// $(document).ready(function() {
//     TweenMax.set(".project-preview", { width: 0 });

//     var tl = new TimelineLite();

//     $(document)
//       .on("mouseover", ".navigation-item", function(evt) {
//         tl = new TimelineLite();
//         tl.to($(".project-preview"), 0.2, {
//           width: "500px",
//           height: "600px",
//           ease: Expo.easeInOut
//         });
//       })
//     //   .on("mouseout", ".navigation-item", function(evt) {
//     //     tl = new TimelineLite();
//     //     tl.to($(".project-preview"), 1.3, {
//     //       width: 0,
//     //       ease: Expo.easeInOut
//     //     });
//     //   });
//   });

//   $(".navigation-link-1").hover(function() {
//     $(".project-preview").css({ "background-image": "url(img/laura-1.jpg)" });
//   });

//   $(".navigation-link-2").hover(function() {
//     $(".project-preview").css({ "background-image": "url(img/lobostudio.jpg)" });
//   });

//   $(".navigation-link-3").hover(function() {
//     $(".project-preview").css({ "background-image": "url(img/zoe.jpg)" });
//   });

//   $(".navigation-link-4").hover(function() {
//     $(".project-preview").css({ "background-image": "url(img/liis-.jpg)" });
//   });
