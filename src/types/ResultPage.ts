import { Question } from "./Question";

export interface ResultPageProps {
  askedQuestions: number[];
  selectedAnswers: Record<number, string>;
  questions: Question[];
  restartTest: () => void;
}

export interface StartTestPromptProps {
  onStart: () => void;
}
