import { FC } from "react";

import { TestingProgressProps } from "@/types/Testing";

import "./TestingProgress.scss";

const TestingProgress: FC<TestingProgressProps> = ({
  questions,
  askedQuestions,
}) => {
  return (
    <div className="testing__progress">
      <div className="testing__progress-header">
        <span className="testing__progress-start">0</span>
        <span className="testing__progress-end">{questions.length}</span>
      </div>
      <div className="testing__progress-bar">
        <div
          className="testing__progress-fill"
          style={{
            width: `${(askedQuestions.length / questions.length) * 100}%`,
          }}
        >
          <span className="testing__progress-counter">
            {askedQuestions.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestingProgress;
