import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "../useWindowHook";

const Celebrate = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti width={width} height={height} />
    </>
  );
};

export default Celebrate;
