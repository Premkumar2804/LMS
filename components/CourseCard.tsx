
import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  isEnrolled: boolean;
  onEnroll: (courseId: string) => void;
  onView: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, isEnrolled, onEnroll, onView }) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if(isEnrolled) {
        onView(course);
    } else {
        onEnroll(course.id);
    }
  };
    
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col text-left relative">
       <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
        {course.category}
      </div>
      <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-dark mb-2">{course.title}</h3>
        <p className="text-secondary mb-4 flex-grow">{course.description}</p>
        <p className="text-sm text-gray-500 mb-4">Instructor: {course.instructor}</p>
        <button 
          onClick={handleButtonClick}
          className={`w-full py-3 px-4 rounded-md font-semibold text-white transition-colors duration-300 ${isEnrolled ? 'bg-success hover:bg-green-600' : 'bg-primary hover:bg-primary-dark'}`}
        >
          {isEnrolled ? 'Continue Learning' : 'Enroll for Free'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;