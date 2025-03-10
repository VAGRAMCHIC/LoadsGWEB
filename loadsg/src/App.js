import './App.css';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './application/dashboard.jsx';
import TestPage from './application/testPage.jsx';
import LoginPage from './application/auth/loginPage.jsx';

function App() {
  return (
    <>
            <Routes>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/test" element={<TestPage />}></Route>
            </Routes>
    </>
    
  );
}

export default App;
