import React from "react";
import { Link } from "react-router-dom";
import Styles from "../assets/css/guideline.module.css";
import guideline from "../assets/images/guideline.jpeg";
import CommonBtn from "../components/Button/CommonBtn";

const Guideline = () => {
  var userName = localStorage.getItem("User");
  return (
    <div>
      <div className={Styles.heading}>
        <h3> Welcome {userName}</h3>
        <h2>Guideline</h2>
        <div></div>
      </div>
      <div className={Styles.guideline}>
        <div className={Styles.left}>
          <h1>Rules</h1>
          <div className={Styles.rules}>
            <h4> 1. This Quiz contain total 10 questions.</h4>

            <h4>
              2. You will get total 10 minutes to complete this quiz 1 minute
              for each question.
            </h4>

            <h4>3. If you submit the answer you cannot re-check the answer.</h4>

            <h4>4. Think twice before you submit the answer </h4>

            <h4>
              5. If you fail to submit the answer within 1 minute then will
              redirect to another question automatically
            </h4>
            
          </div>
          <div>
          <h2>Best Of Luck 🙂</h2>
          </div>
        </div>
        <div className={Styles.right}>
          <img src={guideline} alt="guideline" />
        </div>
      </div>
      <div>
        <Link to="/quiz">
          <CommonBtn name="Start Quiz" />
        </Link>
      </div>
    </div>
  );
};

export default Guideline;
