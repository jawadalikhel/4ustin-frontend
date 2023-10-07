import React, {useState, useContext} from "react";
import {useForm} from "../../shared/hooks/form-hook";
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./Styles/Auth.css";

const Auth = () =>{
    // get access to the auth object by using the useContext
    const auth = useContext(AuthContext);
    // State to manage whether the user is in login mode or signup mode
    const [isLoginMode, setIsLoginMode] = useState(true);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();


    // Custom hook 'useForm' to manage the form state and form input validation
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    },false);
    
    // Function to handle switching between login and signup modes
    const switchModeHandler = () =>{
        if(!isLoginMode){
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid);
        }else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            },false)
        }
        setIsLoginMode(prevMode => !prevMode);
    }

    // Function to handle form submission
    const authSubmitHandler = async (event) =>{
        event.preventDefault();

        if(isLoginMode){
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + '/users-auth/login', 
                    'POST',
                    JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    }),
                    {
                        'Content-Type': 'application/json'
                    }
                );
                auth.login(responseData.userId, responseData.token);
            } catch (err) {
                // console.log(err.messsage);
            }
            
        }else{
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + '/users-auth/signup',
                    'POST',
                    JSON.stringify({
                        name: formState.inputs.name.value,
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    }),   
                    {
                        'Content-Type': 'application/json'
                    }
                );

                auth.login(responseData.userId, responseData.token);
            } catch (err) {
                // console.log(err.messsage);
            }
        }
    }
    
    return(
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError}/>
        <Card className="authentication">
                {isLoading ? <LoadingSpinner asOverlay={true} /> : null}
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler} className="">
                {/* Render input fields based on the current mode (login or signup) */}
                {
                    !isLoginMode ? 
                        <Input 
                            element="input" 
                            id="name" 
                            type="text" 
                            label="Your Username" 
                            validators={[VALIDATOR_REQUIRE()]} 
                            errorText="Username Required"
                            onInput={inputHandler}
                        /> : null
                }
                <Input 
                    element="input" 
                    id="email" 
                    type="email"
                    label="E-Mail" 
                    validators={[VALIDATOR_EMAIL()]} 
                    errorText="Please enter a valid Email" 
                    onInput={inputHandler} 
                />

                <Input 
                    element="input" 
                    id="password" 
                    type="password"
                    label="Password" 
                    validators={[VALIDATOR_MINLENGTH(5)]} 
                    errorText="Please enter a valid Password" 
                    onInput={inputHandler} 
                />

                {/* Disable the button if the form is not valid */}
                <Button type="submit" disabled={!formState.isValid}>
                    {isLoginMode ? 'LOGIN' : 'SIGNUP'}
                </Button>
            </form>
            {/* Button to switch between login and signup modes */}
            <Button inverse  onClick={switchModeHandler}>
                SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
            </Button>
        </Card>
        </React.Fragment>
    )
}

export default Auth;