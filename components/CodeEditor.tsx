import React, { useState, useEffect } from 'react';
import { Exercise } from '../types';
import { CheckIcon } from './icons/CheckIcon';
import { CodeIcon } from './icons/CodeIcon';
import { LightbulbIcon } from './icons/LightbulbIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { PlayIcon } from './icons/PlayIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';

interface CodeEditorProps {
  exercise: Exercise;
  isCompleted: boolean;
  onComplete: () => void;
  courseCategory: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ exercise, isCompleted, onComplete, courseCategory }) => {
  const [code, setCode] = useState(exercise.initialCode);
  const [showHint, setShowHint] = useState(false);
  const [previewDoc, setPreviewDoc] = useState(exercise.initialCode);
  const [output, setOutput] = useState<string | null>(null);

  useEffect(() => {
    setCode(exercise.initialCode);
    setPreviewDoc(exercise.initialCode);
    setShowHint(false);
    setOutput(null); // Reset output on exercise change
  }, [exercise]);

  const handleRunCode = () => {
    if (courseCategory === 'Web Development') {
        setPreviewDoc(code);
    } else {
        // Simulate output for other languages
        const printRegex = /(?:print|System\.out\.println)\(([^)]*)\)/g;
        const matches = [...code.matchAll(printRegex)];
        let simulatedOutput;

        if (matches.length > 0) {
             simulatedOutput = matches.map(match => {
                let content = match[1].trim();
                // If it's a simple string literal, show the content.
                if ((content.startsWith('"') && content.endsWith('"')) || (content.startsWith("'") && content.endsWith("'"))) {
                    return content.slice(1, -1);
                }
                // We can't actually evaluate variables/expressions, so we show what's being printed.
                return `[Output from: ${content}]`;
            }).join('\n');
        } else {
            // For conceptual questions (like in Full Stack) or code without print statements, show their answer.
            const uncommentedLines = code.split('\n').filter(line => !line.trim().startsWith('//') && !line.trim().startsWith('#'));
            simulatedOutput = uncommentedLines.join('\n').trim();
        }

        setOutput(simulatedOutput || 'Code executed. No output produced.');
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Toolbar */}
      <div className="flex-shrink-0 bg-white p-2 border-b border-gray-200 flex justify-between items-center flex-wrap gap-2">
        <div className="pl-2">
          <h4 className="text-md font-bold flex items-center gap-2 text-primary">
            <CodeIcon className="w-5 h-5" />
            {exercise.title}
          </h4>
          <p className="text-gray-500 text-xs mt-1 hidden sm:block">{exercise.question}</p>
        </div>
        <div className="flex items-center gap-2">
          {!isCompleted && (
            <button
              onClick={handleRunCode}
              className="px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
              aria-label="Run code"
            >
              <PlayIcon className="w-5 h-5" />
              <span className="hidden sm:inline">Run</span>
            </button>
          )}
          <button
            onClick={onComplete}
            disabled={isCompleted}
            className="px-4 py-2 bg-success text-white font-semibold rounded-md hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <CheckIcon className="w-5 h-5" />
             <span className="hidden sm:inline">{isCompleted ? 'Completed!' : 'Mark as Complete'}</span>
          </button>
        </div>
      </div>

      {/* Main Content: Editor + Preview/Prompt */}
      <div className="flex-1 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-px bg-gray-300 overflow-hidden">
        {/* Editor Pane */}
        <div className="flex flex-col bg-gray-800 h-full overflow-hidden">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full bg-transparent text-white font-mono text-sm outline-none resize-none p-4 leading-relaxed tracking-wide flex-1"
            placeholder="Write your code here..."
            disabled={isCompleted}
            spellCheck="false"
            aria-label="Code Editor"
          />
           {!isCompleted && (
             <div className="flex-shrink-0 p-3 border-t border-gray-700 bg-gray-800">
                {!showHint ? (
                    <button
                        onClick={() => setShowHint(true)}
                        className="w-full sm:w-auto px-4 py-1.5 bg-yellow-400 text-yellow-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                        <LightbulbIcon className="w-5 h-5" />
                        Need a hint?
                    </button>
                ) : (
                    <div className="p-3 bg-gray-700 border border-gray-600 text-blue-200 rounded-lg animate-fade-in">
                        <h5 className="font-bold text-sm">Hint:</h5>
                        <p className="text-xs mb-2">{exercise.hint}</p>
                        <a 
                            href={exercise.documentationLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-300 font-semibold hover:underline text-xs"
                        >
                            Read Documentation <ExternalLinkIcon className="w-3 h-3" />
                        </a>
                    </div>
                )}
             </div>
           )}
        </div>

        {/* Preview/Prompt Pane */}
        <div className="bg-white h-full relative overflow-y-auto">
            {courseCategory === 'Web Development' ? (
                 <>
                    <iframe
                        srcDoc={previewDoc}
                        title="Live Preview"
                        sandbox="allow-scripts"
                        className="w-full h-full border-0"
                    />
                    {isCompleted && (
                        <div className="absolute inset-0 flex items-center justify-center bg-green-900/80">
                            <div className="text-center p-4 bg-white rounded-lg shadow-xl">
                                <CheckIcon className="w-12 h-12 text-success mx-auto" />
                                <p className="font-bold text-dark mt-2">Exercise Completed!</p>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="p-6 space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-dark mb-2 flex items-center gap-2">
                            <BookOpenIcon className="w-6 h-6 text-primary" />
                            Exercise Prompt
                        </h3>
                        <hr />
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg text-gray-800">{exercise.title}</h4>
                        <p className="mt-2 text-gray-600 leading-relaxed">{exercise.question}</p>
                    </div>

                    {output !== null && (
                        <div className="animate-fade-in">
                            <h3 className="text-xl font-bold text-dark mb-2 flex items-center gap-2">
                                <CodeIcon className="w-6 h-6 text-primary" />
                                Output
                            </h3>
                            <hr />
                            <div className="mt-4 p-4 bg-gray-900 text-white font-mono text-sm rounded-md overflow-x-auto min-h-[50px]">
                                <pre>{output}</pre>
                            </div>
                        </div>
                    )}

                    {isCompleted && (
                        <div className="flex items-center justify-center bg-green-100 text-green-800 p-4 rounded-lg border border-green-300">
                            <CheckIcon className="w-8 h-8 mr-3" />
                            <div>
                                <p className="font-bold text-lg">Exercise Completed!</p>
                                <p className="text-sm">Great work! You're ready for the next challenge.</p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;