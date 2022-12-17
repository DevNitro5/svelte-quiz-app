export interface QuizData {
  category: string;
  type: string;
  difficulty: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}

export interface ResponseData {
  response_code: number;
  results: QuizData[];
}
