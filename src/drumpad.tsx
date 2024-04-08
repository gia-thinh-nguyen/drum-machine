import { AudioClip } from "./types";
import {useState} from 'react';

interface DrumProps{
    audioClip:AudioClip; 
}


const DrumPad = ({audioClip}:DrumProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const playSound =(clip:AudioClip)=>{
        (document.getElementById(clip.keyTrigger)as HTMLAudioElement)?.play().catch(console.error);
        document.getElementById('display')!.innerText=clip.description;
        setIsClicked(true);
        setTimeout(()=>setIsClicked(false),100);
    }

  return (
    <button className={`drum-pad ${isClicked?'clicked':''}`} id={`drum-${audioClip.keyTrigger}`} onClick={()=>playSound(audioClip)}>
        <audio src={audioClip.url} id={audioClip.keyTrigger} className='clip'></audio>
        {audioClip.keyTrigger}
    </button>
  )
}

export default DrumPad