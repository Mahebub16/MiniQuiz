import Questions from "./Questions";
import { useState } from "react";
const Home = ({ Ref }) => {
  const [state, setstate] = useState(false);
  return (
    <>
      {!state ? (
        <div className="main-container">
          <h1>
            🎉 'Welcome to the Grand Quiz Challenge,{" "}
            <span style={{ color: "red" }}>{Ref.toUpperCase()}</span>🎉'
          </h1>
          <div className="details">
            Get ready to put your knowledge to the ultimate test! This exciting
            quiz, inspired by the famous Kaun Banega Crorepati, is conducted at
            the district level and hosted entirely online — so everyone has a
            chance to shine. From brain-tickling questions to thrilling moments
            of choice, this is your chance to showcase your wit, speed, and
            knowledge. Whether you're here for fun, competition, or the glory of
            victory, one thing is certain — you're in for an unforgettable quiz
            experience! 💡 Stay sharp, think smart, and may the best mind win!
            <p style={{fontWeight:'700'}}>
              ⚡ Rules are simple: 
              <p>Answer carefully - one wrong move can change
              the game! </p>
              <p>Think fast, play smart, and trust your instincts. </p>
              <p>Most
              importantly… Have fun!</p> 
              <p>🎯 Your journey to victory starts NOW… </p>
              <p>Are
              you ready? Let's begin! 🏆</p>
            </p>
          </div>
          <div>
            <button type="submit" onClick={() => setstate(true)}>
              Take Test
            </button>
          </div>
        </div>
      ) : (
        <Questions setstate={setstate}></Questions>
      )}
    </>
  );
};
export default Home;
