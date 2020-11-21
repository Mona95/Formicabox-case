import React, { Component, FC } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StudentWelcome from "./StudentWelcome";
import TeacherWelcome from "./TeacherWelcome";
import { removeStudent, updateStudent } from "../../actions/actions";
import * as types from "../../types/types";

interface Props {
  updateStudent: any;
  removeStudent: FC;
  students: any;
  loginuser: any;
}
type State = {};

class Welcome extends Component<Props, State> {
  render() {
    return (
      <div>
        {this.props.loginuser.ects ? (
          <StudentWelcome
            students={this.props.students}
            loginuser={this.props.loginuser}
          />
        ) : (
          <TeacherWelcome
            updateStudent={this.props.updateStudent}
            removeStudent={this.props.removeStudent}
            students={this.props.students}
            loginuser={this.props.loginuser}
          />
        )}
        <br />
        <Link to="/">log out</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  removeStudent: (studentName: any) => dispatch(removeStudent(studentName)),
  updateStudent: (studentname: string, studentclass: string, ects: number) =>
    dispatch(updateStudent(studentname, studentclass, ects)),
});

const mapStateToProps = (state: types.AppState) => ({
  loginuser: state.loginuser,
  students: state.students,
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
