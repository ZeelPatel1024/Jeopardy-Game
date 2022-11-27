import React from 'react'
import './stylesheets/jeopardyButton.css'


const JeopardyButton = ({
    title,
    onClick,
    cat
}) => {

  const newId = title + cat;
    
  return (
    <>
      <button id={newId} onClick={onClick} className='jeopButton'>${title}</button>
    
    </>
  );
}

export default JeopardyButton;