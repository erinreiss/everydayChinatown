//Refresh on window resize - seems to only work the first time...
// $(window).resize(function() {
//     if(this.resizeTO) clearTimeout(this.resizeTO);
//     this.resizeTO = setTimeout(function() {
//         $(this).trigger('resizeEnd');
//     }, 500);
// });

// $(window).bind('resizeEnd', function() {
//   console.log("Window was resized");
//   location.reload();
// });

// Set up some FAQ variables.
var faqsSections = $('.cd-faq-group');
var faqTrigger = $('.cd-faq-trigger');
var faqsContainer = $('.cd-faq-items');
var faqsCategoriesContainer = $('.cd-faq-categories');
var faqsCategories = faqsCategoriesContainer.find('a');
var closeFaqsContainer = $('.cd-close-panel');

//show FAQ content clicking on faqTrigger
  faqTrigger.on('click', function(event){
    console.log("hello!")
    event.preventDefault();
    $(this).next('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
  });

$(document).ready(function(){
    $(this).scrollTop(0);
});

// Warning message for Mobile
//initiate as false
var isMobile = false; 
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
//Give the message if true

$(document).ready(function(){
  console.log(isMobile);
    if (isMobile == true){
    alert('Sadly, this site does not work on mobile devices. Please visit us using Chrome on a laptop or desktop.');
    }
});

// Set up some variables. Do I need these???
var headshot = $(".headshot");
var headshotStatusQuo = $(".headshotStatusQuo");
var intro1_Top = $('#intro1').offset().top;
var intro2_Top = $('#intro2').offset().top;  
var intro2_Top_2 = $('#wrapperIntro2a').offset().top;  
var intro8_Top = $('#wrapperIntro8').offset().top;  

//Sticky for TopNav 
var sticky_topNav = new Waypoint.Sticky({
  element: $('.topnav')[0]
})

//Fade top nav and scroll arrow
$('#intro1').waypoint(function (direction) {
  if(direction == 'down'){
    console.log("topnav recede");
    //make slow
    $('.topnav').addClass("hiddenBar", 1000);
    $('#scrollArrow').animate({"opacity": 1}, "slow");
  } else {
    //make slow
    console.log("topnav Full");
    $('.topnav').removeClass("hiddenBar", 1000);
    $('#scrollArrow').animate({"opacity": 0}, "slow");
  }
}, {offset: '20%'});

//Delayed fading landing with scroll
var intro1Activate = $('#intro1').waypoint(function (direction) {
  //GETTING A BASTARD TO COUNT DOWN ON SCROLL DOWN
  $(document).scroll(function(e){
      // console.log("position relative to window: " + (intro1_Top - window.scrollY));
    var scrollPercent1 = (intro1_Top - window.scrollY) / 350;
      if(scrollPercent1 >= 0){
          $('#intro0').css('opacity', scrollPercent1);
      }
  });
}, {offset: 350});

//Sticky for #intro1 
var sticky_1b = new Waypoint.Sticky({
  element: $('#wrapperIntro1b')[0]
})

// Fade in/out intro1b photos
$('#intro1a').waypoint(function(direction) {
  if(direction == 'down'){
    $('#statusQuoPhotos').animate({"opacity": 1}, "slow");
    $('#statusQuoPhotos').css("pointer-events", "auto");
    console.log ('Hello intro1 photobank');
  } else {
    console.log ('Goodbye intro1 photobank');
    $('#statusQuoPhotos').animate({"opacity": 0}, "slow");
    $('#statusQuoPhotos').css("pointer-events", "none");
    if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
      // player.load();
    } 
  }
}, {offset: '0%'});

// Un/Re-sticking intro1
$('#intro2').waypoint(function(direction) {
  if(direction == 'down'){
    $('#wrapperIntro1b').removeClass('stuck').addClass('sticky-surpassed');
    console.log ('Un-stick intro1b');
  } else {
    $('#wrapperIntro1b').removeClass('sticky-surpassed').addClass('stuck');
    console.log ('Re-stick intro1b'); 
  }
}, {offset: '100%'});

