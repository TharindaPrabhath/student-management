import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import { Button } from '@/components/ui/button';
import { SignIn } from './pages/auth/sign-in';
import Sidebar from '@/components/sidebar';
import Student from './pages/dashboard/student';
import Teacher from './pages/dashboard/teacher';
import Class from './pages/dashboard/classes';

function Hello() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p className="text-7xl font-black py-10 text-center">
        Student Registration System
      </p>
      <div className="flex flex-row">
        <Link to="/auth/sign-in">
          <Button
            className="w-full"
            style={{ backgroundColor: 'white', color: 'black' }}
          >
            Get Started
          </Button>
        </Link>
        <div className="px-10"></div>
        <Link to="/students">
          <Button
            className="w-full"
            style={{ backgroundColor: 'white', color: 'black' }}
          >
            Students
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/students" element={<Student />} />
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/classes" element={<Class />} />
      </Routes>
    </Router>
  );
}
