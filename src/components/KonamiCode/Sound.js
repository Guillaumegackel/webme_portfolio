import oneUp from '../../assets/Sound/oneUp.mp3';

function sound() {
  const audio = new Audio(oneUp);
  // audio.loop = false;
  audio.play()
}

export default sound;