// Re-set audio and and clickability after scrolling away from intro1
$('#intro2').waypoint(function(direction) {
  if(direction == 'down'){
    console.log("Fading out and Resetting audio and photos on intro1b");
    if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
    } 
    // $('#statusQuoPhotos').animate({"opacity": 0}, "slow");
    $('#statusQuoPhotos').css("pointer-events", "none");
  } else {
    // $('#statusQuoPhotos').animate({"opacity": 1}, "slow");
    $('#statusQuoPhotos').css('pointer-events', 'auto');  
  }
}, {offset: '70%'});

//Fade Intro1 Photos into existence and make them clickable - muted for now, for reseting triggers test
// $('#intro1').waypoint(function (direction) {
//   $(document).scroll(function(){
//       // console.log("position relative to window: " + (intro1_Top - window.scrollY));
//       var scrollPercent2 = ((intro1_Top - window.scrollY) * -1) / 300;
//       // console.log(scrollPercent2);
//       $('#intro1b').css('opacity', scrollPercent2);
//   });
// });


// Kyle_statusQuo Hover Listner
$('#kyle_statusQuo')
  .mouseenter(function(){
    $('#kyle_statusQuo').attr("src", "images/kyle_statusQuo2.jpg");
  })
  .mouseleave(function(){
    $('#kyle_statusQuo').attr("src", "images/kyle_statusQuo.jpg");
  });

  // Darin_statusQuo Hover Listner
$('#darin_statusQuo')
  .mouseenter(function(){
    $('#darin_statusQuo').attr("src", "images/darin_statusQuo2.jpg");
  })
  .mouseleave(function(){
    $('#darin_statusQuo').attr("src", "images/darin_statusQuo.jpg");
  });

// Universal click listener for audio and quotes (not Vertical quotes)
$('.photoBank').on('click', 'img', function(e) {
  var player = document.getElementById('player');
  var ID = $(this).attr('id');
  // For testing on local server vvVVvvV
  // var path = 'http://localhost:8000/audio/';
  var path = 'https://erinreiss.github.io/spaceship1/audio/';
  var SRC = path + ID + '.mp3';
  // console.log(this)
  // console.log('and')
  // console.log(SRC)
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
  var qID = "#" + $(this).attr('id') + "_quote";
  console.log(qID)
  $(qID).toggleClass("startOpacity0", 400);
});

