import React, { FC } from "react";
import { Table } from "antd";

type Props = {
  removeStudent: FC;
  loginuser: any;
  students: any;
};

const StudentWelcome: React.FC<Props> = (props: Props) => {
  const handleDeleteStudent = (value: any) => {
    props.removeStudent(value);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
      sorter: (a: any, b: any) => a.username.length - b.username.length,
    },
    {
      title: "Class",
      dataIndex: "studentclass",
      key: "studentclass",
      sorter: (a: any, b: any) => a.studentclass.length - b.studentclass.length,
      render: (value: string) => (
        <>
          <span>{value}</span>
          <button> Edit</button>
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a: any, b: any) => a.email.length - b.email.length,
    },
    {
      title: "ECTS",
      dataIndex: "ects",
      key: "ects",
      sorter: (a: any, b: any) => a.ects - b.ects,
      render: (value: string) => (
        <>
          <span>{value}</span>
          <button> Edit</button>
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "username",
      key: "x",
      render: (value: string) => (
        <button onClick={() => handleDeleteStudent(value)}>Delete</button>
      ),
    },
  ];

  return (
    <>
      <div>Teacher Information {props.loginuser.username}</div>
      <Table columns={columns} dataSource={props.students} />
      <br />
      <br />
    </>
  );
};

export default StudentWelcome;
