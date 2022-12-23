import React from "react";
import Styles from "../assets/css/endpage.module.css";
import Celebrate from "../components/Celebrate";

const EndPage = ({ marks }) => {
  const getGrade = () => {
    if (marks <= 4) {
      return "Better luck next time 😢";
    } else if (marks === 5) {
      return "You are Poor  😕 ";
    } else if (marks === 6) {
      return "You are Good 🙂 ";
    } else if (marks === 7) {
      return "You are Average  😄";
    } else {
      return "Woohhh, Excellent  🥳";
    }
  };

  return (
    <div className={Styles.container}>
      <Celebrate />
      <p className={Styles.score}>Your score is {marks} out of 10</p>
      <p className={Styles.grade}>{getGrade()}</p>
      <p className={Styles.text}>Thanks for giving exam 😊</p>
      <p className={Styles.contact}>We will contact you soon . . .</p>
    </div>
  );
};

export default EndPage;
