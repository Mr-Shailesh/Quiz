import React from "react";
import Styles from "../../assets/css/button.module.css";
import Loading from "../Loader/Loading";

const Register = ({ name, loading }) => {
  return (
    <button className={!loading ? Styles.button : Styles.button_loading}>
      {!loading ? `${name}` : <Loading />}
    </button>
  );
};

export default Register;
