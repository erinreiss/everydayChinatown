// Re-set audio after changing language
$('.lButton').on('click', function(e) {
    if (player.play) {
      //volume animation seems to not be working
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
    } 
});

// Re-set audio after changing slides
$('.prev, .next').on('click', function(e) {
    if (player.play) {
      //volume animation seems to not be working
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
    } 
});

// Re-set audio after clikcing dots
$('.dot').on('click', function(e) {
    if (player.play) {
      //volume animation seems to not be working
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
    } 
});

//Click listener for site language
$('#lCanto').on('click', function(e) {
    console.log(this.id);
    $('#englishSiteT, #englishSite1, #englishSite2').css("display", "none");
    $('#mandarinSiteT, #mandarinSite1, #mandarinSite2').css("display", "none");
    $('#cantoneseSiteT, #cantoneseSite1, #cantoneseSite2').css("display", "block");
});

$('#lMando').on('click', function(e) {
    console.log(this.id);
    $('#englishSiteT, #englishSite1, #englishSite2').css("display", "none");
    $('#mandarinSiteT, #mandarinSite1, #mandarinSite2').css("display", "block");
    $('#cantoneseSiteT, #cantoneseSite1, #cantoneseSite2').css("display", "none");
});

$('#lEng').on('click', function(e) {
    console.log(this.id);
    $('#englishSiteT, #englishSite1, #englishSite2').css("display", "block");
    $('#mandarinSiteT, #mandarinSite1, #mandarinSite2').css("display", "none");
    $('#cantoneseSiteT, #cantoneseSite1, #cantoneseSite2').css("display", "none");
});

// Universal click listener for audio
$('.button').on('click', function(e) {
  var player = document.getElementById('player');
  var ID = $(this).attr('id');
  // For testing on local server vvVVvvV
  // var path = 'http://localhost:8000/audio/';
  var path = 'https://erinreiss.github.io/everydayChinatown/audio/';
  var SRC = path + slideIndex + ID + '.mp3';
  console.log('Current Object:')
  console.log(slideIndex)
  // console.log('This:')
  // console.log(this)
  console.log('SRC:')
  console.log(SRC)
  // console.log('player.src:')
  // console.log(player.src)
  if (player.paused && (player.src === SRC)) {
    player.play();
  } else if (!player.paused && (player.src === SRC)) {
    player.pause();
  } else {
    player.pause();
    player.currentTime = 0;
    player.src = SRC;
    player.load();
    player.play();
  }
  // var qID = "#" + $(this).attr('id') + "_quote";
  // console.log('qID:')
  // console.log(qID)
  // $(qID).toggleClass("startOpacity0", 400);
});

// OLD (potentially useful) CODE FROM PREVIOUS RELATED PROJECTS

// Next slide get id - FAILED
// $('.slideMove').on('click', function(e) {
//     console.log('but also')
// });

// $('.prev').on('click', function(e) {
//     console.log('but also')
// });

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

// Set up some FAQ variables.
// var faqsSections = $('.cd-faq-group');
// var faqTrigger = $('.cd-faq-trigger');
// var faqsContainer = $('.cd-faq-items');
// var faqsCategoriesContainer = $('.cd-faq-categories');
// var faqsCategories = faqsCategoriesContainer.find('a');
// var closeFaqsContainer = $('.cd-close-panel');


// Set up some variables. Do I need these???
// var headshot = $(".headshot");
// var headshotStatusQuo = $(".headshotStatusQuo");
// var intro1_Top = $('#intro1').offset().top;
// var intro2_Top = $('#intro2').offset().top;  
// var intro2_Top_2 = $('#wrapperIntro2a').offset().top;  
// var intro8_Top = $('#wrapperIntro8').offset().top;  

//Sticky for TopNav 
// var sticky_topNav = new Waypoint.Sticky({
//   element: $('.topnav')[0]
// })

//Click listener for Interactions Headshots
// $('#interactionsPhotos').on('click', 'img', function(e) {
//   $('.headshotInteractions').click(function(){
//        $('.headshotInteractions').not(this).each(function(){
//           $(this).animate({"opacity": .3});
//        });
//        $(this).animate({"opacity": 1});
//     });
// });

// Cilck
// $('#intro5a').waypoint(function (direction) {
//   if(direction == 'down'){
//     console.log('Hello Click me');
//     $('#clickPhotos4').animate({"opacity": 1}, "slow");
//   } else {
//     console.log('Goodbye Click me');
//     $('#clickPhotos4').animate({"opacity": 0}, "slow");
//   }
// }, {offset: '99%'});

