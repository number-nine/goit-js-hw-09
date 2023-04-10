import throttle from 'lodash.throttle';
import vimeo from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';

const vimeoPlayerEl = document.querySelector('#vimeo-player');
const player = new vimeo(vimeoPlayerEl);

player.setCurrentTime(restorePlayerTime());

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(STORAGE_KEY, data.seconds);
  }, 1000)
);

function restorePlayerTime() {
  const restoredFormData = localStorage.getItem(STORAGE_KEY);
  return restoredFormData ? restoredFormData : 0;
}
