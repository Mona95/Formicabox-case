import * as actionTypes from "../actions/actionTypes";

type Action = {
  type: string;
  payload: any;
};

interface Students {
  username: string;
  password: string;
  class: string;
  email: string;
  ects: number;
}

interface Teachers {
  username: string;
  password: string;
  title: string;
  email: string;
}

interface State {
  students: Students[];
  teachers: Teachers[];
  loginuser: object;
}

const initialState: State = { students: [], teachers: [], loginuser: {} };

const rootReducer = (state = initialState, action: Action): State => {
  const {
    ADD_STUDENT,
    ADD_TEACHER,
    REMOVE_STUDENT,
    SET_LOGIN_USER,
    UPDATE_STUDENT,
  } = actionTypes;
  let students;
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case ADD_TEACHER:
      return {
        ...state,
        teachers: [...state.teachers, action.payload],
      };
    case REMOVE_STUDENT:
      students = state.students.filter((std) => {
        return std.username !== action.payload;
      });
      return {
        ...state,
        students,
      };
    case SET_LOGIN_USER:
      return {
        ...state,
        loginuser: action.payload,
      };
    case UPDATE_STUDENT:
      students = state.students.map((std) => {
        if (std.username === action.payload.studentname) {
          return {
            ...std,
            studentclass: action.payload.studentclass,
            ects: action.payload.ects,
          };
        }
        return std;
      });
      return {
        ...state,
        students,
      };
    default:
      return state;
  }
};

export default rootReducer;
