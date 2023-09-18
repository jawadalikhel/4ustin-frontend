import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const activeHttpRequests = useRef([]);

    // we use useCallback to avoid infinit loops and that this function never gets recreated when the component uses this hook when rerenders
    const sendRequest = useCallback (async (url, method = 'GET', body = null, headers = {}) =>{
        setIsLoading(true)
        const httpAbortCtrl = new AbortController();
        activeHttpRequests.current.push(httpAbortCtrl);

       try {
            const response = await fetch(url, {
                method, 
                body, 
                headers,
                signal: httpAbortCtrl.signal
            });

            const responseData = await response.json();

            activeHttpRequests.current = activeHttpRequests.current.filter(
                reqCtrl => reqCtrl !== httpAbortCtrl
            );

            if(!response.ok){
                throw new Error(responseData.messsage);
            }
            setIsLoading(false);
            return responseData;
       } catch (err) {
            setError(err.messsage);
            setIsLoading(false);
            throw err;
       }
       
    }, []);

    const clearError = () =>{
        setError(null);
    }

    useEffect(() => {
        return () =>{
            activeHttpRequests.current.forEach(AbortCtrl => AbortCtrl.abort());
        }
    }, [])

    return {isLoading, error, sendRequest, clearError};
}