import React, {useState, useContext} from "react";
import {AuthContext} from "../../shared/context/auth-contect";
import {useForm} from "../../shared/hooks/form-hook";
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";


import "./Styles/Auth.css";

const Auth = () =>{
    const [formState, inputHandler] = useForm({
        // these are the initial state for Auth

        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)// initial the form is invalid(false)


    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr/>
            <form >


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

                <Button type="submit" disabled={!formState.isValid}>LOGIN</Button>
            </form>
        </Card>
    )
}

export default Auth; 