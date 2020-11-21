import React from "react";
import { Link } from "react-router-dom";

type Props = {
  loginuser: any;
};

const StudentWelcome: React.FC<Props> = (props: Props) => {
  let { username, email, ects, studentclass } = props.loginuser;
  return (
    <>
      <div>Student Information</div>
      <br />
      <div>Student Name: {username}</div>
      <br />
      <div>Student Class: {studentclass}</div>
      <br />
      <div>Student Email: {email}</div>
      <br />
      <div>Student ECTS: {ects}</div>
      <br />
    </>
  );
};

export default StudentWelcome;
