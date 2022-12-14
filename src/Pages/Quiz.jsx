import React, { useEffect, useState } from "react";
import Styles from "../assets/css/quiz.module.css";
import Timer from "../components/Timer/Timer";
import QuiestionTimer from "../components/Timer/QuestionTimer";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

const Quiz = () => {
  const [data, setData] = useState([]);
  const [random, setRandom] = useState([]);

  const q = query(collection(db, "Questions"));

  const getData = async () => {
    const newData = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      newData.push(doc.data());
    });
    setData(newData);
  };

  useEffect(() => {
    getData();
  }, []);

  var randomItem = data[(Math.random() * data.length) | 0];
  setTimeout(() => {
    var randomItem = data[Math.floor(Math.random() * data.length)];
  }, 1000);

  const clickHandler = () => {
    console.log("randomItem");
    setRandom(randomItem);
  };

  console.log("random", random);

  return (
    <div>
      <div className={Styles.heading}>
        <div></div>
        <h2>Quiz</h2>
        <div className={Styles.timer}>
          <QuiestionTimer />
          <Timer />
        </div>
      </div>
      <div className={Styles.body}>
        {data.map((d) => {
          console.log("d", d.Question);
          return (
            <div key={d.Question}>
              <p>{d.Question}</p>
            </div>
          );
        })}

        <button onClick={clickHandler}>change question</button>
        <div>
          {random.Question}</div>
      </div>
    </div>
  );
};

export default Quiz;
