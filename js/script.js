// Universal click listener for audio
// $('.button').on('click', function(e) {
//   var player = document.getElementById('playerContainer');
//   var ID = $(this).attr('id');
//   // For testing on local server vvVVvvV
//   var path = 'http://localhost:8000/audio/';
//   var path = 'https://erinreiss.github.io/everydayChinatown/audio/';
//   var SRC = path + slideIndex + ID + '.mp3';
//   console.log('Current Object:')
//   console.log(slideIndex)
//   console.log('This:')
//   console.log(this)
//   console.log('SRC:')
//   console.log(SRC)
//   console.log('player.src:')
//   console.log(player.src)
//   if (player.paused && (player.src === SRC)) {
//     player.play();
//   } else if (!player.paused && (player.src === SRC)) {
//     player.pause();
//   } else {
//     player.pause();
//     player.currentTime = 0;
//     player.src = SRC;
//     player.load();
//     player.play();
//   }
//   var qID = "#" + $(this).attr('id') + "_quote";
//   console.log('qID:')
//   console.log(qID)
//   $(qID).toggleClass("startOpacity0", 400);
// });

//Trying to log that shit
// $('#playerContainer').on('click', function(e) {
//   console.log(cap.audio)
// });

// Universal click listener for audio, with circle player
$('#playerContainer').on('click', function(e) {
  // console.log(cap.audio)
  // var player = document.getElementById('playerContainer');
  var player = document.getElementById('player');
  var ID = $('.button').attr('id');
  // var ID = $(this).attr('class');
  // For testing on local server vvVVvvV
  var path = 'http://localhost:8000/audio/';
  // var path = 'https://erinreiss.github.io/everydayChinatown/audio/';
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
});

/**
 * CircleAudioPlayer
 *
 * A minimalist audio player represented by a single button in a circle which
 * fills clockwise as the audio file progresses.
 *
 * Isolated to have no requirements.
 *
 * @param {object} options
 *   @prop {string} audio
 *   @prop {string} borderColor
 *   @prop {string} playedColor
 *   @prop {string} backgroundColor
 *   @prop {string} iconColor
 *   @prop {number} borderWidth
 *   @prop {number} size
 *   @prop {string} className - class to add to the canvas element
 *
 * @method {void} addEventListener (planned, not implemented)
 *   forwards to the canvas' addEventListener or the audio element's
 *   addEventListener, depending on whether or not the event string matches a
 *   media event
 *
 * @method {void} setAudio
 *   @param {string} audioUrl
 * @method {void} setSize
 *   @param {number} size
 * @method {void} appendTo
 *   @param {DOMElement} element
 * @method {void} play
 * @method {void} pause
 * @method {void} draw - force a redraw
 */
// requirements

// settings
var DEFAULTS = {
  //pre-play outer circle
  borderColor: "#ffffff",
  //as it plays outer circle
  playedColor: "#feda5d",
  // inner circle
  backgroundColor: "rgba(142,187,196,.2)",
  iconColor: "#ffffff",
  borderWidth: 2,
  size: 48,
  className: 'circle-audio-player'
};

// reused values
var pi = Math.PI;
var doublePi = pi * 2;
var arcOffset = -pi / 2;
var animTime = 200;
var loaderTime = 1800;

