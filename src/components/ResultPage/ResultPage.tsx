import { FC } from "react";

import { ResultPageProps } from "@/types/ResultPage";

import "./ResultPage.scss";

const ResultPage: FC<ResultPageProps> = ({
  askedQuestions,
  selectedAnswers,
  questions,
  restartTest,
}) => {
  let correctAnswersCount = 0; // Кол-во правильного ответа
  let resultTitle = ""; // Заголовок результата
  let resultSubtitle = null; // Подзаголовок результата
  const totalQuestions = askedQuestions.length;

  const results = askedQuestions.map((questionId) => {
    const question = questions[questionId];
    const selectedAnswerId = selectedAnswers[questionId];
    const selectedAnswer = question.answers.find(
      (ans) => ans.id === selectedAnswerId
    );
    const isCorrect = selectedAnswer?.isCorrect || false;

    if (isCorrect) {
      correctAnswersCount++;
    }

    return {
      question: question.question,
      answerText: selectedAnswer?.text || "Ответ не найден",
      isCorrect,
    };
  });

  if (correctAnswersCount === totalQuestions) {
    resultTitle = "Поздравляем!";
    resultSubtitle = (
      <div className="result__evaluation">
        Вы правильно ответили на все вопросы.
        <br /> Вы действительно отлично разбираетесь в IT.
      </div>
    );
  } else if (correctAnswersCount === 0) {
    resultTitle = "Упс :(";
    resultSubtitle = (
      <div className="result__evaluation">
        Вы неправильно ответили на все вопросы. <br />
        Нужно подучить теорию.
      </div>
    );
  } else if (correctAnswersCount < 5) {
    resultTitle = "Сомнительный результат :(";
    resultSubtitle = (
      <div className="result__evaluation">
        Вы ответили правильно только на {correctAnswersCount} вопросов.
        <br />
        Нужно подучить теорию.
      </div>
    );
  } else {
    resultTitle = "Хороший результат!";
    resultSubtitle = (
      <div className="result__evaluation">
        Вы ответили правильно на {correctAnswersCount} вопросов.
        <br />
        Так держать!
      </div>
    );
  }

  return (
    <section className="result">
      <div className="container result-container">
        <h1 className="result__title testing__title">{resultTitle}</h1>
        {resultSubtitle}
        <ul className="result__list">
          {results.map((item, index) => (
            <li
              key={index}
              className={`result__item ${
                item.isCorrect
                  ? "result__item--correct"
                  : "result__item--incorrect"
              }`}
            >
              <h2 className="result__question">{item.question}</h2>
              <p className="result__answer">{item.answerText}</p>
            </li>
          ))}
        </ul>
        <button className="result__button" onClick={restartTest}>
          Пройти еще раз
        </button>
      </div>
    </section>
  );
};

export default ResultPage;
