import React, {useReducer, useEffect} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

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

            //Obtener el usuario
            usuarioAutenticado();
        } catch (error) {
            //console.log(error.response.data.msg);
            const alerta = {
                mensaje: error.response.data.message,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    // Retorna el usuario autenticado

    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        
        if (token) {
            tokenAuth(token);

        }

        try {
            const respuesta = await clienteAxios.get('/api/v1/users/login')
            //console.log(respuesta);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data
            });

        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }
    
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/v1/users/login')
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });

            usuarioAutenticado();
        } catch (error) {
            const alerta = {
                mensaje: error.response.data.message,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
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
                registrarUsuario,
                iniciarSesion
            }}
        
        >{props.children}

        </AuthContext.Provider>
    
    )

}
export default AuthState;