//Click listener for StatusQuo Headshots
$('#statusQuoPhotos').on('click', 'img', function(e) {
  var player = document.getElementById('player');
  var ID = $(this).attr('id');
  var path = 'https://erinreiss.github.io/spaceship1/audio/';
  var SRC = path + ID + '.mp3';
  console.log(this)
  console.log('and')
  console.log(SRC)
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

//Click listener for Reactions1a Headshots
$('#reaction1aPhotos').on('click', 'img', function(e) {
  $('.headshotReaction1a').click(function(){
       $('.headshotReaction1a').not(this).each(function(){
          $(this).animate({"opacity": .3});
       });
       $(this).animate({"opacity": 1});
    });
});

//Click listener for Reactions1b Headshots
$('#reaction1bPhotos').on('click', 'img', function(e) {
  $('.headshotReaction1b').click(function(){
       $('.headshotReaction1b').not(this).each(function(){
          $(this).animate({"opacity": .3});
       });
       $(this).animate({"opacity": 1});
    });
});

//Click listener for Reactions2 Headshots
$('#reaction2Photos').on('click', 'img', function(e) {
  $('.headshotReaction2').click(function(){
       $('.headshotReaction2').not(this).each(function(){
          $(this).animate({"opacity": .3});
       });
       $(this).animate({"opacity": 1});
    });
});

//Click listener for Reactions3 Headshots
$('#reaction3Photos').on('click', 'img', function(e) {
  $('.headshotReaction3').click(function(){
       $('.headshotReaction3').not(this).each(function(){
          $(this).animate({"opacity": .3});
       });
       $(this).animate({"opacity": 1});
    });
});

//Sticky for #intro2
// var sticky_2 = new Waypoint.Sticky({
//   element: $('#wrapperIntro2a')[0]
// })

//Fade into intro2 ministory
$('#wrapperIntro2a').waypoint(function (direction) {
  console.log('Begin intro 2 - all text - fading its first couple paragraphs');
// GETTING A BASTARD TO COUNT DOWN ON SCROLL DOWN
  $(document).scroll(function(e){
  //   console.log("intro2_Top_2: " + intro2_Top_2);
  //   console.log("window.scrollY: " + window.scrollY);
    var scrollPercent3 = (intro2_Top_2 - window.scrollY) / 100;
    // console.log(scrollPercent3);
      if(scrollPercent3 >= 0){
          $('#intro2_sub0, #intro2_sub00').css('opacity', scrollPercent3);
      }
  });
}, {offset: "10%"});

//Fade in/out intro3title 
$('#intro2_sub1').waypoint(function (direction) {
  console.log('Hello intro3title');
  if(direction == 'down'){
    $('#intro3title, .intro2_sub2').animate({"opacity": 1}, "slow");
    // $("#intro2_sub1, #intro2_sub2").animate({"opacity": 0}, "slow");
  } else {
    $('#intro3title, .intro2_sub2').animate({"opacity": 0}, "slow");
    // $("#intro2_sub1, #intro2_sub2").animate({"opacity": 1}, "slow");
  }
}, {offset: "25%"});

//Resticking intro2 for scrollaway
// $('#wrapperIntro2a').waypoint(function (direction) {
//   console.log('Bye intro2');
//   if(direction == 'down'){
//     $('#wrapperIntro2a').removeClass('stuck').addClass('sticky-surpassed');
//   } else {
//     $('#wrapperIntro2a').removeClass('sticky-surpassed').addClass('stuck');
//   }
// }, {offset: "1%"});

//sticky for #intro3
var sticky_3 = new Waypoint.Sticky({
  element: $('#wrapperIntro3')[0]
})

//Fade intro3 photo in/out
$('#wrapperIntro3').waypoint(function (direction) {
  if(direction == 'down'){
    console.log("Hello Intro3 Photos");
    $('#intro3banks').animate({"opacity": 1}, "slow");
  } else {
    console.log("Goodbye Intro3 Photos");
    $('#intro3banks').animate({"opacity": 0}, "slow");
  }
});

//Fade intro3 photos a lil bit on quote scroll in
$('#defineTimeIntro3').waypoint(function (direction) {
  if(direction == 'down'){
    console.log("fade out a lil intro 3 photos");
    $('#questionPhotos').animate({"opacity": .3}, "slow");
  } else {
    console.log("fade in a lil intro 3 photos");
    $('#questionPhotos').animate({"opacity": 1}, "slow");
  }
}, {offset: '60%'});

//Re/un-stick Intro3
$('#intro4').waypoint(function (direction) {
  if(direction == 'down'){
    $('#wrapperIntro3').removeClass('stuck').addClass('sticky-surpassed');
    console.log ('Un-stick intro 3');
  } else {
    $('#wrapperIntro3').removeClass('sticky-surpassed').addClass('stuck');
    console.log ('Re-stick intro 3');
  }
}, {offset: '100%'});

//Fade in/out intro4title and when #intro4 hits top of screen
$('#wrapperIntro4').waypoint(function (direction) {
  console.log('hello intro4title');
  if(direction == 'down'){
    $('#intro4title').animate({"opacity": 1}, "slow");
  } else {
    $('#intro4title').animate({"opacity": 0}, "slow");
  }
}, {offset: '40%'});

//sticky for #intro4
var sticky_4 = new Waypoint.Sticky({
  element: $('#wrapperIntro4')[0]
})

//Hello/Goodbye intro4 photos and quotes
$('#wrapperIntro4').waypoint(function (direction) {
  if(direction == 'down'){
    console.log('Hello intro4 photos and quotes');
    $('#interactionsPhotos').animate({"opacity": 1}, "slow");
    $('#interactionsPhotos').css("pointer-events", "auto")
    // $('#clickPhotos4').animate({"opacity": 1}, "slow");
  } else {
    if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
    } 
    console.log('Goodbye intro4 photos and quotes');
    $('#interactionsPhotos').animate({"opacity": 0}, "slow");
    $('.headshotInteractions').animate({"opacity": 1}, "slow");
    $('.quote').addClass("startOpacity0", 400);
    $('#interactionsPhotos').css("pointer-events", "none")
    // $('#clickPhotos4').animate({"opacity": 0}, "slow");
  }
}, {offset: '20%'});

// Cilck
$('#intro5a').waypoint(function (direction) {
  if(direction == 'down'){
    console.log('Hello Click me');
    $('#clickPhotos4').animate({"opacity": 1}, "slow");
  } else {
    console.log('Goodbye Click me');
    $('#clickPhotos4').animate({"opacity": 0}, "slow");
  }
}, {offset: '99%'});

// Reset style and audio for intro4banks on scroll away when intro5 is 50% from top
$("#intro5a").waypoint(function (direction) {
  if(direction == 'down'){
  console.log('Darius and Damontae quote highlight and audio/visual reset on intro4');
    $('.headshot.intro4keep').animate({"opacity": 1}, "slow");
    $('.headshot.intro4leave').animate({"opacity": 0}, "slow");
    $('.quote.intro4keep').removeClass("startOpacity0", 400);
    $('.quote.intro4leave').addClass("startOpacity0", 400);
    $('.headshotInteractions').css("pointer-events", "none");
    $('#clickPhotos4').animate({"opacity": 0}, "slow");
      if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
      // player.load();
      } 
  } else {
    $('.headshotInteractions').css("pointer-events", "auto")
    $('#clickPhotos4').animate({"opacity": 1}, "slow");
    $('.headshotInteractions').animate({"opacity": 1}, "slow");
    $('.quote.intro4keep').addClass("startOpacity0", 400);
  }
}, {offset: '80%'});

