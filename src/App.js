/** Assets */
import './App.css';

/** Libs */
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from './hooks/auth';

/** Components */
import NotFound from './pages/404';
import About from './pages/about';
import FormPendaftaran from './pages/formPendaftaran';
import Home from './pages/home';
import Navbar from './components/navbar';
import Login from './pages/login';
import AboutDetail from './pages/about/about-detail';

export default function App() {
  const { isLoggedIn, isLoggedInSet } = useAuth();
  const navigate = useNavigate();
  // func
  const handleLogin = val => {
    isLoggedInSet(val)
    navigate('/')
  }

  return (
    <div>
      <Navbar />
      <div className='container mt-5'>
        {/* <Routes>
          <Route path='/pendaftaran' element={<FormPendaftaran />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/not-found' element={<NotFound />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<Navigate to={'/not-found'} replace />}></Route>
        </Routes> */}
        <>
          {isLoggedIn ? (
            <Routes>
              <Route path='/pendaftaran' element={<FormPendaftaran />}></Route>
              <Route path='/about/:id' element={<AboutDetail />}></Route>
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
      </div>
    </div>
  );
}
