import React from 'react'
import './stylesheets/pageSwitchButtons.css'
import {createSearchParams,Link, useNavigate} from "react-router-dom";

const PageSwitchButtons = ({

    name,
    func

}) => {
    const navigate = useNavigate();

    const handleClick = (id) => {

      if(func === "game"){
        navigate("/createGame");
      }else if(func === "hTP"){
        navigate('/howToPlay');
      }else if(func === "home"){
        navigate('/');

      }

    };

  return (
    <>

        <button onClick={handleClick} id='createGame'>{name}</button>

    </>
  );
}

export default PageSwitchButtons;