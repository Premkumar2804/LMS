
import React, { useState } from 'react';
import { User } from '../types';
import { BookOpenIcon } from './icons/BookOpenIcon';

interface AuthViewProps {
    onLogin: (user: User) => void;
}

const USERS_STORAGE_KEY = 'techlearn_users';

const AuthView: React.FC<AuthViewProps> = ({ onLogin }) => {
    const [isLoginView, setIsLoginView] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const savedUsersRaw = localStorage.getItem(USERS_STORAGE_KEY);
            const users: User[] = savedUsersRaw ? JSON.parse(savedUsersRaw) : [];
            const userExists = users.some(user => user.email === email);
            
            if (isLoginView) {
                // Handle Login
                if (userExists) {
                    onLogin({ email });
                } else {
                    setError('No account found with this email. Please register first.');
                }
            } else {
                // Handle Register
                if (userExists) {
                    setError('An account with this email already exists. Please log in.');
                } else {
                    const newUser = { email };
                    const updatedUsers = [...users, newUser];
                    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
                    onLogin(newUser);
                }
            }
        } catch (err) {
            console.error("Auth error:", err);
            setError("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-light flex flex-col justify-center items-center p-4">
            <div className="max-w-md w-full mx-auto">
                <div className="flex justify-center items-center gap-3 mb-6">
                    <BookOpenIcon className="h-10 w-10 text-primary" />
                    <h1 className="text-4xl font-bold text-dark tracking-tight">TechLearn LMS</h1>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold text-center text-dark mb-1">{isLoginView ? 'Welcome Back!' : 'Create Your Account'}</h2>
                    <p className="text-center text-secondary mb-6">{isLoginView ? 'Log in to continue your learning journey.' : 'Sign up to start learning for free.'}</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && <p className="text-red-500 text-sm text-center bg-red-100 p-2 rounded-md">{error}</p>}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password"  className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete={isLoginView ? "current-password" : "new-password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                                placeholder="••••••••"
                            />
                        </div>
                        
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                            >
                                {isLoginView ? 'Log In' : 'Register'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        {isLoginView ? "Don't have an account?" : "Already have an account?"}
                        <button onClick={() => { setIsLoginView(!isLoginView); setError(''); }} className="font-medium text-primary hover:text-primary-dark ml-1">
                            {isLoginView ? 'Register' : 'Log in'}
                        </button>
                    </p>
                </div>
                 <footer className="text-center py-4 mt-8">
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} TechLearn With Prem. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default AuthView;
