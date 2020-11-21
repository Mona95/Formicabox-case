import React from "react";

type Props = {
  loginuser: any;
};

const StudentWelcome: React.FC<Props> = (props: Props) => {
  return <div>Teacher : {props.loginuser.username}</div>;
};

export default StudentWelcome;
