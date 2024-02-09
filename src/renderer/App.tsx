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
    <div className="flex">
      <div className="leftside w-3/4">
        <div className="bg"></div>
      </div>

      <div className="rightside w-1/4 p-10 flex flex-col justify-center">
        <h1 className="text-6xl py-10 text-center text-sky-800 font-bold">
          Student Registration System
        </h1>

        <Link to="/auth/sign-in">
          <Button className="w-full mb-5 bg-sky-600">Get Started</Button>
        </Link>

        <Link to="/students">
          <Button className="w-full bg-sky-600">Students</Button>
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
