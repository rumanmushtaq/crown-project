import React from "react";
import './SignInandSignUp.styles.scss'
import SignIn from "./../../components/SignIn/SignIn.component";
import SignUp from "./../../components/sign-up/sign-up.component";

const SignInandSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
      
    </div>
  );
};

export default SignInandSignUp;
