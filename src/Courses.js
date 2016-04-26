import React from 'react';

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  componentDidMount(){
    this.setState({
      courses: [{name: 'React', description: 'Its a course'}, {name: 'Javascript', description: 'Learn the basics'}]
    });
  }



}



export default Courses;
