"use client";

import { useState, useEffect } from "react";

import StartTestPrompt from "@/components/StartTestPrompt/StartTestPrompt";
import TestingQuestion from "@/components/TestingPage/TestingQuestion/TestingQuestion";
import TestingProgress from "@/components/TestingPage/TestingProgress/TestingProgress";
import ResultPage from "@/components/ResultPage/ResultPage";

import { questions } from "@/data/questions"; // Вопросы и ответы

import "@/styles/home.scss";

export default function Home() {
  const [showPrompt, setShowPrompt] = useState<boolean | null>(null); // Экран в начале загрузки
  const [currentQuestionId, setCurrentQuestionId] = useState<number | null>(
    null
  ); // ID текущего вопроса
  const [shuffledAnswers, setShuffledAnswers] = useState<any[]>([]); // Перемешанные варианты ответов
  const [askedQuestions, setAskedQuestions] = useState<number[]>([]); // Список уже заданных вопросов
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({}); // Выбранные ответы
  const [showResults, setShowResults] = useState(false); // Отображение результатов теста

  // Функция перемешивания массива
  const shuffleArray = (array: any[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // Функция выбора случайного вопроса
  const getRandomQuestionId = () => {
    if (askedQuestions.length === questions.length) return null;
    let randomId: number;
    do {
      randomId = Math.floor(Math.random() * questions.length);
    } while (askedQuestions.includes(randomId));
    return randomId;
  };

  // Проверка localStorage
  useEffect(() => {
    const testStarted = localStorage.getItem("testStarted");
    setShowPrompt(testStarted ? false : true);
  }, []);

  const handleStartTest = () => {
    localStorage.setItem("testStarted", "true");
    setShowPrompt(false);
  };

  useEffect(() => {
    if (showPrompt === false) {
      const randomId = getRandomQuestionId();
      if (randomId !== null) {
        setCurrentQuestionId(randomId);
        setAskedQuestions((prev) => [...prev, randomId]);
        setShuffledAnswers(shuffleArray(questions[randomId].answers));
      } else {
        setTimeout(() => setShowResults(true), 1000);
      }
    }
  }, [showPrompt]);

  // Обработчик клика по ответу
  const handleAnswerClick = (answerId: string) => {
    if (currentQuestionId !== null) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestionId]: answerId,
      }));

      setTimeout(() => {
        const nextQuestionId = getRandomQuestionId();
        if (nextQuestionId !== null) {
          setCurrentQuestionId(nextQuestionId);
          setAskedQuestions((prev) => [...prev, nextQuestionId]);
          setShuffledAnswers(shuffleArray(questions[nextQuestionId].answers));
        } else {
          setShowResults(true);
        }
      }, 1000);
    }
  };

  // Рестарт теста
  const restartTest = () => {
    setTimeout(() => {
      setShowPrompt(null);
      setCurrentQuestionId(null);
      setAskedQuestions([]);
      setSelectedAnswers({});
      setShowResults(false);
      setTimeout(() => setShowPrompt(false), 100);
    }, 1000);
  };

  if (showPrompt === null) return null;

  if (showResults) {
    return (
      <ResultPage
        askedQuestions={askedQuestions}
        selectedAnswers={selectedAnswers}
        questions={questions}
        restartTest={restartTest}
      />
    );
  }

  return showPrompt ? (
    <StartTestPrompt onStart={handleStartTest} />
  ) : (
    <section className="testing">
      <div className="container">
        <h1 className="testing__title">Тестирование</h1>
        <div className="testing__content">
          {currentQuestionId !== null && (
            <TestingQuestion
              {...questions[currentQuestionId]}
              answers={shuffledAnswers}
              onAnswerClick={handleAnswerClick}
              key={currentQuestionId}
            />
          )}
        </div>
        <TestingProgress
          questions={questions}
          askedQuestions={askedQuestions}
        />
      </div>
    </section>
  );
}
