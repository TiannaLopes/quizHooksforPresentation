import React from 'react';
import './Answer.css' ;

// pass in props 
const Answer = ({answers,recordAnswers,currentQuestion,handleRecordAnswer}) => {
  
  function handleSelectedAnswer (id) {
    let className=`answer`
    // if a anser button has been clicked it is selected and this records which answer it based on the number id value 
    const isAnswerSelected =recordAnswers.find((i)=>{
      return i[0] ==currentQuestion
    })
    // this will change the colour of the slected answer by assigning class Name that is responible for the CSS color property 
    if(!isAnswerSelected) {
     className='answer'
    }
    else if (isAnswerSelected[1] === id) {
      className=`answer-selected`
    }
    else {
      className='answer'
    }
  return className 
  }
    return (
        <div>
       <ul >
      {answers.map((item) =>
        <li key={item.id} 
        className={handleSelectedAnswer(item.id)} 
        onClick={()=>handleRecordAnswer(item.id)} > {item.answer} </li> ) }
      </ul>      
        </div>
    );
};

export default Answer;