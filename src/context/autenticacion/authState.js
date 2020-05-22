import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clienteAxios from '../../config/axios';

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Las funciones
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/v1/users/signup', datos);
            console.log(respuesta);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })

        } catch (error) {
            console.log(error);

            dispatch({
                type: REGISTRO_ERROR
            })
        }
    }
    
    
    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                state: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario
            }}
        
        >{props.children}

        </AuthContext.Provider>
    
    )

}
export default AuthState;