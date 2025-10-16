import React, { useState, useMemo } from 'react';
import { Course, CourseProgress, Module, QuizProgress } from '../types';
import CourseSidebar from './CourseSidebar';
import CodeEditor from './CodeEditor';
import QuizView from './QuizView';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { CodeIcon } from './icons/CodeIcon';
import { TrophyIcon } from './icons/TrophyIcon';
import AiTutor from './AiTutor';

interface CourseDetailViewProps {
  course: Course;
  onBack: () => void;
  progress: CourseProgress;
  quizzesProgress: QuizProgress;
  onCompleteExercise: (courseId: string, moduleId: string) => void;
  onCompleteQuiz: (courseId: string, moduleId: string, score: number) => void;
  onGenerateCertificate: (course: Course, studentName: string) => void;
  certificateGenerationCount: number;
  certificateGenerationLimit: number;
}

const LessonContent: React.FC<{ module: Module }> = ({ module }) => (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-dark mb-4">{module.title}</h1>
      
      <div>
        <h2 className="text-xl font-bold text-primary mb-2 flex items-center gap-2"><BookOpenIcon className="w-6 h-6"/>In Short</h2>
        <p className="text-gray-600 bg-blue-50 p-3 rounded-lg border border-blue-200">{module.shortDescription}</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-2 flex items-center gap-2"><BookOpenIcon className="w-6 h-6"/>In-Depth Explanation</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{module.longDescription}</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-green-600 mb-2 flex items-center gap-2"><CodeIcon className="w-6 h-6"/>Example</h2>
        <div className="bg-gray-800 text-white font-mono text-sm rounded-md p-4 overflow-x-auto">
            <pre><code>{module.exampleCode}</code></pre>
        </div>
      </div>
    </div>
);


const CourseDetailView: React.FC<CourseDetailViewProps> = ({ 
  course, onBack, progress, quizzesProgress, onCompleteExercise, onCompleteQuiz,
  onGenerateCertificate, certificateGenerationCount, certificateGenerationLimit 
}) => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'lesson' | 'exercise' | 'quiz'>('lesson');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const currentModule = course.modules[currentModuleIndex];
  const isExerciseCompleted = progress[currentModule.id] || false;
  const isQuizLocked = !isExerciseCompleted;

  const completedModules = useMemo(() => {
    return Object.values(progress).filter(Boolean).length;
  }, [progress]);
  
  const totalModules = course.modules.length;
  const progressPercentage = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
  
  const handleSelectModule = (index: number) => {
    setCurrentModuleIndex(index);
    setActiveTab('lesson');
  };
  
  const handleNext = () => {
    if (currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setActiveTab('lesson');
    }
  };

  const handlePrev = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setActiveTab('lesson');
    }
  };

  return (
    <div className="flex h-[calc(100vh-68px)] bg-white overflow-hidden relative">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      <CourseSidebar 
        course={course}
        progress={progress}
        quizzesProgress={quizzesProgress}
        currentModuleIndex={currentModuleIndex}
        onSelectModule={handleSelectModule}
        onBack={onBack}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        progressPercentage={progressPercentage}
        onGenerateCertificate={onGenerateCertificate}
        generationCount={certificateGenerationCount}
        generationLimit={certificateGenerationLimit}
      />

      <main className={`flex-1 flex flex-col transition-all duration-300 overflow-hidden ${isSidebarOpen ? 'lg:ml-80' : 'ml-0'}`}>
        {/* Tab Navigation */}
        <div className="flex-shrink-0 border-b border-gray-200">
            <nav className="-mb-px flex space-x-6 px-4" aria-label="Tabs">
                 <button
                    onClick={() => setActiveTab('lesson')}
                    className={`inline-flex items-center px-1 py-4 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'lesson'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                    <BookOpenIcon className="w-5 h-5 mr-2" />
                    Lesson
                </button>
                <button
                    onClick={() => setActiveTab('exercise')}
                    className={`inline-flex items-center px-1 py-4 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'exercise'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                    <CodeIcon className="w-5 h-5 mr-2" />
                    Exercise
                </button>
                 <button
                    onClick={() => !isQuizLocked && setActiveTab('quiz')}
                    disabled={isQuizLocked}
                    className={`inline-flex items-center px-1 py-4 border-b-2 font-medium text-sm transition-colors disabled:cursor-not-allowed ${
                        activeTab === 'quiz'
                        ? 'border-primary text-primary'
                        : `border-transparent ${isQuizLocked ? 'text-gray-400' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
                    }`}
                    aria-label={isQuizLocked ? "Complete the exercise to unlock the quiz" : "Go to quiz"}
                >
                    <TrophyIcon className="w-5 h-5 mr-2" />
                    Quiz
                </button>
            </nav>
        </div>
        
        {/* Content Pane */}
        <div className="flex-1 overflow-hidden">
            {activeTab === 'lesson' && (
                <div className="bg-light h-full overflow-y-auto">
                    <LessonContent module={currentModule} />
                </div>
            )}
            {activeTab === 'exercise' && (
                <div className="h-full">
                    <CodeEditor 
                        exercise={currentModule.exercise}
                        isCompleted={isExerciseCompleted}
                        onComplete={() => onCompleteExercise(course.id, currentModule.id)}
                        courseCategory={course.category}
                    />
                </div>
            )}
             {activeTab === 'quiz' && (
                <div className="bg-light h-full overflow-y-auto">
                    <QuizView 
                        quiz={currentModule.quiz}
                        moduleId={currentModule.id}
                        onCompleteQuiz={(moduleId, score) => onCompleteQuiz(course.id, moduleId, score)}
                        progress={quizzesProgress[currentModule.id]}
                        isLocked={isQuizLocked}
                    />
                </div>
            )}
        </div>
        
        {/* Navigation Footer */}
        <div className="flex-shrink-0 border-t bg-white">
            <div className="flex justify-between items-center p-4">
                <button
                    onClick={handlePrev}
                    disabled={currentModuleIndex === 0}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronLeftIcon className="w-5 h-5" />
                    Previous
                </button>
                <span className="text-secondary font-medium">{currentModuleIndex + 1} / {totalModules}</span>
                <button
                    onClick={handleNext}
                    disabled={currentModuleIndex === totalModules - 1}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    Next
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
      </main>

      <AiTutor course={course} module={currentModule} />
    </div>
  );
};

export default CourseDetailView;
