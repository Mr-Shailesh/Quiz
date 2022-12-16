import React, { useEffect, useState } from "react";
import Styles from "../assets/css/quiz.module.css";
import Timer from "../components/Timer/Timer";
import QuiestionTimer from "../components/Timer/QuestionTimer";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

import { Form } from "react-bootstrap";
import NextBtn from "../components/Button/Next";
import { SyncLoader } from "react-spinners";
import FinishBtn from "../components/Button/FinishBtn";
import { useNavigate } from "react-router-dom";

const Quiz = ({ loading, setLoading, marks, setMarks }) => {
  const [time, setTime] = useState(60);
  const [data, setData] = useState([]);
  const [questionNo, setQuestionNo] = useState(null);
  const [selectData, setSelectdata] = useState([]);
  const [answers, setAnswers] = useState([]);

  const navigate = useNavigate();

  var userName = localStorage.getItem("User");

  const q = query(collection(db, "Questions"));

  const getData = async () => {
    setLoading(true);
    const newData = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      newData.push(doc.data());
    });
    setData(newData[(Math.random() * newData.length) | 0]);
    setQuestionNo(questionNo + 1);
    setLoading(false);
    setTime(60);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const clickHandler = () => {
    setAnswers((prev) => [...prev, selectData]);
    getData();
    setData([]);
    setSelectdata([]);
    if (selectData.ans === data.Answer) {
      setMarks(marks + 1);
    }
  };

  useEffect(() => {
    if (time === 0) {
      clickHandler();
    }
  }, [time]);

  const finishTask = () => {
    navigate("/greet");
    localStorage.clear();
  };

  const optionChange = (id, e) => {
    setSelectdata({ ans: e.target.value, id });
  };

  return (
    <div>
      <div className={Styles.heading}>
        <h3> Welcome {userName}</h3>

        <h2>Quiz</h2>
        <div className={Styles.timer}>
          <Timer />
        </div>
      </div>
      <div className={Styles.quiz_container}>
        {data.id && data.id ? (
          <div>
            <div className={Styles.head}>
              <h2>{questionNo} / 10</h2>
            </div>
            <div className={Styles.timer}>
              <QuiestionTimer time={time} setTime={setTime} />
            </div>
            <div className={Styles.data}>
              <h3>
                {questionNo && `${questionNo} : `}
                {data.Question}
              </h3>
              <br />
              <Form className={Styles.option}>
                {data.Option &&
                  data.Option.map((option, i) => {
                    return (
                      <div key={i} className="mb-3">
                        <Form.Group controlId="kindOfStand">
                          <Form.Check
                            inline
                            label={option}
                            value={option}
                            name="group1"
                            type="radio"
                            onChange={(e) => optionChange(data.id, e)}
                            // checked={option === answer.ans}
                          />
                        </Form.Group>
                      </div>
                    );
                  })}
              </Form>

              {questionNo === 10 ? (
                <FinishBtn
                  name="Finish"
                  finishTask={finishTask}
                  loading={loading}
                />
              ) : (
                <NextBtn
                  name="Next"
                  loading={loading}
                  clickHandler={clickHandler}
                  disabled={!selectData.ans ? true : false}
                />
              )}
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
