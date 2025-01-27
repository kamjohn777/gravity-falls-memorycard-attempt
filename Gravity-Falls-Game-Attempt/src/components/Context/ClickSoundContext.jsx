import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import clickSound from '../../assets/sounds/click.wav';

const ClickSoundContext = createContext();

export const ClickSoundProvider = ({ children }) => {
  const [isClickSoundEnabled, setIsClickSoundEnabled] = useState(false);
  const [clickAudio] = useState(new Audio(clickSound));

  const toggleClickSound = () => {
    setIsClickSoundEnabled(!isClickSoundEnabled);
  };

  const playClickSound = () => {
    if (isClickSoundEnabled) {
      clickAudio.play().catch(error => {
        console.error("Click sound play failed:", error);
      });
    }
  };

  return (
    <ClickSoundContext.Provider value={{ isClickSoundEnabled, toggleClickSound, playClickSound }}>
      {children}
    </ClickSoundContext.Provider>
  );
};

ClickSoundProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export const useClickSound = () => useContext(ClickSoundContext);
export default ClickSoundContext;

// import {useStae, useContext, createContext } from 'react';
// import volume from '../assets/img/volume.svg';
// import volumeOff from '../assets/img/volume_off.svg';
// import ReactDOM from 'react-dom/client';

// const ClickSoundContext = createContext();

// export const ClickSoundProvider = () => {
//     const [isClicked, setIsClicked] = useState(false);
//     const [clickAudio] = useState(new Audio(clickSound));

//     useEffect(() => {
//         isClicked ? clickAudio.play() : clickAudio.pause();
//       }, [isClicked, clickAudio]);
// }

// export default ClickSoundProvider;

// it wasnt working becuase we didnt install and import prop-types so npm i prop-types and import it in the file