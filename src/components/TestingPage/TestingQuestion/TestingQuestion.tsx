import { FC, useState } from "react";

import { TestingQuestionProps } from "@/types/Testing";

import "./TestingQuestion.scss";

const TestingQuestion: FC<TestingQuestionProps> = ({
  question,
  answers,
  onAnswerClick,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (answerId: string) => {
    if (isDisabled) return;
    setIsDisabled(true);
    onAnswerClick(answerId);
    setTimeout(() => setIsDisabled(false), 1000);
  };

  return (
    <>
      <h2
        className="testing__question"
        style={{ opacity: isDisabled ? 0.7 : 1 }}
      >
        {question}
      </h2>
      <ul className="testing__answers-list">
        {answers.map((answer) => (
          <li
            key={answer.id}
            className="testing__answer"
            style={{
              pointerEvents: isDisabled ? "none" : "auto",
              opacity: isDisabled ? 0.7 : 1,
            }}
          >
            <input
              type="checkbox"
              className="testing__answer-checkbox"
              onClick={() => handleClick(answer.id)}
              readOnly
            />
            <span className="testing__answer-text">{answer.text}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TestingQuestion;
