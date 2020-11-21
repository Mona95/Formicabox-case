import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FormInstance } from "antd/lib/form";

type Props = {};
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

export default Login;
