

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


// Re-set audio and and clickability after scrolling away from intro1
// $('#intro2').waypoint(function(direction) {
//   if(direction == 'down'){
//     console.log("Fading out and Resetting audio and photos on intro1b");
//     if (player.play) {
//       //is this volume animation even working???
//       player.animate({volume: 0.0}, 1000);
//       player.pause();
//       player.currentTime = 0;
//       player.animate({volume: 1.0}, 0);
//     } 
//     // $('#statusQuoPhotos').animate({"opacity": 0}, "slow");
//     $('#statusQuoPhotos').css("pointer-events", "none");
//   } else {
//     // $('#statusQuoPhotos').animate({"opacity": 1}, "slow");
//     $('#statusQuoPhotos').css('pointer-events', 'auto');  
//   }
// }, {offset: '70%'});



// Universal click listener for audio and quotes (not Vertical quotes)
$('.button').on('click', function(e) {
  var player = document.getElementById('player');
  var ID = $(this).attr('id');
  // For testing on local server vvVVvvV
  var path = 'http://localhost:8000/audio/';
  // var path = 'https://erinreiss.github.io/everydayChinatown/audio/';
  var SRC = path + ID + '.mp3';
  console.log(this)
  console.log('and')
  console.log(SRC)
  console.log('but also')
  console.log(player.src)
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
  var qID = "#" + $(this).attr('id') + "_quote";
  console.log(qID)
  $(qID).toggleClass("startOpacity0", 400);
});

//Click listener for Interactions Headshots
$('#interactionsPhotos').on('click', 'img', function(e) {
  $('.headshotInteractions').click(function(){
       $('.headshotInteractions').not(this).each(function(){
          $(this).animate({"opacity": .3});
       });
       $(this).animate({"opacity": 1});
    });
});


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

