
const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) =>{
  console.log(props,'testing 123')
  return(
    <div>
    <Part parts={props.parts[0].name} exercise={props.parts[0].exercises} />
    <Part parts={props.parts[1].name} exercise={props.parts[1].exercises} />
    <Part parts={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  )
}
const Total = (props) =>{
  return(
    <div>
    <p>Number of exercises {props.total}</p>
    </div>
  )
}
const Part = (props) =>{
  console.log(props)
  return(
  <div>
    <p>{props.parts} {props.exercise}</p>
  </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [
      {  name : 'Fundamentals of React',
      exercises : 10},

     { name: 'Using props to pass data',
    exercises : 7},
    {name : 'State of a component',
    exercises: 14}
    ]
  }
  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

export default App