var CircleAudioPlayer = function (options) {
  options = options || {};
  for (var property in DEFAULTS) {
    this[property] = options[property] || DEFAULTS[property];
  }

  // create some things we need
  this._canvas = document.createElement('canvas');
  this._canvas.setAttribute('class', this.className + ' is-loading');
  this._canvas.addEventListener('mousedown', (function () {
    if (this.playing) {
      this.pause();
    }
    else {
      this.play();
    }
  }).bind(this));
  this._ctx = this._canvas.getContext('2d');

  // set up initial stuff
  // this.setAudio(SRC);
  this.setAudio(options.audio);
  this.setSize(this.size);

  // redraw loop
  (function cAPAnimationLoop (now) {
    // check if we need to update anything
    if (this.animating) {
      this._updateAnimations(now);
    }
    if (this._forceDraw || this.playing || this.animating || this.loading) {
      this._draw();
      this._forceDraw = false;
    }

    requestAnimationFrame(cAPAnimationLoop.bind(this));
  }).call(this, new Date().getTime());
};
CircleAudioPlayer.prototype = {
  // private methods
  _animateIcon: function (to, from) {
    // define a few things the first time
    this._animationProps = {
      animStart: null,
      from: from,
      to: to
    };
    if (from) {
      this.animating = true;
    }
    else {
      this._animationProps.current = this._icons[to].slice();
      this.draw();
    }
  },
  _updateAnimations: function (now) {
    this._animationProps.animStart = this._animationProps.animStart || now;
    var deltaTime = now - this._animationProps.animStart;
    var perc = (1 - Math.cos(deltaTime / animTime * pi / 2));
    if (deltaTime >= animTime) {
      this.animating = false;
      perc = 1;
      this._animationProps.current = this._icons[this._animationProps.to].slice();
      this.draw();
    }
    else {
      var from = this._icons[this._animationProps.from];
      var current = [];
      for (var i = 0; i < from.length; i++) {
        current.push([]);
        for (var j = 0; j < from[i].length; j++) {
          current[i].push([]);
          var to = this._icons[this._animationProps.to][i][j];
          current[i][j][0] = from[i][j][0] + (to[0] - from[i][j][0]) * perc;
          current[i][j][1] = from[i][j][1] + (to[1] - from[i][j][1]) * perc;
        }
      }
      this._animationProps.current = current;
    }
  },
  _draw: function (progress) {
    // common settings
    if (isNaN(progress)) {
      progress = this.audio.currentTime / this.audio.duration || 0;
    }

    // clear existing
    this._ctx.clearRect(0, 0, this.size, this.size);

    // draw bg
    this._ctx.beginPath();
    this._ctx.arc(this._halfSize, this._halfSize, this._halfSize - (this.borderWidth / 2), 0, doublePi);
    this._ctx.closePath();
    this._ctx.fillStyle = this.backgroundColor;
    this._ctx.fill();

    // draw border
    // our active path is already the full circle, so just stroke it
    this._ctx.lineWidth = this.borderWidth;
    this._ctx.strokeStyle = this.borderColor;
    this._ctx.stroke();

    // play progress
    if (progress > 0) {
      this._ctx.beginPath();
      this._ctx.arc(this._halfSize, this._halfSize, this._halfSize - (this.borderWidth / 2), arcOffset, arcOffset + doublePi * progress);
      this._ctx.strokeStyle = this.playedColor;
      this._ctx.stroke();
    }

    // icons
    this._ctx.fillStyle = this.iconColor;
    if (this.loading) {
      var loaderOffset = -Math.cos((new Date().getTime() % (loaderTime)) / (loaderTime) * pi) * doublePi - (pi / 3) - (pi / 2);
      this._ctx.beginPath();
      this._ctx.arc(this._halfSize, this._halfSize, this._halfSize / 3, loaderOffset, loaderOffset + pi / 3 * 2);
      this._ctx.strokeStyle = this.iconColor;
      this._ctx.stroke();
    }
    else {
      this._ctx.beginPath();
      var icon = (this._animationProps && this._animationProps.current) || this._icons.play;
      for (var i = 0; i < icon.length; i++) {
        this._ctx.moveTo(icon[i][0][0], icon[i][0][1]);

        for (var j = 1; j < icon[i].length; j++) {
          this._ctx.lineTo(icon[i][j][0], icon[i][j][1]);
        }
      }

      // this._ctx.closePath();
      this._ctx.fill();
      // stroke to fill in for retina
      this._ctx.strokeStyle = this.iconColor;
      this._ctx.lineWidth = 2;
      this._ctx.lineJoin = 'miter';
      this._ctx.stroke();
    }
  },
  _setState: function (state) {
    this.playing = false;
    this.loading = false;
    if (state === 'playing') {
      this.playing = true;
      this._animateIcon('pause', 'play');
    }
    else if (state === 'loading') {
      this.loading = true;
    }
    else if (this.state !== 'loading') {
      this._animateIcon('play', 'pause');
    }
    else {
      this._animateIcon('play', null);
    }
    this.state = state;
    this._canvas.setAttribute('class', this.className + ' is-' + state);
    this.draw();
  },
  // public methods
  draw: function () {
    this._forceDraw = true;
  },
  setSize: function (size) {
    this.size = size;
    this._halfSize = size / 2; // we do this a lot. it's not heavy, but why repeat?
    this._canvas.width = size;
    this._canvas.height = size;
    // set icon paths
    var iconSize = this.size / 2;
    var pauseGap = iconSize / 10;
    var playLeft = Math.cos(pi / 3 * 2) * (iconSize / 2) + this._halfSize;
    var playRight = iconSize / 2 + this._halfSize;
    var playHalf = (playRight - playLeft) / 2 + playLeft;
    var top = this._halfSize - Math.sin(pi / 3 * 2) * (iconSize / 2);
    var bottom = this.size - top;
    var pauseLeft = this._halfSize - iconSize / 3;
    var pauseRight = this.size - pauseLeft;
    this._icons = {
      play: [
        [
          [playLeft, top],
          [playHalf, (this._halfSize - top) / 2 + top],
          [playHalf, (this._halfSize - top) / 2 + this._halfSize],
          [playLeft, bottom]
        ],
        [
          [playHalf, (this._halfSize - top) / 2 + top],
          [playRight, this._halfSize],
          [playRight, this._halfSize],
          [playHalf, (this._halfSize - top) / 2 + this._halfSize]
        ]
      ],
      pause: [
        [
          [pauseLeft, top + pauseGap],
          [this._halfSize - pauseGap, top + pauseGap],
          [this._halfSize - pauseGap, bottom - pauseGap],
          [pauseLeft, bottom - pauseGap]
        ],
        [
          [this._halfSize + pauseGap, top + pauseGap],
          [pauseRight, top + pauseGap],
          [pauseRight, bottom - pauseGap],
          [this._halfSize + pauseGap, bottom - pauseGap]
        ]
      ]
    };

    if (this._animationProps && this._animationProps.current) {
      this._animateIcon(this._animationProps.to);
    }
    if (!this.playing) {
      this.draw();
    }
  },
  setAudio: function (audioUrl) {
    //HERE???
    this.audio = new Audio(audioUrl);
    this._setState('loading');

    this.audio.addEventListener('canplaythrough', (function () {
      this._setState('paused');
    }).bind(this));
    this.audio.addEventListener('play', (function () {
      this._setState('playing');
    }).bind(this));
    this.audio.addEventListener('pause', (function () {
      // reset when finished
      if (this.audio.currentTime === this.audio.duration) {
        this.audio.currentTime = 0;
      }
      this._setState('paused');
    }).bind(this));
  },
  appendTo: function (element) {
    element.appendChild(this._canvas);
  },
  play: function () {
    this.audio.play();
    // console.log('This Audio:');
    // console.log(this.audio.src);
    // console.log('SRC:')
    // console.log(SRC)
  },
  pause: function () {
    this.audio.pause();
  }
};

// now init one as an example
var cap = new CircleAudioPlayer({
  audio: "http://localhost:8000/audio/1listenEng.mp3",
  size: 120,
  borderWidth: 8
});
cap.appendTo(playerContainer);

//Send the right audio URL to the new circle player
$('#playerContainer').on('click', function(e) {
  console.log(cap.audio)
});


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

