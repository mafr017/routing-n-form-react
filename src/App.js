/** Assets */
import './App.css';

/** Libs */
import { Navigate, Route, Routes } from 'react-router-dom';

/** Components */
import NotFound from './pages/404';
import About from './pages/about';
import FormPendaftaran from './pages/formPendaftaran';
import Home from './pages/home';
import Navbar from './components/navbar';

export default function App() {

  return (
    <div>
      <Navbar />
      <div className='container mt-5'>
        <Routes>
          <Route path='/pendaftaran' element={<FormPendaftaran />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/not-found' element={<NotFound />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<Navigate to={'/not-found'} replace />}></Route>
        </Routes>
      </div>
    </div>
  );
}
