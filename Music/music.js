const playPauseBtn = document.getElementById('play-pause');
const audioPlayer = document.getElementById('audio-player');

playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
  }
});
