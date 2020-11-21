import React, { Component, FC } from "react";
import StudentRegister from "./StudentRegister";
import TeacherRegister from "./TeacherRegister";
import { Form, Button, Radio } from "antd";
import { FormInstance } from "antd/lib/form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

  private registerFormRef = React.createRef<FormInstance>();

  onRegister = (e: any) => {
    let values = this.registerFormRef.current?.getFieldsValue(),
      isValid = [];
    for (let value in values) {
      if (values[value] === undefined) {
        isValid.push(value);
      }
    }
    if (isValid.length > 0) {
      e.preventDefault();
      alert("Please Fill the blank fields");
    } else {
      if (this.state.radioValue === "student") {
        debugger;
        this.props.addStudent(values);
      } else {
        debugger;
        this.props.addTeacher(values);
      }
    }
  };

  onChange = (e: any) => {
    this.setState({ radioValue: e.target.value });
    this.registerFormRef.current?.resetFields();
  };

  render() {
    return (
      <Form ref={this.registerFormRef} name="register-form">
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
            <Button onClick={this.onRegister} type="primary" htmlType="submit">
              Register
            </Button>
          </Link>
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
