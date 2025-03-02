"use client";

import { useState } from "react";

import StartTestPrompt from "@/components/StartTestPrompt/StartTestPrompt";

import { questions } from "@/data/questions";

import "@/styles/home.scss";

export default function Home() {
  const [showPrompt, setShowPrompt] = useState(true);
  return showPrompt ? (
    <StartTestPrompt onStart={() => setShowPrompt(false)} />
  ) : (
    <section className="testing">
      <div className="container">
        <h1 className="testing__title">Тестирование</h1>
        <div className="testing__content">
          <h2 className="testing__question">Что такое операционная система?</h2>
          <div className="testing__answer">
            <input type="checkbox" className="testing__answer-checkbox" />
            <span className="testing__answer-text">
              Это просто программа на компьютере, как и другие — Word или
              Chrome.
            </span>
          </div>
          <div className="testing__answer">
            <input type="checkbox" className="testing__answer-checkbox" />
            <span className="testing__answer-text">
              Это показатель того, какой процессор используется на компьютере.
              Например, 32-битный или 64-битный.
            </span>
          </div>
          <div className="testing__answer">
            <input type="checkbox" className="testing__answer-checkbox" />
            <span className="testing__answer-text">
              Это набор взаимосвязанных программ, осуществляющих управление
              компьютером и взаимодействие с пользователем.
            </span>
          </div>
          <div className="testing__answer">
            <input type="checkbox" className="testing__answer-checkbox" />
            <span className="testing__answer-text">
              Нет такого понятия, есть понятие "файловая система".
            </span>
          </div>
        </div>
        <div className="testing__progress">
          <div className="testing__progress-header">
            <span className="testing__progress-start">0</span>
            <span className="testing__progress-end">
              {/* Кол-во вопросов +1 экрана с переходом на результат */}
              {questions.length + 1}
            </span>
          </div>
          <div className="testing__progress-bar">
            <div className="testing__progress-fill" style={{ width: "30%" }}>
              <span className="testing__progress-counter">3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
