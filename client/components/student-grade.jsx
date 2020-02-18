import React from 'react';
import AddGrade from './add-grade';
export default class StudentGrade extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const studentGrade = this.props.grade;
    // console.log(studentGrade)
    return (
      <tr className="m-2">
        <td>{studentGrade.name}</td>
        <td>{studentGrade.course}</td>
        <td>{studentGrade.grade}</td>
        <td className="operation justify-content-center">
          <button type="button" className="btn btn-outline-danger btn-sm ml-1 mr-1" onClick={() => { this.props.deleteGrade(this.props.grade.id, studentGrade); }}>Delete</button>
          <button type="button" className="btn btn-outline-dark btn-sm ml-1 mr-1" onClick={() => { this.props.updateGrade(this.props.grade.id); }}>Update</button>
        </td>
      </tr>
    );
  }
}
