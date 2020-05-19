import React, {Fragment, useState} from 'react';
import PaginaInicio from './components/PaginaInicio'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  //const [color, changeColor] = useState("#FE3C72");
  
  return (
      //<div  style={{background: color}} id='main'>
        <Router>
            <Switch>
              
              <Route exact path="/"  component={PaginaInicio} />
              
              <Route exact path="/login"  component={Login} />
              
              <Route exact path="/signup" component={SignUp} />
               
            
            </Switch>
           
        </Router>


      //</div>
  );
}

export default App;
