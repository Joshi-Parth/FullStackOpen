import { useState } from 'react'


const Button = (props) => {
  return(
      <button onClick={props.handleClick}>
        {props.text}
      </button>
  )
}

const DisplayAnecdote = (props) => {
  return(
    <div>
      {props.anecdote}
      <p>has {props.votes} votes</p>
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [maxVotes, setMaxVotes] = useState(0)

  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)    
  }

  const handleVoteClick = () => {
    const newPointsArray = [...points]
    newPointsArray[selected] = newPointsArray[selected] + 1
    setPoints(newPointsArray)
    let maxIndex = 0
    for(let i = 1; i < newPointsArray.length; i++){
      if (newPointsArray[i] > newPointsArray[maxIndex]){
        maxIndex = i 
      }
    }
    setMaxVotes(maxIndex)

  }
  return (
    <div>

      <h1>Anecdote of the day</h1>
      <DisplayAnecdote anecdote={anecdotes[selected]} votes={points[selected]} />
      <Button text="vote" handleClick={handleVoteClick} />
      <Button text="next anecdote" handleClick={handleNextClick} />
      <h1>Anecdote with most votes</h1>
      <DisplayAnecdote anecdote={anecdotes[maxVotes]} votes={points[maxVotes]} />


    </div>
  )
}

export default App
