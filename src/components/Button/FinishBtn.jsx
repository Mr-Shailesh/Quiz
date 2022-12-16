import React from "react";
import Styles from "../../assets/css/button.module.css";

const FinishBtn = ({ finishTask, name }) => {
  return (
    <div>
      <button className={Styles.button_next} onClick={finishTask}>
        {name}
      </button>
    </div>
  );
};

export default FinishBtn;
