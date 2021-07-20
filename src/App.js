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
import { StoreOtp,Order, Total, UserContext } from './components/market/extras/userContext';
import Landing from'./components/desktop/landing'
import DesktopMarket from './components/desktop/Market/desktopMarket';
import Cart2 from './components/desktop/Market/sub/cart'
import Otp from './components/register/extra/otp';
import Note from './components/market/extras/note';
import NewPassword from './components/register/newPassword';

function App() {



  const categories =<Categories />
  const cards=<Cards />
  const [otp,setOtp]=useState()
  const [value,setValue]=useState([])
  const [total,setTotal]=useState(Number('0'))
  const [order , setOrder]=useState({
    name:'',number:'',zone:'',address:'',order:[],notes:'',status:''
  })
  
  
  

  return(
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
              <DesktopMarket content={categories} />
            </Route>
            <Route path='/location'>
              <Location />
              <Landing show='none' />
            </Route>
            <Total.Provider value={{total,setTotal}}>
             <Route path='/items'>
               <Market content={cards} />
               <DesktopMarket content={cards} content2={<Cart2 />} />
             </Route>
             <Route path='/cart'>
              <Cart />
             </Route>
              <Route path='/note'>
                <Note />
              </Route>
             <Route path='/password'>
                <NewPassword />
              </Route>
            </Total.Provider>
          </Switch>
        </div>
      </Router>
      </Order.Provider>
    </UserContext.Provider>
    </StoreOtp.Provider>
  
   
  )
  // const page = () => { setContent(<Page />) }
  // u did not, just a section, are u sure u are okay with this?oya wrap it na
  

  //   const [content , setContent]=useState(
  //       <Front page={page} />
  //   )
  // return (
    
  //   <div className="App">
  //     <Router>
  //       {content}
  //     </Router>
  //   </div>
  // );
  //none of this makes any sense man
  //how this thing works is u wrap ur entire app in a browser router then have all your pages in side te router, so u have everything covered
}

export default App;
