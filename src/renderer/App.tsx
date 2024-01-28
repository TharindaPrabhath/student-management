import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import { Button } from '@/components/ui/button';
import { SignIn } from './pages/auth/sign-in';
import Student from './pages/dashboard/student';

function Hello() {
  return (
    <div>
      <p className="text-7xl font-black text-red-500">hhh</p>
      <Button>hello</Button>
      <Link to="/auth/sign-in">Sign in</Link>
      <Link to="/students">Student</Link>
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
      </Routes>
    </Router>
  );
}
