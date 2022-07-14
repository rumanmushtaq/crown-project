import React, { Component } from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/customButton.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";


class SignUp extends Component{
    constructor(){
        super()

        this.state = {
            displayName : "",
            email: "",
            password: "",
            confirmPassword: ""
          };
    }
    handleSubmit= async event=>{
        event.preventDefault();
        const {displayName , email , password , confirmPassword} = this.state;

        if(password !== confirmPassword){
            console.log(`password and confirmPassword must be matched`);
            return;
        }

        try{

            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName : "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }catch(err){
            console.log(err.message);
        }

    }
    handleChange = event =>{
        const {name , value } = event.target;

        this.setState({ [name] : value})
    }
    render(){
        const {displayName , email , password , confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign Up with ypur email and Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name= 'display Name'
                    label="display Name"
                    value = {displayName}
                    onChange= {this.handleChange}
                    required
                    />
                    <FormInput
                    type="email"
                    name="email"
                    label="email"
                    value = {email}
                    onChange= {this.handleChange}
                    required
                    />
                    <FormInput
                    type='password'
                    name= 'password'
                    label="password"
                    value = {password}
                    onChange= {this.handleChange}
                    required
                    />
                    <FormInput
                    type='text'
                    name= 'confirmPassword'
                    label="password"
                    value = {confirmPassword}
                    onChange= {this.handleChange}
                    required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;