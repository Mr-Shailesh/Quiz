import { Routes, Route } from "react-router-dom";
import Register from "../../Pages/Register";
import Guideline from "../../Pages/Guideline";
import Quiz from "../../Pages/Quiz";

const PublicLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/guideline" element={<Guideline />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
};

export default PublicLayout;
