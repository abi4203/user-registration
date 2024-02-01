import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserRegister from './components/UserRegister';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<UserRegister />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
