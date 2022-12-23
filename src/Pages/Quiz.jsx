import React, { useEffect, useState } from "react";
import Styles from "../assets/css/quiz.module.css";
import Timer from "../components/Timer/Timer";
import NextBtn from "../components/Button/Next";
import AlertBox from "../components/AlertBox";
import QuiestionTimer from "../components/Timer/QuestionTimer";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { Form } from "react-bootstrap";
import { SyncLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Quiz = ({ loading, setLoading, marks, setMarks }) => {
  const [data, setData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentData, setCurrentData] = useState();
  const [questionNo, setQuestionNo] = useState(null);
  const [selectData, setSelectdata] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  // eslint-disable-next-line
  const [answers, setAnswers] = useState([]);

  const navigate = useNavigate();

  var userName = localStorage.getItem("User");

  const q = query(collection(db, "Current"));

  const getData = async () => {
    setLoading(true);
    const newData = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      newData.push(doc.data());
    });
    setData(newData);
    setQuestionNo(questionNo + 1);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setCurrentData(data[currentQuestionIndex]);
    // eslint-disable-next-line
  }, [data.length, currentQuestionIndex]);

  const clickHandler = async () => {
    setAnswers((prev) => [...prev, selectData]);
    getData();
    setData([]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectdata([]);
    if (selectData.ans === currentData.Answer) {
      setMarks(marks + 1);
    }
    if (questionNo === data.length) {
      navigate("/end");
      setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
  };

  const optionChange = (id, e) => {
    setSelectdata({ ans: e.target.value, id });
  };

  const forceEnd = () => {
    setShowAlert(false);
    navigate("/end");
    setTimeout(function () {
      localStorage.clear();
    }, 500);
  };

  document.body.addEventListener("mouseleave", (e) => {
    setShowAlert(true);
  });

  window.onbeforeunload = function (e) {
    localStorage.clear();
  };

  window.onpopstate = function (e) {
    navigate("/end");
    setTimeout(function () {
      localStorage.clear();
    }, 500);
  };

  console.log("showAlert", showAlert);

  return (
    <div>
      {showAlert && (
        <AlertBox forceEnd={forceEnd} setShowAlert={setShowAlert} />
      )}
      <div className={Styles.heading}>
        <h3> Welcome {userName}</h3>
        <h2>Quiz</h2>
        <div className={Styles.timer}>
          <Timer />
        </div>
      </div>
      <div className={Styles.quiz_container}>
        {currentData && currentData.id ? (
          <div>
            <div className={Styles.head}>
              <h4>
                Question {questionNo} of {data.length}
              </h4>
            </div>
            <div className={Styles.timer}>
              <QuiestionTimer clickHandler={clickHandler} />
            </div>
            <div className={Styles.display_data}>
              <h3>
                {questionNo && `${questionNo} : `}
                {currentData.Question}
              </h3>
              <br />
              <Form className={Styles.option}>
                {currentData.Option &&
                  currentData.Option.map((option, i) => {
                    return (
                      <div key={i} className="mb-3">
                        <Form.Group controlId="kindOfStand">
                          <Form.Check
                            inline
                            label={option}
                            value={option}
                            name="group1"
                            type="radio"
                            onChange={(e) => optionChange(currentData.id, e)}
                          />
                        </Form.Group>
                      </div>
                    );
                  })}
              </Form>

              <NextBtn
                name={questionNo === data.length ? "Finish" : "Next"}
                loading={loading}
                clickHandler={clickHandler}
                disabled={!selectData.ans ? true : false}
              />
            </div>
          </div>
        ) : (
          <div className={Styles.loader}>
            <SyncLoader color="#3689d6" margin={9} size={15} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
