import { Answer } from "./Answer";

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}
