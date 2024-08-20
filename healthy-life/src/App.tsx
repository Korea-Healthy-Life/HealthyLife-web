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
import OrderApp from './views/mypage/order/OrderApp';
import ReviewApp from './views/mypage/review/ReviewApp';
import WishApp from './views/mypage/wish/WishApp';
import CurrentProduct from './views/mypage/currentProducts/CurrentProduct';
import Reserves from './views/mypage/cupon,reserves,benefit/Reserves';
import Benefit from './views/mypage/cupon,reserves,benefit/Benefit';
import Userinformation from './views/mypage/userInformation/Userinformation';
import ReviewWrite from './views/mypage/review/ReviewWrite';
import FindId from './views/login/FindId';
import FindPassword from './views/login/FindPassword';
import ProductPage from './views/productpage/ProductPage';
import Review from './views/productpage/review/Review';
import QNA from './views/productpage/qna/QNA';
import All from './views/allproduct/all/All';
import AllReview from './views/allreview/AllReview';
import LoginNav from './views/login/LoginNav';
import SurveryListAllerge from './views/survey/SurveryListAllerge';
import SurveryListDiabetes from './views/survey/SurveryListDiabetes';
import SurveryListDietGoal from './views/survey/SurveryListDietGoal';
import NonMember from './views/nonMemberOrder/NonMember';
import Payment from './views/payment/Payment';
import BestItem from './views/best/bestItem';
import RecommandApp from './views/recommand/RecommandApp';
import Bmi from './views/bmi/Bmi';
import JoinApp from './views/join/JoinApp';
import CartAPP from './views/cart/CartAPP';
import MypageNav from './views/mypage/mypage-main/MypageNav';
import MypageMain from './views/mypage/mypage-main/MypageMain';
import MyPage from './views/mypage/MyPage';
import Cupon from './views/mypage/cupon,reserves,benefit/Cupon';

function App() {
  return (
    <>
    <Sidenavigation />
    <Header />
    <Navigation />
    <Routes>
    <Route path='' element={<Home />} /> 
    <Route path='/all' element={<All />}/>
    <Route path='/survey' element={<SurveyApp />} /> 
    <Route path='/survey/allerge' element={<SurveryListAllerge />} /> 
    <Route path='/survey/diabetes' element={<SurveryListDiabetes />} /> 
    <Route path='/survey/dietgoal' element={<SurveryListDietGoal />} /> 
    {/* <Route path='/bestitem' element={<BestItem />} />  */}
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

        <Route path='/mypage/' element={<MypageMain/>}/>
        <Route path='/mypage/orderApp' element={<OrderApp />}/> 
        <Route path='/mypage/myreview' element={<ReviewApp />}/>
        <Route path='/mypage/wishlist' element={<WishApp />}/>
        <Route path='/mypage/current' element={<CurrentProduct />}/>
        <Route path='/mypage/mileage' element={<Reserves />}/>
        <Route path='/mypage/coupon' element={<Cupon />}/>
        <Route path='/mypage/membership' element={<Benefit />}/>
        <Route path='/mypage/userinformation' element={<Userinformation />}/>
        <Route path='/mypage/review/write' element={<ReviewWrite />}/>
  
        <Route path='/login' element={<LoginNav/>}/>
        <Route path='/login/FindId' element={<FindId/>}/>
        <Route path='/login/FindPassword' element={<FindPassword/>}/>
        <Route path='/productdetail' element={<ProductPage/>}/>
        <Route path='/productdetail' element={<Review />}/>
        <Route path='/productdetail' element={<ReviewWrite />}/>
        <Route path='/productdetail' element={<QNA />}/>
        <Route path='/reviews' element={<AllReview />}/>
        <Route path='/payment' element={<Payment />}/>
        <Route path='/nonMember' element={<NonMember />}/>
        <Route path='/bestitem' element={<BestItem />}/>
        <Route path='/recommand' element={<RecommandApp />}/>
        <Route path='/calculator' element={<Bmi />}/>
        <Route path='/join' element={<JoinApp />}/>        
        <Route path='/cart' element={<CartAPP />}/>
      </Routes> 
    <Footer />
    </>
  );
}

export default App;
