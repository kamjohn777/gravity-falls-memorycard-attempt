import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import video from "./assets/img/camp.mp4";
import LoadingScreen from "./components/LoadingScreen";
import HomeScreen from "./components/HomeScreen";
import GamePage from "./GamePage";
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

  const location = useLocation();

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
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/game/:difficulty" element={<GamePage />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </ClickSoundProvider>
        </>
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;