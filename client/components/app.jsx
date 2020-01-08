import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import AddGrade from './add-grade';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      averageGrade: null
    };
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
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

  addNewGrade(newGradeData) {
    fetch('api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGradeData)
    })
      .then(response => {
        return response.json();
      })
      .then(newGrade => {
        this.setState(state => ({
          grades: state.grades.concat(newGrade)
        }));
      });
  }

  deleteGrade(gradeToDeleteId) {
    let IndexOfObjectToDelete;
    for (const index in this.state.grades) {
      if (this.state.grades[index].id === gradeToDeleteId) {
        IndexOfObjectToDelete = index;
      }
    }
    fetch(`api/grades/${gradeToDeleteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      })
      .then(gradeToDeleteId => {
        this.setState(state => {
          state.grades.splice(IndexOfObjectToDelete, 1);
          return { grades: state.grades };
        });
      });
  }

  render() {
    return (
      <>
        <div className="d-flex container w-75 align-items-center p-4">
          <Header
            className="col-8"
            text="Student Grade Table"
            averageGrade={this.gradeAverage()}
          />
        </div>
        <div className="container w-75">
          <div className="row align-items-top">
            <div className="col-8">
              <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade}/>
            </div>
            <div className="col-4">
              <AddGrade appRender={this.render} fetchNewGrade={this.addNewGrade} grades={ this.state.grades } />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
