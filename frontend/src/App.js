import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <div className='bg-lightColor mt-12'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
