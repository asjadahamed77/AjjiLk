import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
