import React from 'react'
import './stylesheets/screenAns.css'
import SideProfileBar from './sideProfileBar';
window.totalMoney = 0;
// var totalMoney = 0;

const ScreenAns = ({
  money,
  cat,
  question,
  answer
}) => {

  const answerQuestion = () => {
    document.getElementById('showAnswer').style.visibility = "visible";
    document.getElementById('showQuestion').style.visibility = "hidden";
    document.getElementById('solveTheQuestion').style.visibility = "hidden";

  };

  const solveQuestion = () => {
    document.getElementById('showAnswer').style.visibility = "hidden";
    document.getElementById('showQuestion').style.visibility = "hidden";
    document.getElementById('solveTheQuestion').style.visibility = "visible";
  };

  const backToPage = () => {
    document.getElementById('showAnswer').style.visibility = "hidden";
    document.getElementById('showQuestion').style.visibility = "hidden";
    document.getElementById('solveTheQuestion').style.visibility = "hidden";
    document.getElementById('screen2').style.visibility = "hidden";
    document.getElementById('rightBox').style.visibility = "hidden";
    document.getElementById('screen2').style.zIndex = -1;
    document.getElementById('container2').style.zIndex = 1;
    document.getElementById('wrongBox').style.visibility = "hidden";
  };

  const showRightOrWrong = () => {
    document.getElementById('showAnswer').style.visibility = "hidden";
    document.getElementById('showQuestion').style.visibility = "hidden";
    document.getElementById('solveTheQuestion').style.visibility = "hidden";

    var answerQuest = document.getElementById('inputBox').value;
    if(answerQuest === answer){
      document.getElementById('rightBox').style.visibility = "visible";
      window.totalMoney = window.totalMoney + parseInt(money);
      console.log(window.totalMoney);


    }else{
      document.getElementById('wrongBox').style.visibility = "visible";
    }
    

  };
    
  return (
    <>
      
      <div className='pageContainer'>

        <h1 id='topic'> {cat} for ${money}</h1>

        <div id='topPageContainer'>

          <div className='showQuestion' id='showQuestion'>

            <h1 id='question'>{question}</h1>

            <div className='buttons'>
              <button onClick={answerQuestion} id='button1'>Answer</button>
              <button onClick={solveQuestion} id='button2'>Solve</button>
            </div> 

          </div>

          <div className='showAnswer' id='showAnswer' style={{visibility: 'hidden'}}>

            <h1 id='question'>{answer}</h1>
            <button onClick={backToPage} id='button1'>Back To Game</button>


          </div>

          <div id='solveTheQuestion' className='solveTheQuestion' style={{visibility: 'hidden'}}>
            <h1 id='question'>SOLVE QUESTION</h1>
            <input id='inputBox'></input><br/><br/>
            <button onClick={showRightOrWrong} id='button1'>Answer</button>
          </div>

          <div id='rightBox' className='rightBox' style={{visibility: 'hidden'}}>
            <h1 id='question'>CORRECT!</h1>
            <button onClick={backToPage} id='button1'>Back To Home</button>
          </div>

          <div id='wrongBox' className='wrongBox' style={{visibility: 'hidden'}}>
            <h1 id='question'>WRONG!</h1>
            <button onClick={backToPage} id='button1'>Back To Home</button>
          </div>
          
        </div>
       
      </div>
  

    </>
  );
}

export default ScreenAns;