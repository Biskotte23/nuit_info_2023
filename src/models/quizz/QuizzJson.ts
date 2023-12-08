import { ThemeEnum } from '../themes/ThemeEnum';

export interface QuestionOption {
  id: number;
  value: string;
}

export interface QuizzQuestion {
  question: string;
  options: QuestionOption[];
  response: number;
}

export interface QuizzJson {
  questions: {
    [ThemeEnum.Energy]: QuizzQuestion[];
    [ThemeEnum.Forest]: QuizzQuestion[];
    [ThemeEnum.Pollution]: QuizzQuestion[];
    [ThemeEnum.Sea]: QuizzQuestion[];
    [ThemeEnum.Wind]: QuizzQuestion[];
  };
}
