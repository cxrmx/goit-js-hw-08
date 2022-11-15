import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

console.log(throttle)

const iframe = document.querySelector('iframe')

const player = new Player(iframe)

localStorage.getItem('videoplayer-current-time') !== null
  ? player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')))
  : ''

player.on('timeupdate', throttle(timeUpdateHandler, 1000))

function timeUpdateHandler(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds)
}