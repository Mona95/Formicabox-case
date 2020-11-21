import React, { Component, FC } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FormInstance } from "antd/lib/form";
import { connect } from "react-redux";
import { setLoginUser } from "../../actions/actions";

type Props = {
  setLoginUser: FC;
  students: any;
  teachers: any;
  loginuser: any;
};

type State = {};

class Login extends Component<Props, State> {
  private loginFormRef = React.createRef<FormInstance>();

  onLogin = (e: any) => {
    let values = this.loginFormRef.current?.getFieldsValue(),
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
      let { teachers, students } = this.props,
        allUsers = [...teachers, ...students];
      let loginUser = allUsers.find(
        (user) =>
          user.username === values.username && user.password === values.password
      );

      if (loginUser) {
        alert("user exists");
        this.props.setLoginUser(loginUser);
      } else {
        e.preventDefault();
        alert("User is not defined . please register first !");
      }
    }
  };

  render() {
    return (
      <Form ref={this.loginFormRef} name="login-form">
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Link to="/welcome">
            <Button onClick={this.onLogin} type="primary" htmlType="submit">
              Log in
            </Button>
          </Link>
        </Form.Item>
        <br />
        <Link to={"/register"}>register now!</Link>
      </Form>
    );
  }
}

type reduxState = {
  students: any;
  teachers: any;
  loginuser: any;
};

const mapDispatchToProps = (dispatch: any) => ({
  setLoginUser: (loginuser: any) => dispatch(setLoginUser(loginuser)),
});

const mapStateToProps = (state: reduxState) => ({
  students: state.students,
  teachers: state.teachers,
  loginuser: state.loginuser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
