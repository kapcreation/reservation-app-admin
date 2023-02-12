import './App.scss';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import List from './pages/List/List'
import Single from './pages/Single/Single'
import New from './pages/New/New'
import { useColorMode } from './contexts/ColorModeContext';
import { useEffect, useRef } from 'react';
import { useAuth } from './contexts/AuthContext';
import axios from 'axios';

function App() {  
  const appRef = useRef(null)
  const { colorModeRef } = useColorMode()
  const { user } = useAuth()

  const ProtectedRoute = () => {
    if (!user) return <Navigate to="/login" />

    return <Outlet />
  }
  
  return (
    <div ref={(el)=>{ appRef.current = el; colorModeRef.current = el }} className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<List context="user" />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New context="user" />} />
            </Route>
            <Route path="hotels">
              <Route index element={<List context="hotel" />} />
              <Route path=":hotelId" element={<Single />} />
              <Route path="new" element={<New context="hotel" />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
