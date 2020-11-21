import * as actionTypes from "./actionTypes";
import * as types from "../types/types";

export const addStudent = (student: types.Student) => ({
  type: actionTypes.ADD_STUDENT,
  payload: student,
});

export const addTeacher = (teacher: types.Teacher) => ({
  type: actionTypes.ADD_TEACHER,
  payload: teacher,
});

export const setLoginUser = (loginuser: types.Student | types.Teacher) => ({
  type: actionTypes.SET_LOGIN_USER,
  payload: loginuser,
});

export const removeStudent = (studentName: string) => ({
  type: actionTypes.REMOVE_STUDENT,
  payload: studentName,
});

export const updateStudent = (
  studentname: string,
  studentclass: string,
  ects: number
) => ({
  type: actionTypes.UPDATE_STUDENT,
  payload: {
    studentname,
    ects,
    studentclass,
  },
});
