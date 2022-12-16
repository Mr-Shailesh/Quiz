import React from "react";
import Styles from "../../assets/css/button.module.css";
import Loading from "../Loader/Loading";

const NextBtn = ({ name, clickHandler, loading, ...rest }) => {
  const disabled = { ...rest };

  return (
    <div>
      <button
        style={{
          cursor: `${!disabled.disabled ? "pointer" : "not-allowed"}`,
          backgroundColor: `${disabled.disabled ? "#cccccc" : ""}`,
          color: `${disabled.disabled ? "#666666" : ""}`,
        }}
        onClick={clickHandler}
        className={!loading ? Styles.button_next : Styles.button_next_loading}
        {...rest}
      >
        {!loading ? `${name}` : <Loading />}
      </button>
    </div>
  );
};

export default NextBtn;
