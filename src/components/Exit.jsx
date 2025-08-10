import { useEffect, useState } from "react";
import "../App.css";
import Result from "./Results";
import { FaCheckCircle, FaHourglassHalf } from "react-icons/fa";

const Exit = ({ setstate, score }) => {
  const [count, setCount] = useState(10);
  const [resState, setresState] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const time = setTimeout(() => {
        setresState(true);
      }, 1500); // Slight delay before showing results
      return () => clearTimeout(time);
    }
  }, [count]);

  return (
    <>
      {!resState ? (
        <div className="final-container fancy-exit">
          <div className="icon-container">
            <FaCheckCircle className="success-icon" />
          </div>
          <h2 className="countdown-title">
            Results will be revealed in{" "}
            <span className="count animated-count">{count}</span> seconds
          </h2>
          <p className="completion-message">
            ✅ You've answered all the questions!{" "}
            <strong>Well done!</strong> 🏆
          </p>
          <p className="note">
            <FaHourglassHalf /> Please wait while we prepare your final results.
          </p>
          <button
            type="reset"
            className="back-btn"
            onClick={() => setstate(false)}
          >
            Go Back
          </button>
        </div>
      ) : (
        <Result setstate={setstate} score={score} />
      )}
    </>
  );
};

export default Exit;
