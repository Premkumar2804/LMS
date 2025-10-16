import React, { useState } from 'react';
import { Quiz, QuizProgress } from '../types';
import { LockIcon } from './icons/LockIcon';
import { CheckIcon } from './icons/CheckIcon';

interface QuizViewProps {
  quiz: Quiz;
  moduleId: string;
  onCompleteQuiz: (moduleId: string, score: number) => void;
  progress: QuizProgress[string] | undefined;
  isLocked: boolean;
}

const QuizView: React.FC<QuizViewProps> = ({ quiz, moduleId, onCompleteQuiz, progress, isLocked }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(progress?.completed || false);

  if (isLocked) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <LockIcon className="w-16 h-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-dark">Quiz Locked</h2>
        <p className="text-secondary mt-2">
          Please complete the exercise for this module to unlock the quiz.
        </p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(selectedAnswers).length !== quiz.questions.length) {
        alert('Please answer all questions before submitting.');
        return;
    }
    let score = 0;
    quiz.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswerIndex) {
        score++;
      }
    });
    onCompleteQuiz(moduleId, score);
    setIsSubmitted(true);
  };
  
  const handleAnswerChange = (questionId: string, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const finalScore = progress?.score ?? 0;
  const totalQuestions = quiz.questions.length;

  if (isSubmitted) {
    return (
      <div className="p-4 md:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center bg-white p-6 rounded-lg shadow-md mb-8 border-t-4 border-primary">
            <h1 className="text-3xl font-extrabold text-dark">Quiz Results</h1>
            <p className="text-xl text-secondary mt-2">You scored:</p>
            <p className="text-5xl font-bold text-primary my-4">{finalScore} / {totalQuestions}</p>
          </div>
          <div className="space-y-6">
            {quiz.questions.map((q, index) => {
              const userAnswer = progress?.completed ? (selectedAnswers[q.id] ?? -1) : selectedAnswers[q.id]; // In review, we may not have selected answers in state. Need to check this logic. For now, assume state is good.
              const isCorrect = userAnswer === q.correctAnswerIndex;
              return (
                <div key={q.id} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-lg font-semibold text-dark mb-4">{index + 1}. {q.questionText}</p>
                  <div className="space-y-3">
                    {q.options.map((option, optIndex) => {
                      let optionClass = 'border-gray-300';
                      if (optIndex === q.correctAnswerIndex) {
                        optionClass = 'bg-green-100 border-green-400 text-green-800';
                      } else if (optIndex === userAnswer && !isCorrect) {
                        optionClass = 'bg-red-100 border-red-400 text-red-800';
                      }
                      return (
                        <div key={optIndex} className={`p-3 border rounded-md ${optionClass}`}>
                          {option}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
         <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-dark">Module Quiz</h1>
            <p className="text-secondary mt-2">Test your knowledge from this lesson.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {quiz.questions.map((q, index) => (
            <div key={q.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-dark mb-4">{index + 1}. {q.questionText}</p>
              <div className="space-y-3">
                {q.options.map((option, optIndex) => (
                  <label key={optIndex} className="flex items-center p-3 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name={q.id}
                      value={optIndex}
                      onChange={() => handleAnswerChange(q.id, optIndex)}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      required
                    />
                    <span className="ml-3 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center pt-4">
            <button 
                type="submit" 
                className="bg-primary text-white font-bold py-3 px-10 rounded-lg shadow-lg hover:bg-primary-dark transition-colors"
            >
              Submit Answers
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizView;