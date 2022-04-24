import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import LoginPage from './pages/Login/Login';
import IndividualHomepage from './pages/Individual/Home/IndividualHomepage';
import BusinessHomepage from './pages/Business/Home/BusinessHomepage';
import Dashboard from './pages/Individual/DashBoard/Dashboard';
import BondsDetails from './pages/Individual/BondsDetails/BondsDetails';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  return (
      
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<IndividualHomepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bond/:id" element={<BondsDetails />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
