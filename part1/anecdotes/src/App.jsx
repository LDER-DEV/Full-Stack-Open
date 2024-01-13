import { useState } from 'react'
const Button = ({onClick, text})=>{
  return(
    <div>
      <button onClick ={onClick}>{text}</button>
    </div>
  )
}
const Quote = ({anecdote}) =>{
  return(
    <div>
      <p>{anecdote}</p>
    </div>
  )
}

const Votes =({votes}) =>{
  return(
    <div>
      <p>this quote has {votes} votes</p>
    </div>
  )
}

const AnecdoteOTD  = ({votes,anecdote}) =>{
  const mostVotes = votes.indexOf(Math.max(...votes));
  console.log(mostVotes,'has the most votes')
  return(
    <div>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdote[mostVotes]}</p>
      <p>has {votes[mostVotes]} votes</p>
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
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const voteArray = Array(anecdotes.length).fill(0)
   
  const addVote = () =>{
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }

  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(voteArray)


  const randomize = () =>{
    const currentAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(currentAnecdote)
    console.log(selected,"the selected anecdote is")
    
  }


  return (
    <div>
      <Quote anecdote = {anecdotes[selected]} />
      <Button onClick={randomize} text='next anecdote'/>
      <Votes votes = {votes[selected]}/>
      <Button onClick={addVote} text = 'Vote' />
      <AnecdoteOTD votes={votes} anecdote ={anecdotes}/>

    </div>
  )
}

export default App