import React, { Component, FC } from "react";
import StudentRegister from "./StudentRegister";
import TeacherRegister from "./TeacherRegister";
import { Form, Button, Radio } from "antd";

import { connect } from "react-redux";
import { addStudent, addTeacher } from "../../actions/actions";

type Props = {
  addStudent: FC;
  addTeacher: FC;
  students: any;
  teachers: any;
};
type State = {
  radioValue: string;
};

class Register extends Component<Props, State> {
  state = {
    radioValue: "student",
  };

  onRegister = (values: object) => {
    if (this.state.radioValue === "student") {
      this.props.addStudent(values);
    } else {
      this.props.addTeacher(values);
    }
  };

  onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    this.setState({ radioValue: e.target.value });
  };

  render() {
    return (
      <Form name="register-form" onFinish={this.onRegister}>
        <Radio.Group onChange={this.onChange} value={this.state.radioValue}>
          <Radio value={"student"}>Student</Radio>
          <Radio value={"teacher"}>Teacher</Radio>
        </Radio.Group>
        {this.state.radioValue === "student" ? (
          <StudentRegister />
        ) : (
          <TeacherRegister />
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

type reduxState = {
  students: any;
  teachers: any;
};

const mapDispatchToProps = (dispatch: any) => ({
  addStudent: (student: any) => dispatch(addStudent(student)),
  addTeacher: (teacher: any) => dispatch(addTeacher(teacher)),
});

const mapStateToProps = (state: reduxState) => ({
  students: state.students,
  teachers: state.teachers,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
