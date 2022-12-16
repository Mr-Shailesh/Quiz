import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../../assets/css/timer.module.css";

const Timer = () => {
  const [time, setTime] = useState(600);
  const navigate = useNavigate();

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          alert("Time up!! ");
          navigate("/end");
          clearInterval(timer);
          localStorage.clear();
          return 0;
        } else return time - 1;
      });
    }, 1000);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <p
        className={`${
          time === 0 ? Styles.ended : time <= 60 && Styles.countdown
        }`}
      >
        Time left: {`${Math.floor(time / 60)}`.padStart(2, 0)}:
        {`${time % 60}`.padStart(2, 0)}
      </p>
    </div>
  );
};

export default Timer;
