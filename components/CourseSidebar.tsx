
import React, { useState } from 'react';
import { Course, CourseProgress, QuizProgress } from '../types';
import { CheckIcon } from './icons/CheckIcon';
import { MenuIcon } from './icons/MenuIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import ProgressBar from './ProgressBar';
import { TrophyIcon } from './icons/TrophyIcon';
import { VideoCameraIcon } from './icons/VideoCameraIcon';
import { StarIcon } from './icons/StarIcon';

interface CourseSidebarProps {
  course: Course;
  progress: CourseProgress;
  quizzesProgress: QuizProgress;
  currentModuleIndex: number;
  onSelectModule: (index: number) => void;
  onBack: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  progressPercentage: number;
  onGenerateCertificate: (course: Course, studentName: string) => void;
  generationCount: number;
  generationLimit: number;
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({ 
    course, progress, quizzesProgress, currentModuleIndex, onSelectModule, onBack, isOpen, setIsOpen,
    progressPercentage, onGenerateCertificate, generationCount, generationLimit
}) => {
  const [studentName, setStudentName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const isCourseComplete = progressPercentage === 100;
  const canGenerateCertificate = generationCount < generationLimit;

  const handleGenerateClick = () => {
    if (studentName.trim()) {
      onGenerateCertificate(course, studentName.trim());
      setShowNameInput(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="absolute top-4 left-4 z-40 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        aria-label="Open sidebar"
      >
        <MenuIcon className="w-6 h-6" />
      </button>
    );
  }

  return (
    <aside className="absolute lg:fixed top-0 left-0 h-full w-80 bg-gray-800 text-white flex flex-col z-30 transform transition-transform duration-300 ease-in-out"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-700 flex-shrink-0">
        <button onClick={onBack} className="flex items-center gap-2 hover:text-blue-300">
            <ChevronLeftIcon className="w-5 h-5" />
            <span className="font-semibold">All Courses</span>
        </button>
        <button onClick={() => setIsOpen(false)} className="lg:hidden p-1" aria-label="Close sidebar">
            <ChevronLeftIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4 flex-shrink-0">
        <h2 className="text-xl font-bold">{course.title}</h2>
        <div className="mt-3">
            <ProgressBar percentage={progressPercentage} />
            <p className="text-xs text-gray-400 text-center mt-1">{Math.round(progressPercentage)}% Complete</p>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul>
          {course.modules.map((module, index) => {
            const isExerciseCompleted = progress[module.id] || false;
            const isQuizCompleted = quizzesProgress[module.id]?.completed || false;
            const isActive = index === currentModuleIndex;
            return (
              <li key={module.id}>
                <button
                  onClick={() => onSelectModule(index)}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                    isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                    isExerciseCompleted ? 'bg-success text-white' : 'bg-gray-600'
                  }`}>
                    {isExerciseCompleted ? <CheckIcon className="w-3 h-3" /> : index + 1}
                  </div>
                  <span className="flex-1 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      {module.title}
                       {isQuizCompleted && <StarIcon className="w-4 h-4 text-yellow-400" />}
                    </span>
                    {module.videoUrl && <VideoCameraIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700 flex-shrink-0">
        {isCourseComplete ? (
          <>
            {canGenerateCertificate ? (
              <>
                {!showNameInput ? (
                  <button 
                    onClick={() => setShowNameInput(true)} 
                    className="w-full bg-warning hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <TrophyIcon className="w-5 h-5" />
                    Generate Certificate ({generationLimit - generationCount} left)
                  </button>
                ) : (
                  <div className="space-y-2 animate-fade-in">
                    <p className="text-xs text-gray-400">Enter your full name as you'd like it to appear on the certificate.</p>
                    <input 
                      type="text" 
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2 border bg-gray-900 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                    <button 
                      onClick={handleGenerateClick}
                      disabled={!studentName.trim()}
                      className="w-full bg-success hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors text-sm"
                    >
                      Confirm and Generate
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center p-2 text-sm bg-gray-700 text-gray-300 rounded-md">
                <p className="font-semibold">Certificate generation limit reached.</p>
              </div>
            )}
            {generationCount > 0 && (
                <p className="text-xs text-center text-gray-400 mt-2">
                    You have generated this certificate {generationCount} time(s).
                </p>
            )}
          </>
        ) : (
          <div className="text-center p-2 text-sm bg-gray-700 text-gray-300 rounded-md">
            <p className="font-semibold">Complete all modules to unlock!</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default CourseSidebar;