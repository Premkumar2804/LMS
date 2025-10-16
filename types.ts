export interface Exercise {
  id: string;
  title: string;
  question: string;
  isCompleted: boolean;
  initialCode: string;
  hint: string;
  documentationLink: string;
}

export interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Quiz {
  id: string;
  questions: Question[];
}

export interface Module {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  exampleCode: string;
  exercise: Exercise;
  quiz: Quiz;
  videoUrl?: string;
}

export interface Course {
  id:string;
  title: string;
  description: string;
  longDescription: string;
  instructor: string;
  imageUrl: string;
  modules: Module[];
  category: string;
}

export interface CourseProgress {
  [moduleId: string]: boolean; // true if the module's exercise is completed
}

export interface QuizProgress {
    [moduleId: string]: {
        score: number;
        completed: boolean;
    };
}

export interface CertificateInfo {
  studentName: string;
  courseTitle: string;
  completionDate: string;
  courseCategory: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface User {
  email: string;
}
