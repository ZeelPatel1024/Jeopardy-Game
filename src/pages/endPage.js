import React from 'react'
import './stylesheets/endPage.css'
import {useSearchParams} from "react-router-dom";
import PageSwitchButtons from '../components/pageSwitchButtons';


const EndPage = () => {

    var [searhparams] = useSearchParams();
    // window.total = -1000;
  return (
    <>
        <div className='box'>
            <h1 id='description'>{searhparams.get("id")}</h1>  
            <PageSwitchButtons 
                    name={"Play Again"}
                    func={"home"}
            ></PageSwitchButtons>  
        </div>
    </>
  );
}

export default EndPage;