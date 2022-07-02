import { useState } from 'react'

const Heading = ({ text }) => {
  return (<h1>{text}</h1>);
}

const StatisticLine = ({ text, value }) => {
  return (<>{text} {value}</>)
}

const Statistics = ({ good, neutral, bad }) => {

  if (good + neutral + bad === 0) {
    return (<p>No feedback given</p>);
  }

  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * (-1)) / all;
  const positive = good * 100 / all;

  return (
    <p>
      <StatisticLine text="good" value={good} /><br />
      <StatisticLine text="neutral" value={neutral} /><br />
      <StatisticLine text="bad" value={bad} /><br />
      <StatisticLine text="all" value={all} /><br />
      <StatisticLine text="average" value={average} /><br />
      <StatisticLine text="positive" value={positive} /> %
    </p>
  );
}

const Button = ({ text, onClick }) => {
  return (<button onClick={onClick}>{text}</button>);
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <Heading text={"give feedback"} />
      <div>
        <Button text={"good"} onClick={handleGoodClick} />
        <Button text={"neutral"} onClick={handleNeutralClick} />
        <Button text={"bad"} onClick={handleBadClick} />
      </div>
      <Heading text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App