import axios from 'axios';
import { useState, useEffect } from 'react';
//import { UserResponse } from '../types/user.type';

const baseUrl = 'https://stage.getbani.com/api/v1/comhub/direct_payment_page_details';

function useGetPaymentDetails({page_ref}:{page_ref:string}) {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState<any>();
    const[error, setError]= useState("");

    const getPaymentDetails = () => {
        setIsLoading(true);
        axios
            .get<any>(`${baseUrl}/${page_ref}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                setUserData(response.data);
            })
            .catch((err) => {
                setError(err.message || 'An error occured!')
                
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    useEffect(() => {
        getPaymentDetails();
    }, []);
    return { isLoading, userData, error };
}


export { useGetPaymentDetails };
