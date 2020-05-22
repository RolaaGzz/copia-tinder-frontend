import React, {Fragment, useState} from 'react';
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
import SwipeCard from './SwipeCard' 
import Person from './Cards/Person'
import Lonely from './Cards/Lonely'
import data from '../data.json'
import '../css/stylesCard.css'
 
const Principal = () => {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  const removedPersonFromDataSrc = (peopleSource, userId) =>
    peopleSource.filter(user => user.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superLikedUsers];
    const newDislikedUsers = [...dislikedUsers];

    switch (action) {
      case 'ADD_TO_LIKED_USERS':
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);
          newLikedUsers.push(data[userId]);

          setLikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'ADD_TO_DISLIKED_USERS':
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(data[userId]);

          setDislikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'ADD_TO_SUPERLIKED_USERS':
        if (!people[activeUser].superLikedUsers.includes(userId)) {
          newPeople[activeUser].superLikedUsers.push(userId);
          newSuperLikedUsers.push(data[userId]);

          setSuperLikedUsers(newSuperLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      default:
        return people;
    }}
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
        
        <div className="app">
     
        {people[1] ? (
            <Person
            key={people[1].id}
            person={people[1]}
            modifySuperficialChoices={modifySuperficialChoices}
            likedUsers={likedUsers}
            />
        ) : (
            <Lonely
            activeUserImage={people[activeUser].image}
            likedUsers={likedUsers}
            superLikedUsers={superLikedUsers}
            />
        )}
        </div>

        </section> 

        </Fragment>

    );
        }

export default Principal;