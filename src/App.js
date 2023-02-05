import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useAuth } from './hooks/auth';
import NotFound from './pages/404';
import About from './pages/about';
import Home from './pages/home';
import Login from './pages/login';

export default function App() {
  const { isLoggedIn, isLoggedInSet } = useAuth();
  const navigate = useNavigate();
  // func
  const handleLogin = val => {
    isLoggedInSet(val)
    navigate('/')
  }

  return (
    <>
      {isLoggedIn ? (
        <Routes>
          <Route path='/about' element={<About />}></Route>
          <Route path='/not-found' element={<NotFound />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<Navigate to={'/not-found'} replace />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path='/login' element={<Login loginset={handleLogin} />}></Route>
          <Route path='*' element={<Navigate to={'/login'} replace />}></Route>
        </Routes>
      )
      }

    </>
  );
}
