import React,{useState} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import './App.css';
import Front from './components/front'
import SignIn from './components/register/signIn'
import SignUp from './components/register/signUp'
import Forgot from './components/register/forgot'
import Market from './components/market/market'
import Categories from './components/market/categories'
import Cards from './components/market/card'
import Cart from './components/cart'
import Location from './components/market/location';
import { StoreOtp,Order, Total, UserContext, Searcher } from './components/market/extras/userContext';
import Landing from'./components/desktop/landing'
import DesktopMarket from './components/desktop/Market/desktopMarket';
import Cart2 from './components/desktop/Market/sub/cart'
import Otp from './components/register/extra/otp';
import Note from './components/market/extras/note';
import NewPassword from './components/register/newPassword';
import DesktopNote from './components/desktop/Market/sub/desktopNote';
import SearchCategories from './components/market/extras/searchCategories';

function App() {



  const categories =<Categories />
  const cards=<Cards />
  const [otp,setOtp]=useState()
  const [value,setValue]=useState([])
  const [searcher, setSearcher] = useState()
  const [total,setTotal]=useState(Number('0'))
  const [order , setOrder]=useState({
    name:'',number:'',zone:'',address:'',list:[],notes:'',status:''
  })
  
  
  

  return(
    <Total.Provider value={{ total, setTotal }}>
    <Searcher.Provider value={{searcher,setSearcher}}>
    <StoreOtp.Provider value={{otp,setOtp}}>
    <UserContext.Provider value ={{value , setValue}}>
    <Order.Provider value={{order,setOrder}}>
      <Router>
        <div className='height'>
          <Switch>
            <Route exact path="/" >
              <Front />
              <Landing />
            </Route>
            <Route path='/signIn'>
                <SignIn  />
                <Landing  show='inline-block' />
            </Route>
            <Route path='/signUp'>
                <SignUp  />
            </Route>
            <Route path='/forgotPassword'>
              <Forgot />
            </Route>
            <Route path='/OTP'>
               <Otp />
            </Route>
            <Route path='/market'>
              <Market content={categories} />
              <DesktopMarket content={categories} content2={<Cart2 />} />
            </Route>
            <Route path='/searchCategory'>
              <Market content={<SearchCategories />} />
              <DesktopMarket content={<SearchCategories />} content2={<Cart2 />} />
            </Route>
            <Route path='/location'>
              <Location />
              <Landing show='none'/>
            </Route>
             <Route path='/items'>
               <Market content={cards} />
               <DesktopMarket content={cards} content2={<Cart2 />} />
             </Route>
             <Route path='/cart'>
              <Cart />
              <DesktopMarket content={cards} content2={<Cart2 />} />

             </Route>
              <Route path='/note'>
                <Note />
                <DesktopMarket content={cards} content2={<DesktopNote />} />

              </Route>
             <Route path='/password'>
                <NewPassword />
              </Route>
          </Switch>
        </div>
      </Router>
      </Order.Provider>
    </UserContext.Provider>
    </StoreOtp.Provider>
    </Searcher.Provider>
    </Total.Provider>


   
  )
 
}

export default App;
