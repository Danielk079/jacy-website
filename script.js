(function () {
  'use strict';

  // ---- Background song (YouTube), same track as the Prissy site, played on tap ----
  var YT_VIDEO_ID = 'WNlXR6llLew';
  var ytPlayer = null;
  var ytPlayerReady = false;
  var wantsToPlay = false;

  var ytScriptTag = document.createElement('script');
  ytScriptTag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(ytScriptTag, firstScriptTag);

  window.onYouTubeIframeAPIReady = function () {
    ytPlayer = new YT.Player('ytPlayer', {
      height: '90',
      width: '160',
      videoId: YT_VIDEO_ID,
      playerVars: {
        autoplay: 0,
        loop: 1,
        playlist: YT_VIDEO_ID,
        rel: 0,
        modestbranding: 1
      },
      events: {
        onReady: function () {
          ytPlayerReady = true;
          // On a slow connection (common on mobile), the tap can happen
          // before the player finishes loading. If that happened, honor
          // it now instead of leaving the song silently un-started.
          if (wantsToPlay) {
            ytPlayer.playVideo();
          }
        },
        onError: function (e) {
          console.warn('Background song failed to load (YouTube error code ' + e.data + ')');
        }
      }
    });
  };

  // ---- Tap-to-open gate: reveals the site, triggers the path-draw moment, starts the song ----
  var gate = document.getElementById('gate');
  gate.addEventListener('click', function () {
    gate.classList.add('opened');
    document.body.classList.add('site-opened');
    document.getElementById('musicPlayer').removeAttribute('aria-hidden');
    wantsToPlay = true;
    if (ytPlayerReady && ytPlayer && typeof ytPlayer.playVideo === 'function') {
      ytPlayer.playVideo();
    }
  }, { once: true });

  // Show the placeholder if the real photo hasn't been added yet
  var heroPhotoFrame = document.getElementById('heroPhotoFrame');
  var heroPhotoImg = document.getElementById('heroPhotoImg');
  heroPhotoImg.addEventListener('error', function () {
    heroPhotoFrame.classList.add('no-photo');
  });

  // Flip cards
  var cards = document.querySelectorAll('.flip-card');
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      card.classList.toggle('flipped');
    });
  });

  // Rotating reminder messages
  var messages = [
    "Still glad you came home that Saturday.",
    "You're proof that some friendships are worth fighting your way back to.",
    "Best cousin. Better friend. No contest.",
    "Every Sunday afternoon I don't see you feels like a Sunday wasted.",
    "Partners for life, apparently. Ceremony included.",
    "This whole website exists because 'I miss you' felt too small."
  ];
  var lastIndex = -1;
  var reminderBtn = document.getElementById('reminderBtn');
  var reminderMessage = document.getElementById('reminderMessage');

  reminderBtn.addEventListener('click', function () {
    var index;
    do {
      index = Math.floor(Math.random() * messages.length);
    } while (index === lastIndex && messages.length > 1);
    lastIndex = index;

    reminderMessage.classList.remove('show');
    reminderMessage.textContent = messages[index];
    void reminderMessage.offsetWidth;
    reminderMessage.classList.add('show');
    reminderBtn.textContent = 'Tap for another';
  });
})();