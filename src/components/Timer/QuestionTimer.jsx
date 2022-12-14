import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../../assets/css/timer.module.css";

const QuiestionTimer = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
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
          time === 0 ? Styles.end : time <= 15 && Styles.countdown
        }`}
      >
        Time left: {`${Math.floor(time / 60)}`.padStart(2, 0)}:
        {`${time % 60}`.padStart(2, 0)}
      </p>
    </div>
  );
};

export default QuiestionTimer;
