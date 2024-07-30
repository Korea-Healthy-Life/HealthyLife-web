import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/navigation/Navigation';

import Footer from './components/Footer';
import Sidenavigation from './components/Sidenavigation';
import Home from './views/home/Home';
import SurveyApp from './views/survey/SurveyApp';
import AllCheckinApp from './views/allproduct/j-checkin/AllCheckinApp';
import Luchbox from './views/allproduct/j-lunchbox/Luchbox';
import Snack from './views/allproduct/L-Snack/Snack';
import Drink from './views/allproduct/j-drink/Drink';
import Salad from './views/allproduct/L-salad/Salad';
import Vegan from './views/allproduct/L-Vegan/Vegan';
import LowerSugar from './views/allproduct/j-lowersugar/LowerSugar';
import SeaFood from './views/allproduct/L-SeaFood.tsx/SeaFood';
import Nuts from './views/allproduct/j-nuts/Nuts';
import MypageMain from './views/mypage/mypage-main/MypageMain';
import OrderApp from './views/mypage/order/OrderApp';
import ReviewApp from './views/mypage/review/ReviewApp';
import WishApp from './views/mypage/wish/WishApp';
import Userinformation from './views/mypage/userInformation/Userinformation';
import Reserves from './views/mypage/cupon,reserves,benefit/Reserves';
import Benefit from './views/mypage/cupon,reserves,benefit/Benefit';
import Cupon from './views/mypage/cupon,reserves,benefit/Cupon';
import CurrentProduct from './views/mypage/currentProducts/CurrentProduct';
function App() {
  return (
    <>
    <Sidenavigation />
    <Header />
    <Navigation /> 
    {/* <Home /> */}
    <Routes>
    <Route path='/' element={<Home />} /> 
    <Route path='/survey' element={<SurveyApp />} /> 
      {/* <span >닭가슴살/육류</span> */}
      <Route path="/checkin" element={<AllCheckinApp />} />
        {/* <span>도시락</span> */}
        <Route path="/lunchbox" element={<Luchbox />} />
        {/* <span>간식</span> */}
        <Route path="/snack" element={<Snack />} />
        {/* <span>음료</span> */}
        <Route path="/drink" element={<Drink />} />
        {/* <span>샐러드</span> */}
        <Route path="/salad" element={<Salad />} />
        {/* <span>비건</span> */}
        <Route path="/vegan" element={<Vegan />} />
        {/* <span>저당</span> */}
        <Route path="/lowersugar" element={<LowerSugar />} />
        {/* <span>해산물</span> */}
        <Route path="/sea" element={<SeaFood />} />
        {/* <span>견과류</span> */}
        <Route path="/nuts" element={<Nuts />} />
        <Route path='/mypage' element={<MypageMain/>}/> 
      <Route path='/mypage/order' element={<OrderApp />}/> 
      <Route path='/mypage/review' element={<ReviewApp />}/>
      <Route path='/mypage/wishlist' element={<WishApp />}/>
      <Route path='/mypage/current' element={<CurrentProduct />}/>
      <Route path='/mypage/mileage' element={<Reserves />}/>
      <Route path='/mypage/coupon' element={<Cupon />}/>
      <Route path='/mypage/membership' element={<Benefit />}/>
      <Route path='/mypage/informationupdate' element={<Userinformation />}/>
    </Routes> 
    <Footer />
    </>
  );
}

export default App;
