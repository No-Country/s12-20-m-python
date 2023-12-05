import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Adoption from './Pages/Adoption/Adoption';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/adoption' element={<Adoption />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
