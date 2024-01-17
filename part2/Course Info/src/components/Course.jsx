
import React from 'react';

const Course = ({ course }) => {
    return (
      <div>
        {course.map((c) => (
          <div key={c.id}>
            <h1>{c.name}</h1>
            <ul>
              {c.parts.map((part) => (
                <li key={part.id}>{part.name}</li>
              ))}
            </ul>
            <p>total of {c.parts.reduce((a, b) => a + b.exercises, 0)} exercises</p>
          </div>
        ))}
      </div>
    )
  }

  export default Course