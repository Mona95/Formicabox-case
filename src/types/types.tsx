export type Student = {
  username: string;
  password: string;
  studentclass: string;
  email: string;
  ects: number;
};

export type StudentWithKey = {
  username: string;
  password: string;
  studentclass: string;
  email: string;
  ects: number;
  key: number;
};

export type Teacher = {
  username: string;
  password: string;
  title: string;
  email: string;
};

export type Action = {
  type: string;
  payload: any;
};

export type AppState = {
  students: Student[];
  teachers: Teacher[];
  loginuser: {};
};