//sticky for #intro5a
var sticky_5a = new Waypoint.Sticky({
  element: $('#wrapperIntro5a')[0]
})

//Fade in/out intro4 10 px after intro5a hits top of screen
$('#wrapperIntro5a').waypoint(function (direction) {
  console.log('Bye intro 4, hello intro5a - big photos of kids');
  if(direction == 'down'){
    $('#wrapperIntro4').animate({"opacity": 0}, "slow");
    $('#wrapperIntro5a').animate({"opacity": 1}, "slow");
  } else {
    $('#wrapperIntro4').animate({"opacity": 1}, "slow");
    $('#wrapperIntro5a').animate({"opacity": 0}, "slow");
  }
}, {offset: "40%"});

//Fade in/out babypara 20% before intro5a2para hits, and Un-sticking intro4
$('#wrapperIntro5c').waypoint(function (direction) {
  $('.headshot').css("opacity", 1);
  if(direction == 'down'){
    console.log('Fade out that little baby paragraph after interactions');
    $('#intro5a2para').animate({"opacity": 0}, "slow");
    // $('#wrapperPoliceReact1Header').animate({"opacity": 1}, "slow");
    $('#wrapperIntro4').removeClass('stuck').addClass('sticky-surpassed');
  } else {
    console.log('Fade in that little baby paragraph after interactions');
    $('#intro5a2para').animate({"opacity": 1}, "slow");
    // $('#wrapperPoliceReact1Header').animate({"opacity": 0}, "slow");
    $('#wrapperIntro4').removeClass('sticky-surpassed').addClass('stuck');
  }
}, {offset: '80%'});
    
//sticky for #wrapperPoliceReact1Header
var sticky_5b = new Waypoint.Sticky({
  element: $('#wrapperPoliceReact1Header')[0]
})

//sticky for #intro5c
var sticky_5c = new Waypoint.Sticky({
  element: $('#wrapperIntro5c')[0]
})

// Changing Police React 1 header to/from white background
$('#intro5c').waypoint(function (direction){
  console.log('Changing Police React 1 header to/from white background')
  if(direction == 'down'){
    $("#wrapperPoliceReact1Header").css("background-color", "white");
  } else {
    $("#wrapperPoliceReact1Header").css("background-color", "");
  }
});

//Fade in/out intro5c photos and audio on entrance
$('#defineTimeIntro5c').waypoint(function (direction) {
  if(direction == 'down'){
    console.log('Hello intro5c photos and quotes');
    $('#reaction1aPhotos').animate({"opacity": 1}, "slow");
    $('#reaction1aPhotos').css("pointer-events", "auto")
    $('#clickPhotos5c').animate({"opacity": 1}, "slow");
  } else {
      if (player.play) {
        //is this volume animation even working???
        player.animate({volume: 0.0}, 1000);
        player.pause();
        player.currentTime = 0;
        player.animate({volume: 1.0}, 0);
      } 
    console.log('Goodbye intro5c photos and quotes scrolling up');
    $('#reaction1aPhotos').animate({"opacity": 0}, "slow");
    $('.headshotReaction1a').animate({"opacity": 1}, "slow");
    $('.quoteVertical').addClass('startOpacity0');
    $('#reaction1aPhotos').css("pointer-events", "none")
    $('#clickPhotos5c').animate({"opacity": 0}, "slow");
  }
  }, {offset: '85%'});

