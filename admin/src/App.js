import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Requests from './pages/Requests';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
function App() {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem("token"):"");
  useEffect(()=>{
    localStorage.setItem("token",token)
  },[token])
  return (
    <div>
    {
      token === ''?(
        <Login setToken={setToken} />
      ): (
        <>
        <div className='bg-lightColor min-h-screen'>
      <BrowserRouter>
      <ToastContainer />
      <Navbar setToken={setToken} />
      <div className='flex'>
        <div className='w-[180px] '>
      <SideBar />
      </div>
      <div className='mx-10 my-10 mt-20 border border-secondaryColor p-4 min-h-screen flex-1 '>
      <Routes>
        <Route path='/request' element={<Requests />} />
      </Routes>
      </div>
      </div>
      </BrowserRouter>
    </div>
        </>
      )
    }
    </div>
  );
}

export default App;
