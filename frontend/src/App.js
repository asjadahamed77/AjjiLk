import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AllPhones from './pages/AllPhones';
import SellAPhone from './pages/SellAPhone';
import MyListings from './pages/MyListings';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';

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
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/profile' element={<Profile />} />
      
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
