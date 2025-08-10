import "../App.css";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Question from "./Question";
import { useState } from "react";
import Exit from "./Exit";
const Questions = ({ setstate }) => {
  const [finalState,setfinalState] = useState(false)
  const [score, setscore] = useState(0);

  return (
    <div className="container">
      {!finalState ? <Question setstate={setstate} setfinalState={setfinalState} setscore={setscore} score={score}></Question> : <Exit score={score} setstate={setstate}></Exit>}
      
    </div>
  );
};
export default Questions;
