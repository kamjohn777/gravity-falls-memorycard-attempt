import "./App.css";
import video from "./assets/img/camp.mp4";
import LoadingScreen from "./components/LoadingScreen";
import HomeScreen from "./components/HomeScreen";
import { useState, useEffect } from "react";
import { ClickSoundProvider } from "./components/Context/ClickSoundContext";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-div">
          <LoadingScreen />
          <video autoPlay muted loop id="background-video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <>
          <video autoPlay muted loop id="background-video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <ClickSoundProvider>
            <HomeScreen />
            <Footer />
          </ClickSoundProvider>
        </>
      )}
    </div>
  );
}

export default App;
