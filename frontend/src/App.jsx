import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Adoption from './pages/Adoption/Adoption';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import ShoppingCar from './components/ShoppingCar/ShoppingCar';
import { UserProvider } from './context/UserContext';
import { LandProvider } from './context/LandContext';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';

function App() {
  return (
    <LandProvider>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/adoption' element={<Adoption />} />
            <Route element={<PrivateRoutes />}>
              <Route exact path='/profile' element={<Profile />} />
            </Route>
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/shoppingcar' element={<ShoppingCar />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </LandProvider>
  );
}

export default App;
