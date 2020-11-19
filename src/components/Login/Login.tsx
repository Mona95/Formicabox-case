import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

type Props = {};
type State = {};

class Login extends Component<Props, State> {
  onFinish = (values: object) => {
    console.log("Received values of form: ", values);
  };

  render() {
    return (
      <Form name="normal_login" onFinish={this.onFinish}>
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
          <Link to="/dashboard">
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Link>
          <br />
          <Link to={"/register"}>register now!</Link>
        </Form.Item>
      </Form>
    );
  }
}

export default Login;
