import React from 'react';

function Header(props) {
  return (
    <>
      <h2 className="col-sm-12 col-md-8 col-lg-8 m-0">{ props.text }</h2>
      <h4 className="col-md-8 col-md-4 col-lg-4 m-0">{`Average Grade: ${props.averageGrade}`}</h4>
    </>
  );
}

export default Header;
