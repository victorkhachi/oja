import React from 'react'
import './App.css';
import Body from './components/body'
import {BrowserRouter as Router,
 Switch, Route} from 'react-router-dom'
 import Categories from './components/categories'
import AddCategories from './components/addCategories';
import SignIn from './components/signIn';
function App() {
  
  

  return (
    
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
            <Route exact path='/addcategories'>
              <Body>
                <AddCategories />
              </Body>
            </Route>
            
         </div>

    </Switch>
    </Router>
    
  );
}

export default App;
