import React from 'react';

function Header(props) {
  return (
    <>
      <h2 className="col-8">{ props.text }</h2>
      <h4 className="col-4">{`Average Grade: ${props.averageGrade}`}</h4>
    </>
  );
}

export default Header;
