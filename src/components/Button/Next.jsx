import React from "react";
import Styles from "../../assets/css/button.module.css";
import Loading from "../Loader/Loading";

const NextBtn = ({ name, clickHandler, loading, ...rest }) => {
  return (
    <div>
      <button
        onClick={clickHandler}
        className={!loading ? Styles.button_next : Styles.button_next_loading}
        {...rest}
      >
        {!loading ? `${name}` : <Loading />}
      </button>

      {/* <button className={Styles.button_select}>Select option</button> */}
    </div>
  );
};

export default NextBtn;
