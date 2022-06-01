import oneUp from '../../assets/Sound/oneUp.mp3';

const SoundKonami=()=>{
  const audio = new Audio(oneUp);
    // audio.loop = false;
  return(
    audio.play()
  )
}

export default SoundKonami;
