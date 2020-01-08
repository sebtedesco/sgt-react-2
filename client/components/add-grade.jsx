import React from 'react';

class AddGrade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCourseChange(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleGradeChange(event) {
    const eventNum = parseInt(event.target.value);
    this.setState({
      grade: eventNum
    });
  }

  handleAdd(event) {
    this.props.fetchNewGrade(this.state);
    this.handleCancel();
  }

  handleCancel() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <>
        <div className= "input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">{<i className="fas fa-user"></i>}</span>
          </div>
          <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={this.state.name} placeholder="Name" onChange= {this.handleNameChange}></input>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">{<i className="far fa-list-alt"></i>}</span>
          </div>
          <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={this.state.course} placeholder="Course" onChange={this.handleCourseChange}></input>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">{<i className="fas fa-graduation-cap"></i>}</span>
          </div>
          <input type="number" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={this.state.grade} placeholder="Grade" onChange={this.handleGradeChange}></input>
        </div>
        <button type="button" className="btn btn-success mr-2" onClick={this.handleAdd}>Add</button>
        <button type="button" className="btn btn-secondary ml-2" onClick={this.handleCancel}>Cancel</button>
      </>
    );
  }
}

export default AddGrade;