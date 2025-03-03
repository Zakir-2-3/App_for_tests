import { Answer } from "./Answer";
import { Question } from "./Question";

export interface TestingQuestionProps {
  id: number;
  question: string;
  answers: Answer[];
  onAnswerClick: (answerId: string) => void;
}

export interface TestingProgressProps {
  questions: Question[];
  askedQuestions: number[];
}
