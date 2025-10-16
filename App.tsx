
import React, { useState, useMemo, useEffect } from 'react';
import { Course, CourseProgress, CertificateInfo, QuizProgress, User } from './types';
import { COURSES } from './constants';
import Header from './components/Header';
import CourseCard from './components/CourseCard';
import CourseDetailView from './components/CourseDetailView';
import CertificateView from './components/CertificateView';
import AuthView from './components/AuthView';

const CERTIFICATE_GENERATION_LIMIT = 2;

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const savedUser = localStorage.getItem('currentUser');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Failed to parse currentUser from localStorage", error);
      return null;
    }
  });
  
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [certificateInfo, setCertificateInfo] = useState<CertificateInfo | null>(null);

  // User-specific state
  const [enrolledCourses, setEnrolledCourses] = useState<Set<string>>(new Set());
  const [coursesProgress, setCoursesProgress] = useState<Record<string, CourseProgress>>({});
  const [quizzesProgress, setQuizzesProgress] = useState<Record<string, QuizProgress>>({});
  const [certificateGenerationCount, setCertificateGenerationCount] = useState<Record<string, number>>({});
  
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [instructorFilter, setInstructorFilter] = useState<string>('');

  const getStorageKey = (baseKey: string) => {
    if (!currentUser) return null;
    return `${baseKey}_${currentUser.email}`;
  };
  
  // Load user data on login
  useEffect(() => {
    if (currentUser) {
      const loadUserData = () => {
        try {
          const enrolledKey = getStorageKey('enrolledCourses');
          const savedEnrolled = enrolledKey ? localStorage.getItem(enrolledKey) : null;
          setEnrolledCourses(savedEnrolled ? new Set(JSON.parse(savedEnrolled)) : new Set());

          const progressKey = getStorageKey('coursesProgress');
          const savedProgress = progressKey ? localStorage.getItem(progressKey) : null;
          setCoursesProgress(savedProgress ? JSON.parse(savedProgress) : {});
          
          const quizzesKey = getStorageKey('quizzesProgress');
          const savedQuizzes = quizzesKey ? localStorage.getItem(quizzesKey) : null;
          setQuizzesProgress(savedQuizzes ? JSON.parse(savedQuizzes) : {});

          const certCountKey = getStorageKey('certificateGenerationCount');
          const savedCertCount = certCountKey ? localStorage.getItem(certCountKey) : null;
          setCertificateGenerationCount(savedCertCount ? JSON.parse(savedCertCount) : {});
        } catch (error) {
          console.error("Failed to load user data from localStorage", error);
        }
      };
      loadUserData();
    } else {
      // Clear data on logout
      setEnrolledCourses(new Set());
      setCoursesProgress({});
      setQuizzesProgress({});
      setCertificateGenerationCount({});
      setSelectedCourse(null);
      setCertificateInfo(null);
    }
  }, [currentUser]);


  // Persist state to localStorage, scoped by user
  useEffect(() => {
    const key = getStorageKey('enrolledCourses');
    if (key) localStorage.setItem(key, JSON.stringify([...enrolledCourses]));
  }, [enrolledCourses, currentUser]);

  useEffect(() => {
    const key = getStorageKey('coursesProgress');
    if (key) localStorage.setItem(key, JSON.stringify(coursesProgress));
  }, [coursesProgress, currentUser]);

  useEffect(() => {
    const key = getStorageKey('quizzesProgress');
    if (key) localStorage.setItem(key, JSON.stringify(quizzesProgress));
  }, [quizzesProgress, currentUser]);

  useEffect(() => {
    const key = getStorageKey('certificateGenerationCount');
    if (key) localStorage.setItem(key, JSON.stringify(certificateGenerationCount));
  }, [certificateGenerationCount, currentUser]);

  const handleLogin = (user: User) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };
  
  const handleSelectCourse = (course: Course) => {
    if (enrolledCourses.has(course.id)) {
      setSelectedCourse(course);
    }
  };
  
  const handleBackToHome = () => {
    setSelectedCourse(null);
    setCertificateInfo(null);
  };

  const handleEnroll = (courseId: string) => {
    setEnrolledCourses(prev => new Set(prev).add(courseId));
    if (!coursesProgress[courseId]) {
      const initialProgress = COURSES.find(c => c.id === courseId)?.modules.reduce((acc, module) => {
        acc[module.id] = false;
        return acc;
      }, {} as CourseProgress) || {};
      setCoursesProgress(prev => ({ ...prev, [courseId]: initialProgress }));
    }
    if (!quizzesProgress[courseId]) {
        const initialQuizProgress = COURSES.find(c => c.id === courseId)?.modules.reduce((acc, module) => {
            acc[module.id] = { score: 0, completed: false };
            return acc;
        }, {} as QuizProgress) || {};
        setQuizzesProgress(prev => ({ ...prev, [courseId]: initialQuizProgress }));
    }
    const course = COURSES.find(c => c.id === courseId);
    if(course) setSelectedCourse(course);
  };

  const handleCompleteExercise = (courseId: string, moduleId: string) => {
    setCoursesProgress(prev => {
      const newProgress = { ...prev };
      if (newProgress[courseId]) {
        newProgress[courseId] = { ...newProgress[courseId], [moduleId]: true };
      }
      return newProgress;
    });
  };

  const handleCompleteQuiz = (courseId: string, moduleId: string, score: number) => {
    setQuizzesProgress(prev => {
        const newProgress = { ...prev };
        if (newProgress[courseId]) {
            newProgress[courseId] = {
                ...newProgress[courseId],
                [moduleId]: { score, completed: true }
            };
        }
        return newProgress;
    });
  };

  const handleGenerateCertificate = (course: Course, studentName: string) => {
    const currentCount = certificateGenerationCount[course.id] || 0;
    if (currentCount >= CERTIFICATE_GENERATION_LIMIT) return;

    const completionDate = new Date().toLocaleString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
    setCertificateInfo({
      studentName,
      courseTitle: course.title,
      completionDate,
      courseCategory: course.category,
    });
    setCertificateGenerationCount(prev => ({
        ...prev,
        [course.id]: currentCount + 1
    }));
  };
  
  const { categories, instructors } = useMemo(() => {
    const categories = [...new Set(COURSES.map(c => c.category))];
    const instructors = [...new Set(COURSES.map(c => c.instructor))];
    return { categories, instructors };
  }, []);

  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => {
      const categoryMatch = categoryFilter ? course.category === categoryFilter : true;
      const instructorMatch = instructorFilter ? course.instructor === instructorFilter : true;
      return categoryMatch && instructorMatch;
    });
  }, [categoryFilter, instructorFilter]);

  const courseList = useMemo(() => {
    if (filteredCourses.length === 0) {
        return <p className="text-center text-secondary col-span-full">No courses found matching your criteria.</p>;
    }
    return filteredCourses.map(course => (
        <CourseCard 
          key={course.id} 
          course={course}
          isEnrolled={enrolledCourses.has(course.id)}
          onEnroll={handleEnroll}
          onView={handleSelectCourse}
        />
    ));
  }, [filteredCourses, enrolledCourses]);

  const handleResetFilters = () => {
    setCategoryFilter('');
    setInstructorFilter('');
  };

  if (!currentUser) {
    return <AuthView onLogin={handleLogin} />;
  }

  const renderContent = () => {
    if (certificateInfo) {
      return <CertificateView info={certificateInfo} onBack={handleBackToHome} />;
    }

    if (selectedCourse) {
      return (
        <CourseDetailView 
          course={selectedCourse} 
          onBack={handleBackToHome}
          progress={coursesProgress[selectedCourse.id] || {}}
          quizzesProgress={quizzesProgress[selectedCourse.id] || {}}
          onCompleteExercise={handleCompleteExercise}
          onCompleteQuiz={handleCompleteQuiz}
          onGenerateCertificate={handleGenerateCertificate}
          certificateGenerationCount={certificateGenerationCount[selectedCourse.id] || 0}
          certificateGenerationLimit={CERTIFICATE_GENERATION_LIMIT}
        />
      );
    }

    return (
      <main className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-3 tracking-tight">Your Gateway to Tech Mastery</h1>
        <p className="text-lg md:text-xl text-secondary mb-12 max-w-3xl mx-auto">Dive into our free, hands-on courses. Learn by doing, build real projects, and earn certificates to showcase your skills.</p>
        
        {/* Filter Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8 flex flex-col sm:flex-row gap-4 items-center text-left">
            <div className="w-full sm:w-1/3">
                <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select 
                    id="category-filter"
                    value={categoryFilter}
                    onChange={e => setCategoryFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="">All Categories</option>
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
            </div>
            <div className="w-full sm:w-1/3">
                <label htmlFor="instructor-filter" className="block text-sm font-medium text-gray-700 mb-1">Instructor</label>
                <select 
                    id="instructor-filter"
                    value={instructorFilter}
                    onChange={e => setInstructorFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="">All Instructors</option>
                    {instructors.map(inst => <option key={inst} value={inst}>{inst}</option>)}
                </select>
            </div>
            <div className="w-full sm:w-auto mt-2 sm:mt-0 sm:self-end">
                <button
                    onClick={handleResetFilters}
                    className="w-full sm:w-auto px-6 py-2 bg-secondary text-white font-semibold rounded-md hover:bg-gray-600 transition-colors"
                >
                    Reset
                </button>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseList}
        </div>
      </main>
    );
  };
  
  return (
    <div className="min-h-screen bg-light text-dark">
      <Header onHomeClick={handleBackToHome} currentUser={currentUser} onLogout={handleLogout} />
      {renderContent()}
       <footer className="text-center py-4 mt-8 bg-white border-t">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} TechLearn LMS. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
