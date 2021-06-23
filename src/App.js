import React,{useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
import { Total, UserContext } from './components/market/extras/userContext';

function App() {



  const categories =<Categories />
  const cards=<Cards />
  const [value,setValue]=useState([])
  const [total,setTotal]=useState(Number('0'))
  

  return(

    <UserContext.Provider value ={{value , setValue}}>
      <Router>
        <div style={{ height: '800px' }}>
          <Switch>
            <Route exact path="/" >
              <Front />
            </Route>
            <Route path='/signIn'>
              <SignIn />
            </Route>
            <Route path='/signUp'>
              <SignUp />
            </Route>
            <Route path='/forgotPassword'>
              <Forgot />
            </Route>
            <Route path='/market'>
              <Market content={categories} />
            </Route>
            <Route path='/location'>
              <Location />
            </Route>
            <Total.Provider value={{total,setTotal}}>
             <Route path='/items'>
               <Market content={cards} />
             </Route>
             <Route path='/cart'>
              <Cart />
             </Route>
            </Total.Provider>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
    
   
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
