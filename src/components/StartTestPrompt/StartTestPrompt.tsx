import { useState, useEffect, FC } from "react";

import { StartTestPromptProps } from "@/types/ResultPage";

import "./StartTestPrompt.scss";

const StartTestPrompt: FC<StartTestPromptProps> = ({ onStart }) => {
  const [startTest, setStartTest] = useState(false);

  const handleNoClick = () => {
    window.open("https://rabotaitochka.ru/", "_blank");
  };

  useEffect(() => {
    if (startTest) {
      const timer = setTimeout(() => onStart(), 1000);
      return () => clearTimeout(timer);
    }
  }, [startTest, onStart]);

  return (
    <section
      className="start"
      style={{
        opacity: startTest ? 0.7 : 1,
        background: startTest ? "#cccccca6" : "#fff",
        pointerEvents: startTest ? "none" : "auto",
      }}
    >
      <div className="start__test">
        <h1 className="start__test-title">Начать тестирование?</h1>
        <div className="start__test-buttons">
          <button
            className="start__test-button"
            onClick={() => setStartTest(true)}
          >
            Да
          </button>
          <button className="start__test-button" onClick={handleNoClick}>
            Нет
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartTestPrompt;
