import React from "react";
import AuthForm from "../components/AuthForm";

function SignIn() {
  return (
    <div className=" flex items-center min-h-[100vh]">
      <AuthForm variant="SIGNIN" label="Sign In" />
    </div>
  );
}

export default SignIn;
