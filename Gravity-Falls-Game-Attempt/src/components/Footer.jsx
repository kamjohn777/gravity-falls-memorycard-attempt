
import '../components/Footer.css';
import volume from '../assets/img/volume.svg';
import volumeOff from '../assets/img/volume_off.svg';
import questionMarkIcon from '../assets/img/question_mark.svg';
import background_music from '../assets/sounds/background_music.mp3';
import clickSound from '../assets/sounds/click.wav';
import musicOn from '../assets/img/music_sign.svg';
import musicOff from '../assets/img/music_off.svg';
import TutorialElms from './TutorialElms';
import cross from '../assets/img/cross.svg';
import { motion, AnimatePresence} from 'framer-motion';
// import soundOff from '../assets/img/volume_off.svg';

import { useState, useEffect } from 'react';
import { useClickSound } from './Context/ClickSoundContext';

function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(background_music));
  const { isClickSoundEnabled, toggleClickSound } = useClickSound();
//   const [isClicked, setIsClicked] = useState(false);
  const [clickAudio] = useState(new Audio(clickSound));
const [showTutorial, setShowTutorial] = useState(false);

//   useEffect(() => {
//     const handleUserInteraction = () => {
//         !isPlaying 
//             ? (() => { setIsPlaying(true); window.removeEventListener('click', handleUserInteraction); })() 
//             : setIsPlaying(false);
//       };
    
//       window.addEventListener('click', handleUserInteraction);
    
//       return () => {
//         window.removeEventListener('click', handleUserInteraction);
//       };
//   }, [isPlaying]);

  useEffect(() => {
     isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  useEffect(() => {
    isClickSoundEnabled ? clickAudio.play() : clickAudio.pause();
  }, [isClickSoundEnabled, clickAudio]);
//   useEffect(() => {
//     isClicked ? clickAudio.play() : clickAudio.pause();
//   }, [isClicked, clickAudio]);

     const toggleSound = () => {
        setIsPlaying(!isPlaying);
     }

     const toggleTutorial = () => {
        setShowTutorial(!showTutorial);
     }
    //  const tutorialToggleDisplay = () => {
    //     document.querySelector('.tutorial-elms').classList.toggle('tutorial-elms-display');
    //  }

    //  const playClickSound = () => {
    //     setIsClicked(!isClicked);
    //  }
     
    return (
        <footer>
            <div className='sound-btns'>
                {/* <button className='sound-btn' id='sound-on' onClick={playClickSound}>
                    <img src={isClicked ? volume : volumeOff} alt="Click Volume"/>
                    </button> */}
                     <button className='sound-btn' id='sound-off' onClick={toggleSound}>
                    <img src={isPlaying ? musicOn : musicOff} alt="Music Control" />
                    </button>
                    <button className='sound-btn' id='sound-on' onClick={toggleClickSound}>
                    <img src={isClickSoundEnabled ? volume : volumeOff} alt="Click Volume"/>
                    </button>
            </div>

            <div className='tutorial-btn-wrap'>
                <button className='tutorial-btn' onClick={toggleTutorial}>
                    <img src={showTutorial ? cross : questionMarkIcon} alt="Tutorial" />
                </button>
            </div>

            {/* {showTutorial && <TutorialElms />} */}

            <AnimatePresence>
        {showTutorial && (
          <motion.div
            className="tutorial-elms"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0, ease: 'easeInOut' }}
          >
            <TutorialElms />
          </motion.div>
        )}
      </AnimatePresence>
        </footer>
    );
}

export default Footer;