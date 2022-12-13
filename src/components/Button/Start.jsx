import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <Link to="/quiz">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default Start;
