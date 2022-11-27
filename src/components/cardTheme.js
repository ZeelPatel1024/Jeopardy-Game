import React from 'react'
import './stylesheets/cardTheme.css'
import {createSearchParams,Link, useNavigate} from "react-router-dom";

const STYLES = [
    "card--primary",
    "card--secondary",
    "card--backup"
]



const CardTheme = ({

    title,
    img,
    cardType,
    imgWidth,
    marginT,
    marginLImg

}) => {
    const navigate = useNavigate();
    const checkStyle = STYLES.includes(cardType) ? cardType : STYLES[0];

    const changePage = (id) => {
        navigate({
            pathname: "/game",
            search: createSearchParams({
              id: title
            }).toString()
          });
    }

  return (
    <>

    <body>

        <div className = {`card ${checkStyle}`} onClick = {() => changePage()}>
            <img style={{marginLeft: marginLImg }} id='imga' width={imgWidth} src={img}></img>
            <h1 style={{ marginTop: marginT }} id ='head'>{title}</h1>
        </div> 

    </body>
        
    
    </>
  );
}

export default CardTheme;