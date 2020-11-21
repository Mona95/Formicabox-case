import React from "react";
import * as types from "../../types/types";

type Props = {
  loginuser: types.Student;
  students: types.Student[];
};

const StudentWelcome: React.FC<Props> = (props: Props) => {
  let { username, email, ects, studentclass } = props.loginuser;
  let { students } = props;

  const displayRank = () => {
    let AllStudents = students.length,
      sortStudents = students.sort(
        (a: types.Student, b: types.Student) => b.ects - a.ects
      ),
      currStudentIndex;

    sortStudents.find(
      (item: types.Student, index: number) =>
        item.ects === ects && (currStudentIndex = index + 1)
    );

    return { currStudentIndex, AllStudents };
  };
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
      <div>
        All Students {displayRank().AllStudents} / Your Rank{" "}
        {displayRank().currStudentIndex}
      </div>
    </>
  );
};

export default StudentWelcome;
