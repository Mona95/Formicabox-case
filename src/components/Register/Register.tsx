import React, { Component } from "react";
import StudentRegister from "./StudentRegister";
import TeacherRegister from "./TeacherRegister";

import { Form, Button, Radio } from "antd";
import { Link } from "react-router-dom";

type Props = {};
type State = {
  studentRegister: boolean;
  teacherRegister: boolean;
  radioValue: string;
};

class Register extends Component<Props, State> {
  state = {
    studentRegister: true,
    teacherRegister: false,
    radioValue: "student",
  };

  onFinish = (values: object) => {
    console.log(values);
  };
  onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    this.setState({ radioValue: e.target.value });
  };

  render() {
    return (
      <Form name="register-form" onFinish={this.onFinish}>
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
          <Link to="/">
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Link>
        </Form.Item>
      </Form>
    );
  }
}

export default Register;
