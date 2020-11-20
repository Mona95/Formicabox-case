import * as actionTypes from "./actionTypes";

type Student = {
  username: string;
  password: string;
  class: string;
  email: string;
  ects: number;
};

type Teacher = {
  username: string;
  password: string;
  title: string;
  email: string;
};

export const addStudent = (student: Student) => ({
  type: actionTypes.ADD_STUDENT,
  payload: student,
});

export const addTeacher = (teacher: Teacher) => ({
  type: actionTypes.ADD_TEACHER,
  payload: teacher,
});

export const removeStudent = (studentName: string) => ({
  type: actionTypes.REMOVE_STUDENT,
  payload: studentName,
});
