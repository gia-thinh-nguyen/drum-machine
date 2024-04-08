
import './App.css'
import { useEffect } from 'react'
import { AudioClip } from './types'
import DrumPad from './drumpad'


const audioClips:AudioClip[]=[
  {
    keyTrigger:"Q",
    url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    description:'Heater 1'
  },
  {
    keyTrigger:"W",
    url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    description:'Heater 2'
  },
  {
    keyTrigger:"E",
    url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    description:'Heater 3'
  },
  {
    keyTrigger:"A",
    url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    description:'Heater 4'
  },
  {
    keyTrigger:"S",
    url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    description:'Clap'
  },
  {
    keyTrigger:"D",
    url:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    description:'Open-HH'
  },
  {
    keyTrigger:"Z",
    url:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    description:'Kick-n\'-Hat'
  },
  {
    keyTrigger:"X",
    url:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    description:'Kick'
  },
  {
    keyTrigger:"C",
    url:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    description:'Closed-HH'
  }
]

function App() {
 


      const playAudio =(e:KeyboardEvent)=>{
        const clip= audioClips.find(clip=>clip.keyTrigger===e.key.toUpperCase())

        if (!clip) return;
        (document.getElementById(clip.keyTrigger) as HTMLAudioElement)?.play().catch(console.error);
        document.getElementById('display')!.innerText=clip.description;
        document.getElementById(`drum-${clip.keyTrigger}`)!.className='drum-pad clicked';
        document.getElementById(`drum-${clip.keyTrigger}`)?.focus();
        setTimeout(()=>document.getElementById(`drum-${clip.keyTrigger}`)!.className='drum-pad',100);
      
        
    };
    useEffect(()=>{document.addEventListener('keydown',playAudio)});


  return (
    <>
      <div id="drum-machine">
      <div id="display"></div>
        <div id="box">
        <div id="all-drum">
          {audioClips.map(clip=>(
            <DrumPad audioClip={clip}  />
          ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default App
