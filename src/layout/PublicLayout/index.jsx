import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../../Pages/Register";
import Guideline from "../../Pages/Guideline";
import Quiz from "../../Pages/Quiz";
import NoPage from "../../Pages/NoPage";

import Header from "./Header";
import Greeting from "../../Pages/Greeting";
import { useState } from "react";

const PublicLayout = () => {
  const [loading, setLoading] = useState(false);
  const [marks, setMarks] = useState(0);

  const userName = localStorage.getItem("User");
  console.log("userName@@@@@", userName);

  return (
    <div>
      <Header />
      <Routes>
        {/* {!userName ? ( */}
        <Route
          path="/"
          element={<Register loading={loading} setLoading={setLoading} />}
        />
        {/* ) : ( */}
        <>
          <Route
            path="/guideline"
            element={
              userName ? (
                <Guideline loading={loading} setLoading={setLoading} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/quiz"
            element={
              userName ? (
                <Quiz
                  loading={loading}
                  marks={marks}
                  setMarks={setMarks}
                  setLoading={setLoading}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/greet"
            element={
              userName ? (
                <Greeting
                  loading={loading}
                  marks={marks}
                  setLoading={setLoading}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </>
        {/* )} */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default PublicLayout;
