// import React from 'react'
import './stylesheets/sideProfileBar.css'
import React, { useState, useRef, useEffect } from 'react'
import {createSearchParams,Link, useNavigate} from "react-router-dom";

const SideProfileBar = ({
    level
}) => {
    const navigate = useNavigate();

    const Ref = useRef(null);
  
    // The state for our timer
    const [timer, setTimer] = useState('00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
   
        return {
            total,minutes, seconds
        };
    }
  
  
    const startTimer = (e,id) => {
        let { total, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
            // window.total = total;
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }else{
            console.log("counter done");
            
            navigate({
                pathname: "/endGame",
                search: createSearchParams({
                  id: "Game Over! You Lost Your Money!"
                }).toString()
              });
              total = -1000;
        }
    }
  
  
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    

        if(level === "Easy"){
            setTimer('10:00');
        }else if(level === "Medium"){
            setTimer('5:00');
        }else if(level === "Hard"){
            setTimer('0:10');
        }
        
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        if(level === "Easy"){
            deadline.setSeconds(deadline.getSeconds() + 600);
        }else if(level === "Medium"){
            deadline.setSeconds(deadline.getSeconds() + 300);
        }else if(level === "Hard"){
            deadline.setSeconds(deadline.getSeconds() + 10);
        }
        // deadline.setSeconds(deadline.getSeconds() + 20);
        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only

    useEffect(() => {
        clearTimer(getDeadTime());
        // document.getElementById('money').value= "$" + window.totalMoney;
    }, []);
  
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        // startTimer(e);
        clearTimer(getDeadTime());
    }
  

  return (
    <>

        <div className='sectionProfile'>

            <h1 id='headLevel'>Level: {level}</h1>
            <div className='timerContainer'>
                <h2 id='timer'>{timer}</h2>
            </div>

            <div className='infoContainer'>
                <h1 id='totMoney'>Total Money</h1>
                <h1 id='money'>${window.totalMoney}</h1>
            </div>

        </div>
        
    </>
  );
}

export default SideProfileBar;