import React, { FC, Component } from "react";
import { Table } from "antd";
import * as types from "../../types/types";

type Props = {
  updateStudent: any;
  removeStudent: FC;
  loginuser: any;
  students: any;
};

type State = {
  editFormVisible: boolean;
  selectedStudent: types.Student;
  studentclass: string;
  ects: number;
};

class TeacherWelcome extends Component<Props, State> {
  state = {
    editFormVisible: false,
    selectedStudent: {
      username: "",
      password: "",
      studentclass: "",
      email: "",
      ects: 0,
      key: 0,
    },
    studentclass: "",
    ects: 0,
  };

  handleDeleteStudent = (value: any) => {
    this.props.removeStudent(value);
  };

  showEditForm = (value: string) => {
    this.setState({
      editFormVisible: true,
    });
    let selectedStudent = this.props.students.find(
      (std: any) => std.username === value
    );
    this.setState({
      selectedStudent: selectedStudent,
      studentclass: selectedStudent.studentclass,
      ects: selectedStudent.ects,
    });
  };

  columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
      sorter: (a: types.Student, b: types.Student) =>
        a.username.length - b.username.length,
    },
    {
      title: "Class",
      dataIndex: "studentclass",
      key: "studentclass",
      sorter: (a: types.Student, b: types.Student) =>
        a.studentclass.length - b.studentclass.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a: types.Student, b: types.Student) =>
        a.email.length - b.email.length,
    },
    {
      title: "ECTS",
      dataIndex: "ects",
      key: "ects",
      sorter: (a: types.Student, b: types.Student) => a.ects - b.ects,
    },
    {
      title: "Action",
      dataIndex: "username",
      key: "x",
      render: (value: string) => (
        <>
          <button onClick={() => this.handleDeleteStudent(value)}>
            Delete
          </button>
          <button onClick={() => this.showEditForm(value)}> Edit</button>
        </>
      ),
    },
  ];

  handleClassChange = (e: any) => {
    this.setState({ studentclass: e.target.value });
  };

  handleEctsChange = (e: any) => {
    this.setState({ ects: e.target.value });
  };

  handleEditStudent = (e: any) => {
    e.preventDefault();
    let { studentclass, ects, selectedStudent } = this.state;
    let name = selectedStudent.username;
    this.props.updateStudent(name, studentclass, ects);
    this.setState({ editFormVisible: false });
  };

  render() {
    this.props.students.forEach((std: types.StudentWithKey, index: number) => {
      std.key = index;
    });

    return (
      <>
        <div>Teacher Information {this.props.loginuser.username}</div>
        <Table columns={this.columns} dataSource={this.props.students} />
        <br />
        <br />
        <br />
        <br />
        <hr />
        {this.state.editFormVisible && (
          <form>
            <input
              name="studentclass"
              value={this.state.studentclass}
              onChange={this.handleClassChange}
              id="studentclass"
            />
            <input
              name="ects"
              value={this.state.ects}
              type="number"
              onChange={this.handleEctsChange}
            />
            <button onClick={this.handleEditStudent}>OK</button>
          </form>
        )}
      </>
    );
  }
}

export default TeacherWelcome;