//Un/Re-stick wrapperIntro5c
$('#wrapperIntro5d').waypoint(function (direction) {
  if(direction == 'down'){
    console.log("Un-sticking 5c");
    $('#wrapperIntro5c').removeClass('stuck').addClass('sticky-surpassed');
  } else {
    console.log("Re-sticking 5c");
    $('#wrapperIntro5c').removeClass('sticky-surpassed').addClass('stuck');
  }
}, {offset: '100%'});

//Fading out/in intro5c photos and audio on exit
$('#wrapperIntro5d').waypoint(function (direction) {
  if(direction == 'down'){
      console.log("Goodbye intro5c photos and quotes scrolling down");
      if (player.play) {
        //is this volume animation even working???
        player.animate({volume: 0.0}, 1000);
        player.pause();
        player.currentTime = 0;
        player.animate({volume: 1.0}, 0);
      }
      $('#reaction1aPhotos').css("pointer-events", "none")
      $('.quoteVertical').addClass('startOpacity0');
      $('.headshotReaction1a').animate({"opacity": 1}, "slow");
      $('#clickPhotos5c').animate({"opacity": 0}, "slow");
  } else {
      console.log("Hello intro5c photos and quotes scrolling up");
      $('#reaction1aPhotos').css("pointer-events", "auto")
      $('#clickPhotos5c').animate({"opacity": 1}, "slow");
  }
}, {offset: '60%'});

//sticky for #intro5d
var sticky_5d = new Waypoint.Sticky({
  element: $('#wrapperIntro5d')[0]
})

//Un/Re-stick wrapperIntro5d
$('#wrapperIntro5e').waypoint(function (direction) {
  console.log("Bye 5d, hello 5e");
  if(direction == 'down'){
    $('#wrapperIntro5d').removeClass('stuck').addClass('sticky-surpassed');
  } else {
    $('#wrapperIntro5d').removeClass('sticky-surpassed').addClass('stuck');
  }
}, {offset: '100%'});

//sticky for #intro5e
var sticky_5e = new Waypoint.Sticky({
  element: $('#wrapperIntro5e')[0]
})

//Fade in/out intro5e photos and audio on entrance
$('#defineTimeIntro5e').waypoint(function (direction) {
  if(direction == 'down'){
    console.log('Hello intro5e photos and quotes');
    $('#reaction1bPhotos').animate({"opacity": 1}, "slow");
    $('#reaction1bPhotos').css("pointer-events", "auto")
    $('#clickPhotos5c').animate({"opacity": 1}, "slow");
  } else {
      if (player.play) {
        //is this volume animation even working???
        player.animate({volume: 0.0}, 1000);
        player.pause();
        player.currentTime = 0;
        player.animate({volume: 1.0}, 0);
      } 
    console.log('Goodbye intro5e photos and quotes scrolling up');
    $('#reaction1bPhotos').animate({"opacity": 0}, "slow");
    $('.headshotReaction1b').animate({"opacity": 1}, "slow");
    $('.quoteVertical').addClass('startOpacity0');
    $('#reaction1bPhotos').css("pointer-events", "none")
    $('#clickPhotos5c').animate({"opacity": 0}, "slow");
  }
  }, {offset: '85%'});

//Fade out/in intro5a (big student photos)
$('#wrapperStudentsReact1Header').waypoint(function (direction) {
  console.log("Fade out/in 5a");
  if(direction == 'down'){
    $('#wrapperIntro5a').animate({"opacity": 0}, "slow");
  } else {
    $('#wrapperIntro5a').animate({"opacity": 1}, "slow");
  }
}, {offset: '110%'});

// Fade out/in wrapperPoliceReact1Header
$('#defineTimeIntro5e').waypoint(function (direction) {
  if(direction == 'down'){
    console.log("Fade out 5b");
    $('#wrapperPoliceReact1Header').animate({"opacity": 0}, 800);
  } else {
    console.log("Fade in 5b");
    $('#wrapperPoliceReact1Header').animate({"opacity": 1}, 800);
  }
}, {offset: '65%'});

