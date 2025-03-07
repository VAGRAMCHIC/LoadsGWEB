import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './application/dashboard.jsx';
import TestPage from './application/testPage.jsx';
import SideNavBar from './application/sideNavBar.jsx';
import NavBar from './application/navBar.jsx';
import LoginPage from './application/auth/loginPage.jsx';

function App() {
  return (
    <>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/test" element={<TestPage />}></Route>
            </Routes>
          </Router>
    </>
    
  );
}

export default App;
