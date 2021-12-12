import "./Quiz.css";
import QuizApp from "./QuizApp/QuizApp";

const Quiz = () => {
  return (
    <>
      <div className="Quiz-content">
        <div className="Quiz-title-box">
          <h3 className="Quiz-title">
            Okay, now take the quiz and find out <br />
            how well did you understand what I am saying
          </h3>
        </div>
        <div className="QuizApp-content">
          <QuizApp />
        </div>
      </div>
    </>
  );
};

export default Quiz;
