import { useState } from 'react'

const Header = ({text}) =>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({onClick, text}) =>{
  return(
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const Statistics = ({good, neutral,bad, total}) =>{
  if(total === 0){
    return(
      <div>
      </div>
    )
  }
  
  return(
    <table>
        <tbody>
        <StatisticsLine value ={good} text ='good'total={total} />
        <StatisticsLine value ={neutral} text ='neutral'total={total} />
        <StatisticsLine value ={bad} text ='bad' total={total} />
        <Total count ={total}/>
        <Average good={good} bad={bad} total={total} />
        <Positive positive ={good} total={total}  />
      </tbody>
    </table>
  )
}
const StatisticsLine = ({text, value}) =>{
  return(
      <tr>
        <td>{text} {value}</td>
      </tr>
  )
  }

const Total =({count}) =>{
  return(
    <tr>
      <td>all {count}</td>
    </tr>
  )
}

const Average = ({good,bad,total}) =>{
  console.log((good+bad))
  return(
    <tr>
  <td>average {(good+bad) / 2}</td>
    </tr>
  )
}

const Positive = ({positive, total}) =>{
  return(
    <tr>
      <td>Positive {positive / total *100} %</td>
    </tr>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

const goodIncrease = () => {
  console.log(good)
  const updatedGood = good + 1
  setGood(updatedGood)
  setTotal(updatedGood + bad + neutral)
}
const neutralIncrease = () =>{
  console.log(neutral)
  const updatedNeutral = neutral + 1
  setNeutral(updatedNeutral)
  setTotal(updatedNeutral + good + bad)
}

const badIncrease = () =>{
  console.log(bad)
  const updatedBad = bad + 1
  setBad(updatedBad)
  setTotal(updatedBad + neutral + good)

}

  return (
    <div>
      <Header text ='give feedback'/>
      <Button onClick={goodIncrease} text='good'/>
      <Button onClick={neutralIncrease} text='neutral'/>
      <Button onClick={badIncrease} text='bad'/>
      <Header text = 'statistics' />
      <Statistics good ={good} neutral= {neutral} bad={bad} total={total} />
    </div>
  )
}

export default App

