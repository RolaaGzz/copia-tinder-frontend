import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 
  import { Nav, NavItem, NavLink } from 'reactstrap';
  import logo from '../images/tinder-1.svg'
  import '../css/styles.css'
  import googleimg from '../images/google-play-1.svg'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars} from '@fortawesome/free-solid-svg-icons' 


  const Inicio = () => {

    

    return (
        <Fragment>
       
            <section className="Inicio">
                <header className="encabezado">
                 <div className="container mt-3 d-flex flex-shrink-0">
              
                <div className="Imagen w-100">
                    
                        <img className="logo" src={logo} alt="logo del tinder"/>
                    
                 </div>
            
                 <div className="Boton hamburguesa">
            <button className="boton-menu"><FontAwesomeIcon icon={faBars} /></button>

            </div> 
                </div>
                    </header>

                    <div className="texto-encabezado mt-5 pt-5 text-center">
                        <div className="container">
                        <h1 className="Titulo">Haz match. Chatea. Sal con alguien</h1>
                    </div>
                        </div>
                    <div className="iniciarsesion text-center mt-5 pt-5">
                        <div className="container">
                        <p className='parrafo'>Al hacer clic en Iniciar Sesión, aceptas nuestros Términos. Conoce cómo procesamos tus datos en nuestra Política de privacidad y Políticas sobre cookies.</p>
                    
                    </div>
                    
                    </div>

                    <div className="iniciarsesionbutton text-center mt-3">
                        <div className="container">
                        <Link to={'/login'} className='enlace-cuenta'><button id='boton-login' className="Iniciar-Sesion btn btn btn-light"><b>Inicia Sesion con tu Cuenta</b></button> </Link>
                    </div>
                        </div>
                   
            


                    <div className="problemas text-center mt-3">
                        <div className="container">
                        <a id="textoproblema" href="">¿Problemas para iniciar sesión?</a>
                        </div>
                    </div>

                    <div className="playstore text-center mt-5">
                    <div className="container">
                        <button className="btn btn-light"><img id="playstore" src={googleimg} alt="Imagen de la Play Store"/></button>
                    </div>

                    </div>
                </section>
              
                    
                
        </Fragment>

      );
}
 
export default Inicio;
    