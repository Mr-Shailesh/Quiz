import React from "react";
import Styles from "../../assets/css/publicLayout.module.css";

const Header = () => {
  return (
    <div className={Styles.header}>
      <img
        src="https://ciphernutz.com/_next/static/media/cn-black.37a7f9ce.svg"
        alt="logo"
      />
    </div>
  );
};

export default Header;
