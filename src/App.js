import React from 'react';
import Courses from './Courses';

class App extends React.Component {
    render() {
      let courses = this.state.courses.map(function(course) {
        return <li key={course.id}><h1>{course.name}</h1><p>{course.description}</p>
      </li>;
        });

        return (
          <ul>
            <Courses />
          </ul>
        )
    }
}

export default App;