//Un/Re-stick wrapperIntro5e
$('#wrapperStudentsReact1Header').waypoint(function (direction) {
  console.log("Un-sticking 5e");
  if(direction == 'down'){
    $('#wrapperIntro5e').removeClass('stuck').addClass('sticky-surpassed');
  } else {
    $('#wrapperIntro5e').removeClass('sticky-surpassed').addClass('stuck');
  }
}, {offset: '100%'});

//Fading out/in intro5e photos and audio on exit, fade in/out introa, un/restick wrapperPoliceReact1Header
$('#wrapperStudentsReact1Header').waypoint(function (direction) {
  console.log("Fading out/in intro5e photos and audio on exit, fade in/out introa, un/restick wrapperPoliceReact1Header scrolling up");
  if(direction == 'down'){
      if (player.play) {
        //is this volume animation even working???
        player.animate({volume: 0.0}, 1000);
        player.pause();
        player.currentTime = 0;
        player.animate({volume: 1.0}, 0);
      }
      $('#wrapperIntro5e').stop(true, true).delay(1000).animate({"opacity": 0}, 800);
      $('#wrapperIntro6a').animate({"opacity": 1}, 800);
      $('#wrapperPoliceReact1Header').removeClass('stuck').addClass('sticky-surpassed');
      $('#reaction1bPhotos').css("pointer-events", "none");
      $('.quoteVertical').addClass('startOpacity0');
      $('.headshotReaction1b').animate({"opacity": 1}, "slow");
      $('#clickPhotos5c').animate({"opacity": 0}, "slow");
  } else {
      $('#reaction1bPhotos').css("pointer-events", "auto");
      $('#wrapperIntro5e').animate({"opacity": 1}, 800);
      $('#wrapperIntro6a').animate({"opacity": 0}, 800);
      $('#wrapperPoliceReact1Header').removeClass('sticky-surpassed').addClass('stuck');
      $('#clickPhotos5c').animate({"opacity": 1}, "slow");
  }
}, {offset: '100%'});

//sticky for #intro6a
var sticky_6a = new Waypoint.Sticky({
  element: $('#wrapperIntro6a')[0]
})

//Fade in/out intro6c photos and audio on entrance
$('#defineTimeIntro6c').waypoint(function (direction) {
  if(direction == 'down'){
    console.log('Hello intro6c photos and quotes');
    $('#reaction2Photos').animate({"opacity": 1}, "slow");
    $('#reaction2Photos').css("pointer-events", "auto")
      $('#clickPhotos6c').animate({"opacity": 1}, "slow");
  } else {
      if (player.play) {
        //is this volume animation even working???
        player.animate({volume: 0.0}, 1000);
        player.pause();
        player.currentTime = 0;
        player.animate({volume: 1.0}, 0);
      } 
    console.log('Goodbye intro6c photos and quotes scrolling up');
    $('#reaction2Photos').animate({"opacity": 0}, "slow");
    $('.headshotReaction2').animate({"opacity": 1}, "slow");
    $('.quoteVertical').addClass('startOpacity0');
    $('#reaction2Photos').css("pointer-events", "none")
    $('#clickPhotos6c').animate({"opacity": 0}, "slow");
  }
  }, {offset: '90%'});

//BOOO

//Fade out/in intro6a (big cop photos)
$('#wrapperPoliceReact2Header').waypoint(function (direction) {
  if(direction == 'down'){
    console.log("Fade out 6a - big photos of cops");
    $('#wrapperIntro6a').animate({"opacity": 0}, "slow");
  } else {
    console.log("Fade in 6a - big photos of cops");
    $('#wrapperIntro6a').animate({"opacity": 1}, "slow");
  }
}, {offset: '110%'});

//sticky for #wrapperStudentsReact1Header
// var sticky_6b = new Waypoint.Sticky({
//   element: $('#wrapperStudentsReact1Header')[0]
// })

//sticky for #intro6c
var sticky_6c = new Waypoint.Sticky({
  element: $('#wrapperIntro6c')[0]
})

// Fade out/in wrapperStudentsReact1Header
// $('#defineTimeIntro6c').waypoint(function (direction) {
//   if(direction == 'down'){
//     console.log("Fade out Students React Header");
//     $('#wrapperStudentsReact1Header').animate({"opacity": 0}, 800);
//   } else {
//     console.log("Fade in Students React Header");
//     $('#wrapperStudentsReact1Header').animate({"opacity": 1}, 800);
//   }
// }, {offset: '65%'});

