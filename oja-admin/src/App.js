import React, { useState } from 'react'
import './App.css';
import Body from './components/body'
import {BrowserRouter as Router,
 Switch, Route} from 'react-router-dom'
 import Categories from './components/categories/categories'
import AddCategories from './components/categories/addCategories';
import SignIn from './components/auth/signIn';
import Invoice from './components/invoice/invoice';
import OrderPage from './components/orders/orderPage';
import { Key, Order, Products } from './components/extras/contexts';
import Product from './components/product';
import AddProduct from './components/createItem/addProduct';



function App() {
  const [value,setValue]=useState({name:'',address:'',tel:'',list:[],note:''})
  const [cat, setCat]=useState()
  const [key,setKey]=useState()
  
  
  return (
    <Key.Provider value={{key,setKey}}>
    <Products.Provider value={{cat, setCat}}>
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
            <Route exact path='/products'>
              <Body>
                <Product />
              </Body>
            </Route>
            <Route exact path='/addProducts'>
              <Body>
                <AddProduct />
              </Body>
            </Route>
            
         </div>

    </Switch>
    </Router>
    </Order.Provider>
     </Products.Provider>
    </Key.Provider>
    
  );
}

export default App;
