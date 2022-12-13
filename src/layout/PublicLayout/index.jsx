import { Routes, Route } from "react-router-dom";
import Register from "../../Pages/Register";
import Guideline from "../../Pages/Guideline";
import Quiz from "../../Pages/Quiz";

import Header from "./Header";
import Greeting from "../../Pages/Greeting";

const PublicLayout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/guideline" element={<Guideline />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/greet" element={<Greeting />} />
      </Routes>
    </div>
  );
};

export default PublicLayout;
