
import './App.css';
import HomePage from './pages/home/HomePage';
import AdminPage from './pages/admin/Admin';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"




function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/admin' element={<AdminPage/>} />
        </Routes>
    </BrowserRouter>





  );
}

export default App;
