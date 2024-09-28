import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AllPhones from './pages/AllPhones';
import SellAPhone from './pages/SellAPhone';
import MyListings from './pages/MyListings';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <div className='bg-lightColor mt-12'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/phones' element={<AllPhones />} />
        <Route path='/sell-a-phone' element={<SellAPhone />} />
        <Route path='/my-listings' element={<MyListings />} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
