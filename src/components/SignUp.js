import React, {useState, Fragment, useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/TinderLogo.svg';
import AlertaContext from '../context/alertaContext';
import AuthContext from '../context/autenticacion/authContext';

const SignUp = () => {

    //Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;


    const authContext = useContext(AuthContext);
    const { registrarUsuario } = authContext;

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        name:'',
        email: '',
        gender: '',
        birth_date: '',
        password: '',
        confirmar: ''
    })

    //extraer de usuario
    const {name,email,gender, birth_date, password, confirmar} = usuario;

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
    if(name.trim() === '' || email.trim() === '' || birth_date.trim() === '' || 
    gender.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        return;
    }
    // Password minimo de 6 caracteres
    if(password.length < 6) {
        mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error')
        return;
    }
    // Los 2 password son iguales
    if(password !== confirmar) {
        mostrarAlerta('Los passwords no coinciden', 'alerta-error')
        return;
    }
    //Pasarlo a funcion
    registrarUsuario({
        name,
        email,
        gender,
        birth_date,
        password
    });
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

        <div className='form-group SignUp'>
            {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
            <div className='container'>
            <h1 id='titulosignup' className='text-center'>Crear una Cuenta</h1>

            <form
                onSubmit={onSubmit}
            >
                <div className='campo-form'>
                    <label htmlFor='name'>Nombre</label>
                    <input
                        className='form-control'
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Tu Nombre'
                        value={name}
                        onChange={onChange}
                    
                    />
                 </div>

                <div className='campo-form mt-2'>
                    <label htmlFor='email'>Email</label>
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

                 
                 <div class="form-group mt-2">
                    <label for="gender">Genero</label>
                    <select id="gender" class="form-control" name='gender' value={gender} onChange={onChange}>
                        <option selected></option>
                        <option value='Hombre'>Hombre</option>
                        <option value='Mujer'>Mujer</option>
                    </select>
                    </div>

                    <div className='campo-form'>
                    <label htmlFor='birth_date'>Fecha de nacimiento</label>
                    <input
                        className='form-control'
                        type='date'
                        id='birth_date'
                        name='birth_date'
                        value={birth_date}
                        onChange={onChange}
                    
                    />
                 </div>

                    
                    <div className='campo-form mt-2'>
                    <label htmlFor='password'>Password</label>
                    <input
                        className='form-control'    
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={onChange}
                    
                    />
                 </div>

                 <div className='campo-form mt-2'>
                    <label htmlFor='confirmar'>Confirmar Password</label>
                    <input
                        className='form-control'
                        type='password'
                        id='confirmar'
                        name='confirmar'
                        placeholder='Repite tu Password'
                        value={confirmar}
                        onChange={onChange}
                    
                    />
                 </div>

                <div className='campo-form mt-3'>
                    <input type='submit' className='btn btn-primary btn-block' value='Crear Cuenta'  />
                </div>

            </form>
                <div className='text-center mt-5'>
              <Link to={'/login'} className='enlace-cuenta'>
                    Volver a Iniciar Sesion
              </Link>
              </div>
            </div>
        </div>
        </Fragment>
     );
}
 
export default SignUp;
    
