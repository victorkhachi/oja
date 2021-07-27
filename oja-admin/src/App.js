import React, { useState } from 'react'
import './App.css';
import Body from './components/body'
import {BrowserRouter as Router,
 Switch, Route} from 'react-router-dom'
 import Categories from './components/categories'
import AddCategories from './components/addCategories';
import SignIn from './components/signIn';
import Invoice from './components/invoice';
import OrderPage from './components/orderPage';
import { Order } from './components/extras/contexts';


function App() {
  const [value,setValue]=useState({name:'',address:'',tel:'',items:[],notes:''})
  

  return (
    <Order.Provider value={{value, setValue}}>
    <Router>
    <Switch>
         <div className="App">
           <Route exact path='/'>
             <SignIn />
            </Route>
          <Route exact path='/dashboard'>
            
            <Body>
                <Categories />
            </Body>
          </Route>
          <Route exact path='/invoice'>

            <Body>
               <Invoice />
            </Body>
          </Route>
          <Route exact path='/orders'>
            <Body>
              <OrderPage />
            </Body>
          </Route>
            <Route exact path='/addcategories'>
              <Body>
                <AddCategories />
              </Body>
            </Route>
            
         </div>

    </Switch>
    </Router>
    </Order.Provider>
    
  );
}

export default App;
