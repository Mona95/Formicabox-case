import React, { Component, FC } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StudentWelcome from "./StudentWelcome";
import TeacherWelcome from "./TeacherWelcome";
import { removeStudent } from "../../actions/actions";

interface Props {
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
          <StudentWelcome loginuser={this.props.loginuser} />
        ) : (
          <TeacherWelcome
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
});

type reduxState = {
  loginuser: any;
  students: any;
};

const mapStateToProps = (state: reduxState) => ({
  loginuser: state.loginuser,
  students: state.students,
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
