import React from 'react';

function ShowResults({recordAnswers,qList}) {

function calculatedAnswer () {
// start score  aka tally at 0 
let tally = 0 
// check array to see if the slected answer is the same as the correct answer
// if yes add 1 to tally 
recordAnswers.forEach(i=>{
  const correctAnswer= qList.find(j =>j.questionID == i[0]).correctAnswerID
  if(correctAnswer == i[1]){
    tally ++
  }
   console.log(correctAnswer,'correctAnswer');

})
console.log(tally,'tally');
// scalable and dynamic 
return `You scored ${tally} out of ${qList.length} correctly`

}
    return (
    <div className="App">
      {calculatedAnswer()}
    </div>
  );
}

export default ShowResults;
