import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StudentWelcome from "./StudentWelcome";
import TeacherWelcome from "./TeacherWelcome";

type Props = {
  loginuser: any;
};
type State = {};

class Welcome extends Component<Props, State> {
  render() {
    return (
      <div>
        {this.props.loginuser.ects ? (
          <StudentWelcome loginuser={this.props.loginuser} />
        ) : (
          <TeacherWelcome loginuser={this.props.loginuser} />
        )}
        <br />
        <Link to="/">log out</Link>
      </div>
    );
  }
}

type reduxState = {
  loginuser: any;
};

const mapStateToProps = (state: reduxState) => ({
  loginuser: state.loginuser,
});

export default connect(mapStateToProps)(Welcome);
