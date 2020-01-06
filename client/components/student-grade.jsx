import React from 'react';

function StudentGrade(props) {
  const studentGrade = props.grade;
  return (
    <tr>
      <td>{studentGrade.name}</td>
      <td>{studentGrade.course}</td>
      <td>{studentGrade.grade}</td>
    </tr>
  );
}

export default StudentGrade;
