import React from "react";
import { Form, Input } from "antd";

const TeacherRegister: React.FC = () => {
  return (
    <div>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please enter your Username!" }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please enter your Password!" }]}
      >
        <Input type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item
        name="title"
        rules={[{ required: true, message: "Please enter your Title!" }]}
      >
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please enter your Email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>
    </div>
  );
};

export default TeacherRegister;
