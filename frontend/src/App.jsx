import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

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
import SuccessAdoption from './components/SuccessAdoption/SuccessAdoption';
import ErrorPage from './components/ErrorPage/ErrorParge';
import About from './pages/About/About';
import Activities from './pages/Activities/Activities';
import AdoptionInfo from './components/AdoptionInfo/AdoptionInfo';

function App() {
  return (
    <LandProvider>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/adoption' element={<Adoption />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/activities' element={<Activities />} />
            <Route element={<PrivateRoutes />}>
              <Route exact path='/profile' element={<Profile />} />
              <Route
                exact
                path='/adoption-info/:id'
                element={<AdoptionInfo />}
              />
              <Route exact path='/adoptioncar' element={<ShoppingCar />} />
              <Route exact path='/success' element={<SuccessAdoption />} />
            </Route>
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </LandProvider>
  );
}

export default App;
