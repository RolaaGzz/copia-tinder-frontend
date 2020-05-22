import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faComment, faHeart, faTimes  } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/tinder-2.svg'
import '../css/styles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Join = () => {
    return ( 
        <Fragment>

        <header class="headbar">
            <div class="container  mt-2">
                <div>
                <Link to={'/inicio'}> <button className="icontinder btn btn-light shadow-sm"><img id="icono-tinder" src={logo} alt="icono tinder"/></button></Link>
                </div>
                
                 
            </div>
            
        </header>     
          
      <h1>Chat</h1>
        
        </Fragment>      
     );
}
 
export default Join;