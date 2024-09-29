import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
function App() {
  return (
    <div className='bg-lightColor min-h-screen'>
      <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <SideBar />
      <div className='ml-[200px] '>
      <Routes>

      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
