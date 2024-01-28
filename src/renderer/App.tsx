import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Hello() {
  return (
    <div>
      <p className="text-7xl font-black text-red-500">hhh</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
