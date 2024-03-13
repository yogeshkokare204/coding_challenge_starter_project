// App.js
import React, { useState } from "react";
import "./styles.css";

const questions = [
  "Can you use React to build mobile applications?",
  "can you use React with a server?",
  "can you use React with a database?",
  "can you use React with a cloud?",
  "Is React a JavaScript library for building user interfaces?",
  "Does React use a virtual DOM?",
];

const App = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    const yesCount = answers.filter((answer) => answer === "Yes").length;
    const questionCount = questions.length;
    return (yesCount / questionCount) * 100;
  };

  const handleSubmit = () => {
    const newScore = calculateScore();
    setScore(newScore);
  };

  return React.createElement(
    "div",
    { className: "App" },
    React.createElement("h1", null, "React Quiz"),
    score !== null
      ? React.createElement(
          "div",
          null,
          React.createElement("p", null, "Your score: ", score.toFixed(2), "%")
        )
      : React.createElement(
          "div",
          null,
          questions.map((question, index) =>
            React.createElement(
              "div",
              { key: index },
              React.createElement("p", null, question),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "button",
                  { onClick: () => handleAnswer(index, "Yes") },
                  "Yes"
                ),
                React.createElement(
                  "button",
                  { onClick: () => handleAnswer(index, "No") },
                  "No"
                )
              )
            )
          ),
          React.createElement("button", { onClick: handleSubmit }, "Submit")
        )
  );
};

export default App;
