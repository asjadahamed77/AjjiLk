import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Requests from './pages/Requests';
function App() {
  return (
    <div className='bg-lightColor min-h-screen'>
      <BrowserRouter>
      <ToastContainer />
      <Navbar />
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
  );
}

export default App;
