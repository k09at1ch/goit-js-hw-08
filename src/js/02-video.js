import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const video = document.querySelector('iframe');
const player = new Player(video);
player.on('timeupdate', throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));
window.addEventListener('load', function() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
});
