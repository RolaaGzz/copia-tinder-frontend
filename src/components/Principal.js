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

const Principal = () => {
    return (  
        <Fragment>
       <section>
           
        <header class="headbar">
            <div class="container d-flex justify-content-between mt-2">
                <div>
                    <button id="usericon"><FontAwesomeIcon icon={faUser} /></button>
                </div>
                
                <div>
                    <button className="icontinder btn btn-light shadow-sm"><img id="icono-tinder" src={logo} alt="icono tinder"/></button>
                </div>
                
                
                <div>
                
                <Link to={'/join'}><button id="usermessage"><FontAwesomeIcon icon={faComment} /></button></Link>
                
                </div>        
            </div>
            
        </header>
        </section>

        <section className='contenedor mt-3'>
        <div>
            

        </div>

        <section>
            <div className='container d-flex justify-content-between mt-3'>
                <button id='nolike'className='icono btn btn-light btn-lg'><FontAwesomeIcon icon={faTimes} /></button>
                <button id='like' className='icono btn btn-light btn-lg'><FontAwesomeIcon icon={faHeart} /></button>



            </div>


        </section>

            
        </section> 

        </Fragment>

    );
}
 
export default Principal

;