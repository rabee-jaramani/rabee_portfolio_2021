import gsap from "gsap/all";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Question from "./Question";
import Result from "./Result";
import { results_list, questions } from "./test_data";
import dove from "../images/dove.webp";
import owl from "../images/owl.webp";
import eagle from "../images/eagle.webp";
import peacock from "../images/peacock.webp";
import { useHistory } from "react-router";
const PodeTest = () => {
  const history = useHistory();
  const answers = useSelector((state) => state.PodeAnswers);
  const season_name = useSelector((state) => state.Season.season_name);
  const [result, setResult] = useState("");
  const handleSubmit = () => {
    if (answers.length < 7) {
      alert("Please answer all the questions!!");
    } else {
      let sum = 0;
      answers.forEach((e) => {
        sum += parseInt(e.substr(2, e.length));
      });
      if (sum < 70) {
        setResult(results_list[3]);
        gsap.to(".pode-result-cont", { display: "block" });
        gsap.to(".pode-result-cont", { backgroundImage: `url(${dove})` });
        gsap.to(".questions-flex", { display: "none" });
      }
      if (sum > 69 && sum < 140) {
        setResult(results_list[2]);
        gsap.to(".pode-result-cont", { display: "block" });
        gsap.to(".pode-result-cont", { backgroundImage: `url(${owl})` });

        gsap.to(".questions-flex", { display: "none" });
      }
      if (sum > 139 && sum < 190) {
        setResult(results_list[1]);
        gsap.to(".pode-result-cont", { display: "block" });
        gsap.to(".pode-result-cont", { backgroundImage: `url(${eagle})` });

        gsap.to(".questions-flex", { display: "none" });
      }
      if (sum > 189) {
        setResult(results_list[0]);
        gsap.to(".pode-result-cont", { display: "block" });
        gsap.to(".pode-result-cont", { backgroundImage: `url(${peacock})` });
        gsap.to(".questions-flex", { display: "none" });
      }
    }
  };

  useEffect(() => {
    if (season_name === "winter") {
      gsap.to(".questions-flex", { backgroundColor: "rgb(49,84,122,)" });
    }
    if (season_name === "spring") {
      gsap.to(".questions-flex", { backgroundColor: "rgb(199,12,71,)" });
    }
    if (season_name === "summer") {
      gsap.to(".questions-flex", { backgroundColor: "rgb(30,85,65,)" });
    }
    if (season_name === "autumn") {
      gsap.to(".questions-flex", { backgroundColor: "rgb(167,83,45,)" });
    }
    if (season_name === "bw") {
      gsap.to(".questions-flex", { backgroundColor: "rgba(0, 0, 0,)" });
    }
  }, [season_name, answers]);

  return (
    <div className="pode_test-cont">
      <div className="bacck" onClick={() => history.push("/fun")}>
        <i className="fas fa-arrow-circle-left"></i>
      </div>
      <h1 className="title">PODE TEST</h1>
      <Result result={result} />

      <div className="questions-flex">
        {questions.map((e) => {
          return (
            <Question
              key={e.id}
              id={e.id}
              question={e.question}
              a={e.a}
              b={e.b}
              c={e.c}
              d={e.d}
            />
          );
        })}
        <div onClick={() => handleSubmit()} className="pode-btn">
          Submit
        </div>
      </div>
    </div>
  );
};

export default PodeTest;
