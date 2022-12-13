import React from "react";
import { Link } from "react-router-dom";
import Styles from "../../assets/css/publicLayout.module.css";

const Header = () => {
  return (
    <div className={Styles.header}>
      <Link to="/">
        <img
          src="https://ciphernutz.com/_next/static/media/cn-black.37a7f9ce.svg"
          alt="logo"
        />
      </Link>
      <button>Login</button>
    </div>
  );
};

export default Header;
