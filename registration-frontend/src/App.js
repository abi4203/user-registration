import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserRegister from './components/UserRegister';
import SearchPage from './components/Search';
import UserInfo from './components/UserInfo';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<UserRegister />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/user-info" element={<UserInfo />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
