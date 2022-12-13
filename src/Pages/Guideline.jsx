import React from "react";
import Styles from "../assets/css/guideline.module.css";
import guideline from "../assets/images/guideline.jpeg";
import Start from "../components/Button/Start";

const Guideline = () => {
  return (
    <div>
      <h2>Guideline</h2>
      <div className={Styles.guideline}>
        <div className={Styles.left}>
          <h1>Rules</h1>
          <div className={Styles.rules}>
            <ol>
              <li>
                <h4>Rule One</h4>
              </li>
              <li>
                <h4>Rule One</h4>
              </li>
              <li>
                <h4>Rule Three</h4>
              </li>
              <li>
                <h4>Rule Four</h4>
              </li>
              <li>
                <h4>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit consequatur in, minus doloribus necessitatibus
                  quaerat ipsam non saepe illum modi. Quia odit fugiat
                  temporibus, tempora voluptas eaque nesciunt autem itaque!
                </h4>
              </li>
            </ol>
          </div>
        </div>
        <div className={Styles.right}>
          <img src={guideline} alt="guideline" />
        </div>
      </div>
      <div>
        <Start />
      </div>
    </div>
  );
};

export default Guideline;
