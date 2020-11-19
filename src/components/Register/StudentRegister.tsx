import React from "react";
import { Form, Input } from "antd";

const StudentRegister: React.FC = () => {
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
        name="class"
        rules={[{ required: true, message: "Please enter your Class!" }]}
      >
        <Input placeholder="Class" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please enter your Email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="ects"
        rules={[{ required: true, message: "Please enter your ECTS!" }]}
      >
        <Input type="number" placeholder="ECTS" />
      </Form.Item>
    </div>
  );
};

export default StudentRegister;
