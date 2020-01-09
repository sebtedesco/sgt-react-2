import React from 'react';

function StudentGrade(props) {
  const studentGrade = props.grade;
  return (
    <tr>
      <td>{studentGrade.name}</td>
      <td>{studentGrade.course}</td>
      <td>{studentGrade.grade}</td>
      <td className="text-center">
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => { props.deleteGrade(props.grade.id, props.grade); }}>Delete</button>
      </td>
    </tr>
  );
}

export default StudentGrade;
