import React, {useState, Fragment, useContext, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import logo from '../images/TinderLogo.svg'
  import AlertaContext from '../context/alertaContext';
  import AuthContext from '../context/autenticacion/authContext';

const Login = (props) => {
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;


    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

    useEffect(() => {
        if(autenticado) {
            props.history.push('/inicio');
        }

        if(mensaje){
            mostrarAlerta(mensaje.message, mensaje.categoria);
        }
    }, [mensaje, autenticado, props.history]);

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    //extraer de usuario
    const {email, password} = usuario;

const onChange = e => {
    guardarUsuario({
        ...usuario,
        [e.target.name] : e.target.value
    })
} 

//Cuando el usuario quiere iniciar sesion
const onSubmit = e => {
    e.preventDefault();

    //Validar que no haya campos vacios
    if(email.trim() === '' || password.trim() === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
    }
    //Pasarlo a funcion
    iniciarSesion({email, password});
}
    return ( 
        <Fragment>
         <header className="encabezado text-center">
                 <div className="container mt-3 ">
              
                <div className="Imagen w-100">
                   
                        <img className="logo" src={logo} alt="logo del tinder"/>
                  
                 </div> 
                 </div>
            </header>

        <div className='form-group Login '>
            {alerta ? (<div className={`alerta text-center ${alerta.categoria}`}> {alerta.msg} </div>) : null }
            <div className='container'>
            <h1 className='tituloform text-center'>Iniciar Sesion</h1>

            <form
                onSubmit={onSubmit}
            >
                <div className='campo-form mt-4'>
                    <label htmlFor='email' className='etiquetas'>Email:</label>
                    <input
                        className='form-control'
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Tu email'
                        value={email}
                        onChange={onChange}
                    
                    />
                 </div>

                 <div className='campo-form mt-3'>
                    <label htmlFor='password' className='etiquetas'>Password:</label>
                    <input
                        className='form-control'
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Tu password'
                        value={password}
                        onChange={onChange}
                    
                    />
                 </div>

                <div className='campo-form mt-3'>
                    <input type='submit' className='btn btn-primary btn-block' value='Iniciar Sesion'  />
                </div>

            </form>

              <div className='text-center mt-5'> 
              <Link to={'/signup'} className='enlace-cuenta'>
                    Obtener Cuenta
              </Link>
              </div> 
            </div>
        </div>
        </Fragment>
     );
}
 
export default Login;