//Un/Re-stick wrapperIntro6c and 6a
$('#wrapperPoliceReact2Header').waypoint(function (direction) {
  console.log("Un-sticking 6c and 6a");
  if(direction == 'down'){
    $('#wrapperIntro6c, #wrapperIntro6a').removeClass('stuck').addClass('sticky-surpassed');
  } else {
    $('#wrapperIntro6c, #wrapperIntro6a').removeClass('sticky-surpassed').addClass('stuck');
  }
}, {offset: '100%'});

//Fading out/in intro6c photos and audio on exit, fade in/out intro7a, un/restick wrapperStudentsReact1Header
$('#wrapperPoliceReact2Header').waypoint(function (direction) {
  if(direction == 'down'){
    console.log("Fading out 6c photos and audio, fade in intro7a, Unstick Students React Header - scrolling up");
      if (player.play) {
        //is this volume animation even working???
        player.animate({volume: 0.0}, 1000);
        player.pause();
        player.currentTime = 0;
        player.animate({volume: 1.0}, 0);
      }
      $('#wrapperIntro6c').stop(true, true).delay(1000).animate({"opacity": 0}, 800);
      $('#wrapperIntro7a').animate({"opacity": 1}, 800);
      // $('#wrapperStudentsReact1Header').removeClass('stuck').addClass('sticky-surpassed');
      $('#reaction2Photos').css("pointer-events", "none");
      $('.quoteVertical').addClass('startOpacity0');
      $('.headshotReaction2').animate({"opacity": 1}, "slow");
      $('#clickPhotos6c').animate({"opacity": 0}, "slow");
  } else {
      console.log("Fading in 6c photos and audio, fade out intro7a, Restick Students React Header - scrolling up");
      $('#reaction2Photos').css("pointer-events", "auto");
      $('#wrapperIntro6c').animate({"opacity": 1}, 1000);
      $('#wrapperIntro7a').animate({"opacity": 0}, 800);
      // $('#wrapperStudentsReact1Header').removeClass('sticky-surpassed').addClass('stuck');
      $('#clickPhotos6c').animate({"opacity": 1}, "slow");
  }
}, {offset: '95%'});

//BOOOO

//Fade in/out intro7c photos and audio on entrance
$('#defineTimeIntro7c').waypoint(function (direction) {
  if(direction == 'down'){
    console.log('Hello intro7c photos and quotes');
    $('#reaction3Photos').animate({"opacity": 1}, "slow");
    $('#reaction3Photos').css("pointer-events", "auto")
    $('#clickPhotos7c').animate({"opacity": 1}, "slow");
  } else {
      if (player.play) {
        //is this volume animation even working???
        player.animate({volume: 0.0}, 1000);
        player.pause();
        player.currentTime = 0;
        player.animate({volume: 1.0}, 0);
      } 
    console.log('Goodbye intro7c photos and quotes scrolling up');
    $('#reaction3Photos').animate({"opacity": 0}, "slow");
    $('.headshotReaction3').animate({"opacity": 1}, "slow");
    $('.quoteVerticalQuad').addClass('startOpacity0');
    $('#reaction3Photos').css("pointer-events", "none")
    $('#clickPhotos7c').animate({"opacity": 0}, "slow");
  }
  }, {offset: '90%'});

//Fade out/in intro7a (big student photos)
$('#wrapperIntro7d').waypoint(function (direction) {
  if(direction == 'down'){
    console.log("Fade out 7a - big photos of students2");
    $('#wrapperIntro7a').animate({"opacity": 0}, "slow");
  } else {
    console.log("Fade in 7a - big photos of students2");
    $('#wrapperIntro7a').animate({"opacity": 1}, "slow");
  }
}, {offset: '110%'});

// Fade out/in wrapperPoliceReact2Header
// $('#defineTimeIntro7c').waypoint(function (direction) {
//   if(direction == 'down'){
//     console.log("Fade out Police React Header 2");
//     $('#wrapperPoliceReact2Header').animate({"opacity": 0}, 800);
//   } else {
//     console.log("Fade in Police React Header 2");
//     $('#wrapperPoliceReact2Header').animate({"opacity": 1}, 800);
//   }
// }, {offset: '65%'});

