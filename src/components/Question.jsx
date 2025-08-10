import "../App.css";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { useRef, useState } from "react";
import Exit from "./Exit";
const Question = ({ setstate,setfinalState,setscore,score }) => {
  const inputRef = useRef(null);
  const [present, setPresent] = useState(0);
  const [selected, setSelected] = useState("");

  let arr = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which programming language is used for styling web pages?",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      answer: "CSS",
    },
    {
      question: "React is mainly used for building?",
      options: ["Databases", "User Interfaces", "Servers", "Operating Systems"],
      answer: "User Interfaces",
    },
    {
      question: "Which company developed React?",
      options: ["Google", "Microsoft", "Facebook", "Apple"],
      answer: "Facebook",
    },
    {
      question: "What is the output of 2 + '2' in JavaScript?",
      options: ["4", "22", "NaN", "Error"],
      answer: "22",
    },
    {
      question: "Which hook is used for state management in React?",
      options: ["useRef", "useEffect", "useState", "useMemo"],
      answer: "useState",
    },
    {
      question: "In HTML, which tag is used to create a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      answer: "<a>",
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: ["var", "let", "const", "static"],
      answer: "const",
    },
    {
      question:
        "Which lifecycle method is invoked after a component is rendered in class components?",
      options: [
        "componentDidMount",
        "componentWillUnmount",
        "shouldComponentUpdate",
        "render",
      ],
      answer: "componentDidMount",
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "#", "/* */", "<!-- -->"],
      answer: "//",
    },
  ];
  const handleOption = () => {
    const selectedInput = inputRef.current.querySelector(
      "input[name='radio']:checked"
    );
    if (selectedInput) {
      const value = selectedInput.value;
      setSelected(value);

      if (value === arr[present].answer) {
        setscore(score + 1);
      }
      setPresent(next => (next<arr.length-1 ? next+1 :next));
    } else {
      alert("Please select an option!");
    }
  };
  const handlePrevious = () => {
    setPresent(prev => (prev > 0 ? prev - 1 : 0));
  }
  return (
    <>
      {present < arr.length && (
        <div className="content">
          <div className="question">
            <p style={{ textAlign: "left" }}>
              {present + 1}) {arr[present].question}
            </p>
            <div className="options" ref={inputRef}>
              {arr[present].options.map((option, idx) => (
                <span key={idx}>
                  <input type="radio" name="radio" value={option} /> {option}
                </span>
              ))}
            </div>
          </div>
          <div className="buttons">
            <button
              type="button"
              onClick={handlePrevious}
              className="btn"
            >
              <GrLinkPrevious />
              prev
            </button>
            <button type="button" className="btn" onClick={handleOption}>
              <GrLinkNext />
              next
            </button>
            <button type="submit" onClick={() => setstate(false)}>
              back
            </button>
            {present=== arr.length-1 && <button type="submit" onClick={()=>setfinalState(true)}>submit</button>}
            
          </div>
        </div>
      )}
    </>
  );
};
export default Question;
