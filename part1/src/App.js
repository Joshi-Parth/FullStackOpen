import { useState } from 'react'


const Button = (props) => {
  return (
      <button onClick={props.handleClick}>
        {props.text} 
      </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text} </td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  )
}
const Statistics = (props) => {
  if(props.all === 0){
    return(
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.positive} />
    </table>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const calculateAverage = () => {
    const average = (((good * 1)+(bad * -1))/(good+bad+neutral))
    if(isNaN(average)) {
      return 0
    }
    return average
  }

  const calculatePositive = () => {
    const positive = (good / (good+bad+neutral))*100
    if(isNaN(positive)) {
      return `0%`
    }
    return `${positive} %`

  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good+1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral+1)}/>
      <Button text="bad" handleClick={() => setBad(bad+1)}/>
      <h1>statistics</h1>
      <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          all={good+bad+neutral}
          average={calculateAverage()}
          positive={calculatePositive()}
        />
      {/* <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad}/>
      <Statistics text="all" value={good+bad+neutral}/>
      <Statistics text="average" value={calculateAverage()}/>
      <Statistics text="positive" value={calculatePositive()} /> */}

    </div>
  )
}

export default App