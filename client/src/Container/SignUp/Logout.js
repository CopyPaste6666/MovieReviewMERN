import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        .then((res) => res.json())
        .then((res) => {
            navigate('/login', { replace: true });
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>
           <h1>Logout ka page</h1> 
        </>
    )
}

export default Logout;
