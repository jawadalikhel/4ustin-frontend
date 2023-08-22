import { useCallback, useReducer } from "react";
import { act } from "react-dom/test-utils";

// Reducer function for managing form state 
const formReducer = (state, action) =>{
    switch(action.type){
        case 'INPUT_CHANGE':
            // Initialize a variable to track the overall form validity
            let formIsValid = true;
            // Loop through all form inputs to check their validity
            for(const inputId in state.inputs){
                if(!state.inputs[inputId]){
                    continue;
                }

                // If the current inputId matches the inputId in the action, update its validity with action.isValid
                if(inputId === action.inputId){
                    formIsValid = formIsValid && action.isValid;
                }else{
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return{
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: formIsValid
            };

        case 'SET_DATA':
            return{
                inputs: action.inputs,
                isValid: action.formIsValid
            }
        default: 
        return state;
    }
}

export const useForm = (initialInputs, initialFormValidity) => {
    // Using the "useReducer" hook to manage form state with the "formReducer" function
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity
    })

    // The "inputHandler" function updates the form state when input values change
    const inputHandler = useCallback((id, value, isValid) =>{
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputId: id
        })
    },[]) // The "useCallback" hook is used for better performance and avoids unnecessary re-renders

    // The "setFormData" function sets the initial form data and validity
    const setFormData = useCallback((inputData, formValidity) =>{
        dispatch({
            type: 'SET_DATA',
            inputs: inputData,
            formIsValid: formValidity
        })
    },[])

    return [formState, inputHandler, setFormData];
}

export default formReducer;