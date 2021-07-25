import './App.css';
import questionMenu from './api/multipleChoice.json';
import React , {useState} from 'react';
import Answer from './components/Answer/Answer';
import ShowResults from './components/ShowResults';
import Button from '@material-ui/core/Button';

//main app component 
function App() {
  // use State ( see slideshow)
const [currentQuestion, setCurrentQuestion] =useState(1)
const [recordAnswers, setRecordAnswers] =useState([])
const [qList, setQList] = useState(questionMenu.options)
const [showResults, setShowResults] = useState(false)
//check record answers 
console.log(recordAnswers,'recordAnswers');
//declare current question Details with the id equalling the current question
const cqDetails=qList.find(i=>i.questionID===currentQuestion)
//show the next question and answer options
function handleNext () {
  // if all the questions are done(current question is the length of all questions) show the results
  if(currentQuestion === qList.length){
  return setShowResults(true)
  }
  // if not not the last length show the next question and answer options
  setCurrentQuestion(currentQuestion + 1)
}
// this function is to save the selected answer as state on a buttonclick 
function handleRecordAnswer (chosenAnswerId) {
  //declare copy current answers to an array (spread operator) from record answers (state which starts empty)
let copyCurrentAnswers = [...recordAnswers]
//array.find gets the firt element in the array that has an index equalling the current question 
//.find returns a value of the array element 
const doesEntryExist = copyCurrentAnswers.find(i=>i[0]==currentQuestion)
console.log(doesEntryExist,'doesEntryExist');
// if it does not exist in the then it adds the current question and response to the array
if(!doesEntryExist) {
  copyCurrentAnswers.push([currentQuestion,chosenAnswerId])
  return setRecordAnswers(copyCurrentAnswers) ;
  
}
// sets the answers that were recorded/ submitted 
let extractOtherValues = copyCurrentAnswers
.filter(j=>j[0] !==currentQuestion)
extractOtherValues.push([currentQuestion,chosenAnswerId])
console.log(extractOtherValues,'extractOtherValues');
setRecordAnswers(extractOtherValues)
}

  return (
    <div className="App">
     <div className="topDiv" > Welcome 
    
     &nbsp;&nbsp;
      <input className="QuizTakerName" type="text" placeholder="Insert Quiz Taker Name"/>  
     </div>
   {/* conditional rendering */}
     {!showResults && 
     <div>
     <h3>{`${currentQuestion} of ${qList.length}`}</h3>
     <h3>{cqDetails.question}</h3>
     <h4>{cqDetails.subQuestion}</h4>
      <Answer
      answers={cqDetails.answers}
      handleRecordAnswer={handleRecordAnswer}
      currentQuestion={currentQuestion}
      recordAnswers={recordAnswers}
      />
      {/* cant reclick a button if the current position is the end of the question length vis versa */}
      <Button disable={currentQuestion === qList.length} onClick={()=>setCurrentQuestion(currentQuestion-1)}>Previous</Button>
      <Button disable={currentQuestion === qList.length} onClick={()=>handleNext()}>Next</Button>
      </div>
     }
     {/* conditional render show results if sohwresults is true. Do whatever is on the right of the && if the left is true */}
      {showResults && <ShowResults
      recordAnswers={recordAnswers}
      qList={qList}
      />}
    </div>
  );
}

export default App;
