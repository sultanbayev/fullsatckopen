const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  );
}

const Part = ({ name, count }) => {
  return (
    <p>
      {name} {count}
    </p>
  );
} 

const Content = ({ parts }) => {
  return (
    <div>
      { parts.map((part) => {
          return <Part key={part.name} name={part.name} count={part.exercises} />
        })
      }
    </div>
  );
}

const Total = ({ parts }) => {

  const total = parts.reduce((total, part) => total += part.exercises, 0);

  return (
    <p>Number of exercises { total }</p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App