import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('api/grades')
      .then(response => {
        return response.json();
      })
      .then(state => {
        this.setState({
          grades: state
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header text="Student Grade Table" />
          <GradeTable grades={this.state.grades}/>
        </div>
      </div>
    );
  }
}

export default App;
