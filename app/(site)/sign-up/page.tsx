import React from "react";
import AuthForm from "../components/AuthForm";

function SignUp() {
  return (
    <div className=" flex items-center min-h-[100vh]">
      <AuthForm variant="SIGNUP" label="Sign Up" />
    </div>
  );
}

export default SignUp;
