import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

type Props = {};
type State = {};

class Login extends Component<Props, State> {
  onLogin = (value: object) => {
    console.log(value);
  };

  render() {
    return (
      <Form name="login-form" onFinish={this.onLogin}>
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
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
        <br />
        <Link to={"/register"}>register now!</Link>
      </Form>
    );
  }
}

export default Login;
