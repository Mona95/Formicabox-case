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
  currUser: object;
}

const initialState: State = { students: [], teachers: [], currUser: {} };

const rootReducer = (state = initialState, action: Action): State => {
  const { ADD_STUDENT, ADD_TEACHER, REMOVE_STUDENT } = actionTypes;
  let students, teachers;
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
    default:
      return state;
  }
};

export default rootReducer;
