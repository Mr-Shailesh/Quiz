import React from "react";
import Styles from "../../assets/css/button.module.css";


const CommonBtn = ({ name }) => {
  return (
    <div>
      <button className={Styles.button_start}>{name}</button>
    </div>
  );
};

export default CommonBtn;
