import React from "react";
import Styles from "../../assets/css/button.module.css";

const CommonBtn = ({ name, currentData }) => {
  return (
    <div>
      <button onClick={currentData} className={Styles.button_start}>
        {name}
      </button>
    </div>
  );
};

export default CommonBtn;
