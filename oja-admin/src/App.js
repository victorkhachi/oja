import React from 'react'
import './App.css';
import Body from './components/body'
import {BrowserRouter as Router,
 Switch, Route} from 'react-router-dom'
 import Categories from './components/categories'
import {Category} from './components/contexts/userContext'
function App() {
  const [cat, setCat] = React.useState([])

  return (
    <Category.Provider value={{cat, setCat}}>
    <Router>
    <Switch>
         <div className="App">
          <Route exact path='/'>
             <Body />
          </Route>
          <Route exact path='/categories'>
            <Body content={<Categories />}/>
          </Route>

         </div>

    </Switch>
    </Router>
    </Category.Provider>
  );
}

export default App;
