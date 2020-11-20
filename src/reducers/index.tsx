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
}

const initialState: State = { students: [], teachers: [] };

const rootReducer = (state = initialState, action: Action): State => {
  const { ADD_STUDENT, ADD_TEACHER } = actionTypes;
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
    default:
      return state;
  }
};

export default rootReducer;
