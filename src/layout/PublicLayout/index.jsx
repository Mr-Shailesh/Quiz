import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../../Pages/Register";
import Guideline from "../../Pages/Guideline";
import Quiz from "../../Pages/Quiz";
import NoPage from "../../Pages/NoPage";
import Header from "./Header";
import EndPage from "../../Pages/EndPage";

const PublicLayout = () => {
  const [loading, setLoading] = useState(false);
  const [marks, setMarks] = useState(0);
  const userName = localStorage.getItem("User");

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            !userName ? (
              <Register loading={loading} setLoading={setLoading} />
            ) : (
              <Navigate to="/guideline" />
            )
          }
        />
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
            path="/end"
            element={
              userName ? (
                <EndPage
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
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default PublicLayout;
