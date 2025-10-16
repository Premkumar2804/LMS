
import React from 'react';
import { User } from '../types';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { UserIcon } from './icons/UserIcon';
import { LogoutIcon } from './icons/LogoutIcon';

interface HeaderProps {
    onHomeClick: () => void;
    currentUser: User | null;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, currentUser, onLogout }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={onHomeClick}
        >
          <BookOpenIcon className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-dark tracking-tight">TechLearn With Prem</h1>
        </div>
        <div className="flex items-center gap-4">
          {currentUser ? (
            <>
              <div className="flex items-center gap-2">
                <UserIcon className="h-6 w-6 text-secondary" />
                <span className="text-secondary hidden sm:block font-medium">{currentUser.email}</span>
              </div>
              <button 
                onClick={onLogout} 
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                aria-label="Logout"
              >
                <LogoutIcon className="h-6 w-6" />
                <span className="hidden sm:block font-semibold">Logout</span>
              </button>
            </>
          ) : (
             <span className="text-secondary hidden sm:block">Welcome, Guest!</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
