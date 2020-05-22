import React, {Fragment, useState} from 'react';
import PaginaInicio from './components/PaginaInicio'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Principal from './components/Principal';
import AlertaState from './context/alertaState';
import AuthState from './context/autenticacion/authState';
import Join from './components/Join';
import Chat from './components/Chat';

function App() {
  //const [color, changeColor] = useState("#FE3C72");
  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
      //<div  style={{background: color}} id='main'>
       <Fragment>
       <AlertaState>
         <AuthState>
        <Router>
            <Switch>
              
              <Route exact path="/"  component={PaginaInicio} />
              
              <Route exact path="/login"  component={Login} />
              
              <Route exact path="/signup" component={SignUp} />

              <Route exact path="/inicio" component={Principal}/>
               
              <Route exact path='/join' component={Join}/>

              <Route exact path='/chat' component={Chat}/>
        
            
            </Switch>
           
        </Router>
        </AuthState>
        </AlertaState> 
        </Fragment>
      //</div>
  );
}

export default App;
