import React from "react";
import Styles from "../assets/css/quiz.module.css";
import Timer from "../components/Timer";

const Quiz = () => {
  return (
    <div>
      <div className={Styles.quizHeader}>
        <div></div>
        <h2>Quiz</h2>
        <div className={Styles.timer}>
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
