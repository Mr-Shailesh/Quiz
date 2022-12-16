import React from "react";

const Greeting = ({ marks }) => {
  return (
    <div>
      <h3>Thanks for giving exam</h3>
      <h1>Your score is {marks} out of 10</h1>
    </div>
  );
};

export default Greeting;
