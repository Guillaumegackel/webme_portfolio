import oneUp from '../../assets/Sound/oneUp.mp3';

const soundKonami=()=>{
  const audio = new Audio(oneUp);
    // audio.loop = false;
  return(
    

    audio.play()
  )
}

export default soundKonami;
