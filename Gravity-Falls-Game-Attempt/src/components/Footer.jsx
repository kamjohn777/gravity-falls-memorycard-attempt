import "../components/Footer.css";
import volume from "../assets/img/volume.svg";
import volumeOff from "../assets/img/volume_off.svg";
import questionMarkIcon from "../assets/img/question_mark.svg";
import background_music from "../assets/sounds/background_music.mp3";
import clickSound from "../assets/sounds/click.wav";
import musicOn from "../assets/img/music_sign.svg";
import musicOff from "../assets/img/music_off.svg";
import TutorialElms from "./TutorialElms";
import cross from "../assets/img/cross.svg";
import { motion, AnimatePresence } from "framer-motion";

import { useState, useEffect } from "react";
import { useClickSound } from "./Context/ClickSoundContext";

function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(background_music));
  const { isClickSoundEnabled, toggleClickSound } = useClickSound();
  const [clickAudio] = useState(new Audio(clickSound));
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  useEffect(() => {
    isClickSoundEnabled ? clickAudio.play() : clickAudio.pause();
  }, [isClickSoundEnabled, clickAudio]);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleTutorial = () => {
    setShowTutorial(!showTutorial);
  };

  return (
    <footer>
      <div className="sound-btns">
        <motion.button
          className="sound-btn"
          id="sound-off"
          onClick={toggleSound}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img src={isPlaying ? musicOn : musicOff} alt="Music Control" />
        </motion.button>
        <motion.button
          className="sound-btn"
          id="sound-on"
          onClick={toggleClickSound}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img
            src={isClickSoundEnabled ? volume : volumeOff}
            alt="Click Volume"
          />
        </motion.button>
      </div>

      <div className="tutorial-btn-wrap">
        <motion.button
          className="tutorial-btn"
          onClick={toggleTutorial}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img src={showTutorial ? cross : questionMarkIcon} alt="Tutorial" />
        </motion.button>
      </div>

      <AnimatePresence>
        {showTutorial && (
          <motion.div
            className="tutorial-elms"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0, ease: "easeInOut" }}
          >
            <TutorialElms />
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;
