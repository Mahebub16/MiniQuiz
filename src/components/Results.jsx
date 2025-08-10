import '../App.css';
import { useEffect, useState } from 'react';

const Result = ({ score, setstate }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after render
    setAnimate(true);
  }, []);

  return (
    <div className={`res-container ${animate ? 'fade-in' : ''}`}>
      <div className="trophy">🏆</div>
      <h2 className="congrats">🎉 Congratulations! 🎉</h2>
      <p className="result-text">
        You scored <span className="score">{score}</span> points in our quiz!
      </p>
      <button className="back-btn" onClick={() => setstate(false)}>
        🔙 
      </button>
    </div>
  );
};

export default Result;
