import React from "react";
import { Link } from "react-router-dom";

import Styles from "../assets/css/nopage.module.css";

const NoPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.head}>
        <hr></hr>
        <h1 className={Styles.error}>
          404<span className={Styles.inerror}>error</span>
        </h1>

        <hr></hr>
      </div>
      <div className={Styles.text}>
        <h3>Opss, Page Not Found !</h3>

        <p>we are sorry but the page you are looking for doest not exist.</p>
        <p>you could return to home page </p>
        <Link to="/">
          <button className={Styles.button}>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
