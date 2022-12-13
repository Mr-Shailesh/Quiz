import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../../assets/css/timer.module.css";

const Timer = () => {
  const [time, setTime] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          alert("Time up!! ");
          navigate("/greet");
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, []);
  return (
    <div>
      <p
        className={`${time === 0 ? Styles.end : time <= 3 && Styles.countdown}`}
      >
        Time left: {`${Math.floor(time / 60)}`.padStart(2, 0)}:
        {`${time % 60}`.padStart(2, 0)}
      </p>
    </div>
  );
};

export default Timer;
