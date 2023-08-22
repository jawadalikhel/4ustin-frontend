import React, {useState, useContext} from "react";
import {AuthContext} from "../../shared/context/auth-contect";
import {useForm} from "../../shared/hooks/form-hook";
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";


import "./Styles/Auth.css";

const Auth = () =>{
    const [isLoginMode, setIsLoginMode] = useState(true);

    const [formState, inputHandler, setFormData] = useForm({
        // these are the initial state for Auth
        username: {
            value: '',
            isValid: false
        },
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)// initial the form is invalid(false)

    const switchModeHandler = () =>{
        // if the user is not in the login Mode
        if(!isLoginMode){
            setFormData({
                ...formState.inputs,
                username: undefined
            }, 
            formState.inputs.email.isValid && formState.inputs.password.isValid);
        }else{
            setFormData({
                ...formState.inputs, // this is where we already have the email and password in state
                // add the new value of username in the state
                username: {
                    value: '',
                    isValid: false
                }
            }, false); // validity of the form is false
        }
        setIsLoginMode((prevMode) => !prevMode);
    }

    const authSubmitHandler = event =>{
        event.preventDefault();
        console.log(formState.inputs, "<----- formState")
    }

    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr/>
            <form onSubmit={authSubmitHandler}>
                {
                    !isLoginMode ? 
                        <Input 
                            element="input" 
                            id="username" 
                            type="text" 
                            label="Username" 
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Username required"
                            onInput={inputHandler}
                            initialValue={formState.inputs.username.value}
                            initialValid={formState.inputs.username.isValid}
                        /> : null
                }
                

                <Input 
                    element="input" 
                    id="email" 
                    type="email" 
                    label="E-Mail" 
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email"
                    onInput={inputHandler}
                    initialValue={formState.inputs.email.value}
                    initialValid={formState.inputs.email.isValid}
                />

                <Input 
                    element="input" 
                    id="password" 
                    type="password" 
                    label="Password" 
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid password, at least 5 characters."
                    onInput={inputHandler}
                    initialValue={formState.inputs.password.value}
                    initialValid={formState.inputs.password.isValid}
                />

                <Button type="submit" disabled={!formState.isValid}>{isLoginMode ? "LOGIN" : "SIGNUP"}</Button>
            </form>
            <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}</Button>
        </Card>
    )
}

export default Auth; 