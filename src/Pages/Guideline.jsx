import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../assets/css/guideline.module.css";
import guideline from "../assets/images/guideline.jpeg";
import CommonBtn from "../components/Button/CommonBtn";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Guideline = () => {
  var userName = localStorage.getItem("User");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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
    // eslint-disable-next-line
  }, []);

  let n = 10;
  const shuffled = data.sort(() => 0.5 - Math.random());
  let current = shuffled.slice(0, n);

  const currentData = async () => {
    // eslint-disable-next-line
    {
      const newCurrentData = [];
      if (current) {
        current.map(async (currentD, i) => {
          newCurrentData.push(currentD.id);
          const id = i + 1;
          return await setDoc(doc(db, "Current", id.toString()), currentD);
        });
      }

      localStorage.setItem("currentData", JSON.stringify(newCurrentData));
    }
    navigate("/quiz");
  };

  return (
    <div>
      <div className={Styles.heading}>
        <h3> Welcome {userName}</h3>
        <h2>Guideline</h2>
        <div></div>
      </div>
      <div className={Styles.guideline}>
        <div className={Styles.left}>
          <h1>Rules</h1>
          <div className={Styles.rules}>
            <h4> 1. This Quiz contain total 10 questions.</h4>

            <h4>
              2. You will get total 10 minutes to complete this quiz 1 minute
              for each question.
            </h4>

            <h4>3. If you submit the answer you cannot re-check it.</h4>

            <h4>4. Think twice before you submit the answer. </h4>

            <h4>
              5. If you fail to submit the answer within 1 minute then will
              redirect to another question automatically.
            </h4>
            <h4>
              6. <span>Don't try to refesh the page.</span>
            </h4>
          </div>
          <div>
            <h2>Best Of Luck 🙂</h2>
          </div>
        </div>
        <div className={Styles.right}>
          <img src={guideline} alt="guideline" />
        </div>
      </div>
      <div>
        <CommonBtn name="Start Quiz" currentData={currentData} />
      </div>
    </div>
  );
};

export default Guideline;
