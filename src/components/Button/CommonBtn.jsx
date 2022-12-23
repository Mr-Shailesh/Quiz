import React from "react";
import Styles from "../../assets/css/button.module.css";

const CommonBtn = ({ name, currentData, ...rest }) => {
  const disabled = { ...rest };
  return (
    <div>
      <button
        style={{
          cursor: `${!disabled.disabled ? "pointer" : "not-allowed"}`,
        }}
        {...rest}
        onClick={currentData}
        className={Styles.button_start}
      >
        {name}
      </button>
    </div>
  );
};

export default CommonBtn;
