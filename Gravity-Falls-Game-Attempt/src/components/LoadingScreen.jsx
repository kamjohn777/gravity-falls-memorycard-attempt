import { useEffect, useState } from "react";
import loadingGif from "../assets/img/dipper_running.gif";
import "./LoadingScreen.css";

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    isLoading && (
      <div className="loading-screen">
        <img src={loadingGif} alt="Loading..." />
        <p>
          Loading
          <span className="span-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </div>
    )
  );
}

export default LoadingScreen;
