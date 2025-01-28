import mabelInfon from "../assets/img/mabel-info.png";
import "./TutorialElms.css";

function TutorialElms() {
  return (
    <div className="tutorial-elms-content">
      <div className="instructions">
        <div>Dont click on the same card twice!</div>
        <div>Click on GRAVITY FALLS logo to go back.</div>
      </div>
      <div className="tutorial-elms-img">
        <img src={mabelInfon} alt="Mabel Pines" />
      </div>
    </div>
  );
}

export default TutorialElms;
