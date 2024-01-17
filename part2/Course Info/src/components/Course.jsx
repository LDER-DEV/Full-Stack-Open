
import React from 'react';

const Course = ({ course }) => {
    return (
      <div>
        {course.map((c) => (
          <div key={c.id}>
            <h2>{c.name}</h2>
            <ul>
              {c.parts.map((part) => (
                <li key={part.id}>{part.name}</li>
              ))}
            </ul>
            <h3> of {c.parts.reduce((a, b) => a + b.exercises, 0)} exercises</h3>
          </div>
        ))}
      </div>
    )
  }

  export default Course