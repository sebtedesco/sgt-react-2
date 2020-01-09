import React from 'react';
import AddGrade from './add-grade';

class StudentGrade extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const studentGrade = props.grade;
    // console.log(studentGrade)
    return (
      <tr className="m-2">
        <td>{studentGrade.name}</td>
        <td>{studentGrade.course}</td>
        <td>{studentGrade.grade}</td>
        <div className="container">
          <div className="row">
            <td className="col text-center">
              <button type="button" className="btn btn-outline-danger btn-sm ml-1 mr-1" onClick={() => { props.deleteGrade(props.grade.id, props.grade); }}>Delete</button>
              <button type="button" className="btn btn-outline-dark btn-sm ml-1 mr-1" onClick={() => { props.deleteGrade(props.grade.id, props.grade); }}>Delete</button>
            </td>
          </div>
        </div>
      </tr>
    );
  }
}

export default StudentGrade;
