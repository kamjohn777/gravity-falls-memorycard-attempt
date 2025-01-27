import mabelInfon from '../assets/img/mabel-info.png';
import './TutorialElms.css';

function TutorialElms() {
    return (
        <div className='tutorial-elms-content'>
            {/* <div className='tutorial-elms-content'>
                <h2>How to Play</h2>
                <p>Click on the cards to flip them over and match them with their corresponding pairs.</p>
                <p>Match all the cards to win the game.</p>
                <p>Good luck!</p>
            </div> */}
            <div className="instructions">
                <div>Dont click on the same card twice!</div>
                <div>Click on GRAVITY FALLS logo to go back.</div>
                </div>
            <div className='tutorial-elms-img'>
                <img src={mabelInfon} alt='Mabel Pines' />
            </div>
        </div>
    )
}

export default TutorialElms;