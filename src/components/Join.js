import React, {Fragment, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faComment, faHeart, faTimes  } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/tinder-2.svg'
import '../css/styles.css'
import '../css/Join.css'
import clienteAxios from '../config/axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Join(){

  const [matches, setMatches] = useState([]);

  const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNWViYzlkYjc2OWNhN2EzNjU4NDc4NmVlIiwiZW1haWwiOiJsdWlzZGFyaXZlcm8uc0BnbWFpbC5jb20ifSwiaWF0IjoxNTkwMTE2NDI1LCJleHAiOjE1OTI3MDg0MjV9.-K2TlosBMZnc57biSYYrc_wuCQnRnTW5zyLb1zbx2NI';
  const userID = '5ebc9db769ca7a36584786ee';

  useEffect(() => {
    //console.log(localStorage.getItem('goo'));
    const headers = {
      headers: { Authorization: `Bearer ${userToken}` }
    };
    async function getMatches(){
      try {
        const respuesta = await clienteAxios.get('/api/v1/users/' + userID, headers);
        console.log(respuesta.data.matches);
        setMatches(respuesta.data.matches);
      } 
      catch (error) {
        console.log(error);
      }
    }
    getMatches();
  }, []);

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

      {matches.map((element, index) => 
        <Link to={`/chat?name=${element.user._id}&room=${element.chat}`}>
          <div className="chatContainer">
            <p className="chatText">{element.user.name}</p>
          </div>
        </Link>
      )}
    </Fragment>      
 );
}

 
export default Join;