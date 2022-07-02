import { useState } from 'react'

const Heading = ({ text }) => {
  return (<h1>{text}</h1>);
}

const SingleStat = ({ name, count }) => {
  return (<>{name} {count}</>)
}

const Stats = ({ good, neutral, bad }) => {
  return (
    <p>
      <SingleStat name={"good"} count={good} /><br />
      <SingleStat name={"neutral"} count={neutral} /><br />
      <SingleStat name={"bad"} count={bad} />
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
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App