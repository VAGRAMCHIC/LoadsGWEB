import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import Dashboard from './application/dashboard.jsx';
import TestPage from './application/testPage.jsx';
import SideNavBar from './application/sideNavBar.jsx';

function App() {
  return (
    <>
          <Router>
            <SideNavBar></SideNavBar>
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/test" element={<TestPage />}></Route>
            </Routes>
          </Router>
    </>
    
  );
}

export default App;
