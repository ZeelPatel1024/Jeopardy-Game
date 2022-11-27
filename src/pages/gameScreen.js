import React, { useState, useEffect } from 'react'
import './stylesheets/gameScreen.css'
import JeopardyButton from '../components/jeopardyButton';
import data from './buttonData.json';
import ScreenAns from '../components/screenAns';
import questionData from './questionData.json';
import SideProfileBar from '../components/sideProfileBar';
import {useSearchParams} from "react-router-dom";

var mon = "";
var catego = "";
var questionAsked = "";
var questionAnswer  = "";
var [searhparams] = "";

const GameScreen = () => {
  [searhparams] = useSearchParams();

  const [contacts] = useState(data);
  const [questions] = useState(questionData);

  const [isVisible, setIsVisible] = useState(true);

  const triggerEvent = (title,category) => {

    // alert("ih " + title + " " + category);
    document.getElementById('container2').style.zIndex = -1;
    document.getElementById('screen2').style.visibility = "visible";

    document.getElementById('showAnswer').style.visibility = "hidden";
    document.getElementById('showQuestion').style.visibility = "visible";
    document.getElementById('solveTheQuestion').style.visibility = "hidden";

    questions.map((quest) => {
      // console.log(quest.money + " " +  title)
      if(quest.money === title && quest.category === category){

        questionAsked = quest.description;
        questionAnswer = quest.answer;
      }
    });

    const newId = title+category;

    // console.log(newId);
    
    document.getElementById(newId).style.visibility = "hidden";

  
    mon = title;
    catego = category;

    setIsVisible(current => !current);

  };


  return (
    <>
      
    <body className='sectionBody'>

      <div className='sideBar'>
        <SideProfileBar
          level={searhparams.get("id")}
        ></SideProfileBar>
      </div>

        <div className='container' id = 'container2'>

        <table>
          <thead>
            <tr>
                <th id='catTitle'>Category 1</th>
                <th id='catTitle'>Category 2</th>
                <th id='catTitle'>Category 3</th>
                <th id='catTitle'>Category 4</th>
                <th id='catTitle'>Category 5</th>
            </tr>
          </thead>
          <tbody>

            {contacts.map((contact) => (
            
              <tr>
                  <td>
                    <JeopardyButton
                      title = {contact.title}
                      cat = {"Category 1"}
                      onClick = {() => triggerEvent(contact.title,"Category 1")}
                    ></JeopardyButton>
                  </td>
                  <td>
                    <JeopardyButton
                      title = {contact.title}
                      cat = {"Category 2"}
                      onClick = {() => triggerEvent(contact.title,"Category 2")}
                
                    ></JeopardyButton>
                  </td>
                  <td>
                    <JeopardyButton
                      title = {contact.title}
                      cat = {"Category 3"}
                      onClick = {() => triggerEvent(contact.title,"Category 3")}
                    
                    ></JeopardyButton>
                  </td>
                  <td>
                    <JeopardyButton
                      title = {contact.title}
                      cat = {"Category 4"}
                      onClick = {() => triggerEvent(contact.title,"Category 4")}
                    ></JeopardyButton>
                  </td>
                  <td>
                    <JeopardyButton
                      title = {contact.title}
                      cat = {"Category 5"}
                      onClick = {() => triggerEvent(contact.title,"Category 5")}
                    ></JeopardyButton>
                  </td>
              </tr>

            ))}

          
          </tbody>
        </table>

      </div>

      <div className='screen' id='screen2'>

        <ScreenAns
          money = {mon}
          cat = {catego}
          question = {questionAsked}
          answer = {questionAnswer}
        ></ScreenAns>
      
      </div>

    

    </body>
    </>
  );
}

export default GameScreen;