import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      averageGrade: null
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

  gradeAverage() {
    const studentObject = this.state.grades;
    const gradesArr = [];
    let sumOfGrades = 0;
    let gradeAverage = 0;
    for (const index in studentObject) {
      gradesArr.push(studentObject[index].grade);
      sumOfGrades += studentObject[index].grade;
      gradeAverage = sumOfGrades / gradesArr.length;
    }
    return gradeAverage.toFixed(0);
  }

  render() {
    this.gradeAverage();
    return (
      <>
        <div className="d-flex container w-75 align-items-center">
          <Header
            className="col-8"
            text="Student Grade Table"
            averageGrade={this.gradeAverage()}
          />
        </div>
        <div className="container w-75">
          <div className="row">
            <GradeTable grades={this.state.grades} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
