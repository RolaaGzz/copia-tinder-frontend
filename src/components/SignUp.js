import React, {useState, Fragment} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/TinderLogo.svg'
const SignUp = () => {

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        email: '',
        birthday: '',
        password: '',
        confirmar: ''
    })

    //extraer de usuario
    const {nombre,email, birthday, password, confirmar} = usuario;

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

    // Password minimo de 6 caracteres

    // Los 2 password son iguales

    //Pasarlo a funcion
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
            <div className='container'>
            <h1 className='tituloform text-center'>Crear una Cuenta</h1>

            <form
                onSubmit={onSubmit}
            >
                <div className='campo-form'>
                    <label htmlFor='nombre'>Nombre</label>
                    <input
                        className='form-control'
                        type='text'
                        id='nombre'
                        name='nombre'
                        placeholder='Tu Nombre'
                        value={nombre}
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
                    <label for="inputGenero">Genero</label>
                    <select id="inputGenero" class="form-control">
                        <option selected>Choose...</option>
                        <option value='Hombre'>Hombre</option>
                        <option value='Mujer'>Mujer</option>
                    </select>
                    </div>

                    <div className='campo-form'>
                    <label htmlFor='birthday'>Fecha de nacimiento</label>
                    <input
                        className='form-control'
                        type='date'
                        id='birthday'
                        name='birthday'
                        value={birthday}
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
    
