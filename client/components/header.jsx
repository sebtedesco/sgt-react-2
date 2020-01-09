import React from 'react';

function Header(props) {
  return (
    <>
      <h2 className="col-sm-12 col-md-10 col-lg-8">{ props.text }</h2>
      <h4 className="col-md-8 col-md-6 col-lg-4">{`Average Grade: ${props.averageGrade}`}</h4>
    </>
  );
}

export default Header;
