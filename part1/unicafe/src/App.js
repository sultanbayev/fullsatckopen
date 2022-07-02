import { useState } from 'react'

const Heading = ({ text }) => {
  return (<h1>{text}</h1>);
}

const SingleStat = ({ name, count }) => {
  return (<>{name} {count}</>)
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
      <SingleStat name={"good"} count={good} /><br />
      <SingleStat name={"neutral"} count={neutral} /><br />
      <SingleStat name={"bad"} count={bad} /><br />
      <SingleStat name={"all"} count={all} /><br />
      <SingleStat name={"average"} count={average} /><br />
      <SingleStat name={"positive"} count={positive} /> %
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