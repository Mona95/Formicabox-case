import React from "react";

type Props = {
  loginuser: any;
  students: any;
};

const StudentWelcome: React.FC<Props> = (props: Props) => {
  let { username, email, ects, studentclass } = props.loginuser;
  let { students } = props;

  const displayRank = () => {
    let AllStudents = students.length,
      sortStudents = students.sort((a: any, b: any) => b.ects - a.ects),
      currStudentIndex;

    sortStudents.find(
      (item: any, index: number) =>
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
