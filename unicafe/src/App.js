import { useState } from 'react'


const Button = ({handleClick, text}) => 
  <div><button onClick={handleClick}>{text}</button></div> 

const Statistics = (props) => { 

  const [good, neutral, bad, total] = props.stats
  const average = (good - bad) / total 
  const positive = good / total * 100
  if (total === 0) {
    return (
      <div>Leave Feedback</div>
    )
  }

  return (
    <table>
      <tbody>
      <StatisticLine text='good' value={good}></StatisticLine>
      <StatisticLine text='neutral' value={neutral}></StatisticLine>
      <StatisticLine text='bad' value={bad}></StatisticLine>
      <StatisticLine text='all' value={total}></StatisticLine>
      <StatisticLine text='average' value={average}></StatisticLine>
      <StatisticLine text='positive' value={positive}></StatisticLine>
      </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return(
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const handleNetural = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h3><strong>Give Feedback</strong></h3>

      <Button handleClick={handleGood} text='good'></Button>
      <Button handleClick={handleNetural} text='neutral'></Button>
      <Button handleClick={handleBad} text='bad'></Button>

      <h3><strong>statistics</strong></h3>
      <Statistics stats={[good, neutral, bad, total]}></Statistics>
       
    </div>
  )
}

export default App