import './App.css';
import { Routes, Route} from 'react-router-dom';

import Dashboard from './application/pages/dashboard.jsx';
import TestPage from './application/pages/testPage.jsx';
import LoginPage from './application/auth/loginPage.jsx';
import LoadersPage from './application/pages/loaders.jsx';
import AccountPage from './application/pages/account.jsx';
import SettingsPage from './application/pages/settings.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/loaders" element={<LoadersPage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
      </Routes>
    </>
    
  );
}

export default App;
