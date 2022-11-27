import React from 'react'
import './stylesheets/createGameScreen.css'
import { useSearchParams } from 'react-router-dom';
import CardTheme from '../components/cardTheme';
import HardImg from '../pictures/hardCoins.png';
import MediumImg from '../pictures/mediumCoins.png';
import EasyImg from '../pictures/1dollarcoin.png';
import {createSearchParams,Link, useNavigate} from "react-router-dom";


const CreateGameScreen = () => {
    const [searhparams] = useSearchParams();
    // console.log(searhparams.get("id"));

  return (
    <>
      <h1 id='header'>Choose Your Themes</h1>


      <div className='levels'>

      <CardTheme
          title={"Easy"}
          cardType= "card--primary"
          imgWidth = {"250"}
          marginT = {'-10pt'}
          marginLImg = {'10pt'}
          img = {EasyImg}
        ></CardTheme>

        <CardTheme
          title={"Medium"}
          cardType= "card--secondary"
          imgWidth = {"180"}
          marginT = {'10pt'}
          marginLImg = {'30pt'}
          img = {MediumImg}
        ></CardTheme>

        <CardTheme
          title={"Hard"}
          cardType= "card--backup"
          imgWidth = {"250"}
          marginT = {'10pt'}
          img = {HardImg}
        ></CardTheme>

      </div>
    
    </>
  );
}

export default CreateGameScreen;