//Un/Re-stick wrapperIntro7c and wrapperIntro7a - good waypoint?
$('#wrapperIntro7d').waypoint(function (direction) {
  console.log("Un-sticking 7c and 7a");
  if(direction == 'down'){
    $('#wrapperIntro7c, #wrapperIntro7a').removeClass('stuck').addClass('sticky-surpassed');
  } else {
    $('#wrapperIntro7c, #wrapperIntro7a').removeClass('sticky-surpassed').addClass('stuck');
  }
}, {offset: '100%'});

//Fading out/in intro7c photos and audio on exit, un/restick wrapperPoliceReact2Header
$('#wrapperIntro7d').waypoint(function (direction) {
  if(direction == 'down'){
    console.log("Fading out 7c photos and audio, Unstick wrapperPoliceReact2Header - scrolling up");
      if (player.play) {
        //is this volume animation even working???
        player.animate({volume: 0.0}, 1000);
        player.pause();
        player.currentTime = 0;
        player.animate({volume: 1.0}, 0);
      }
      $('#wrapperIntro7c').stop(true, true).delay(1000).animate({"opacity": 0}, 800);
      // $('#wrapperIntro7a').animate({"opacity": 1}, 800);
      // $('#wrapperPoliceReact2Header').removeClass('stuck').addClass('sticky-surpassed');
      $('#reaction3Photos').css("pointer-events", "none");
      $('.quoteVerticalQuad').addClass('startOpacity0');
      $('.headshotReaction3').animate({"opacity": 1}, "slow");
      $('#clickPhotos7c').animate({"opacity": 0}, "slow");
  } else {
      console.log("Fading in 7c photos and audio, Restick wrapperPoliceReact2Header - scrolling up");
      $('#reaction3Photos').css("pointer-events", "auto");
      $('#wrapperIntro7c').animate({"opacity": 1}, 800);
      // $('#wrapperPoliceReact2Header').removeClass('sticky-surpassed').addClass('stuck');
      $('#clickPhotos7c').animate({"opacity": 1}, "slow");
  }
}, {offset: '95%'});

// Changing Students React header to/from white background
$('#wrapperIntro6c').waypoint(function (direction){
  console.log('Changing Students React header to/from white background')
  if(direction == 'down'){
    $("#wrapperStudentsReact1Header").css("background-color", "white");
  } else {
    $("#wrapperStudentsReact1Header").css("background-color", "");
  }
});

// var sticky_7b = new Waypoint.Sticky({
//   element: $('#wrapperPoliceReact2Header')[0]
// })

//sticky for #intro7c
var sticky_6c = new Waypoint.Sticky({
  element: $('#wrapperIntro7c')[0]
})

//Fade in/out top nav
$('#intro8').waypoint(function (direction) {
  if(direction == 'up'){
    console.log("topnav recede");
    //make slow
    $('.topnav').addClass("hiddenBar", 1000);
    $('#scrollArrow').animate({"opacity": 1}, "slow");
  } else {
    //make slow
    console.log("topnav Full");
    $('.topnav').removeClass("hiddenBar", 1000);
    $('#scrollArrow').animate({"opacity": 0}, "slow");
  }
}, {offset: '20%'});

//sticky for #intro8
var sticky_8 = new Waypoint.Sticky({
  element: $('#wrapperIntro8')[0]
})

//Fade Intro8 Gene and Rolleri Quotes into existence
$('#intro8').waypoint(function (e) {
  console.log('Start fading gene and rolleri in')
  $(document).scroll(function(){
      // console.log("position relative to window: " + (intro1_Top - window.scrollY));
      var scrollPercent3 = ((intro8_Top +50 - window.scrollY) * -1) / 200;
      // console.log(scrollPercent3);
      $('#intro8banks').css('opacity', scrollPercent3);
  });
}, {offset: -50});

//Fading thankyou photo down for the final view
$('#defineTimeIntro8').waypoint(function (direction) {
  console.log("Fade thank you photo, but not fully");
  if(direction == 'down'){
    $('#thankYouPhoto').animate({"opacity": .3}, 800);
  } else {
    $('#thankYouPhoto').animate({"opacity": 1}, 800);
  }
}, {offset: '90%'});

//I should redo my reset audio and headshot code with this type of waypoint definitions
$('#reaction1bPhotos').waypoint(function (direction) {
  if(direction == 'down'){
  console.log("Reaction1bPhotos come into view");
  } else {
  console.log("Reaction1bPhotos leave view");
  }
}, {offset: '100%'});
