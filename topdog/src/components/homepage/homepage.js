import './homepage.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function HomePage() {
    

    const [firstNames, setFirstNames] = useState([])
    const [lastNames, setLastNames] = useState([])

    //connect to backend
    
    var title = <h2>HomePage</h2>


    // useEffect(() => {
    //     fetch("api/accounts/greet")
    //         .then(response => response.json())
    //         .then(json => {
    //             setLastNames(prevState => prevState.concat(json))
                
    //         })
    //         .catch(error => console.log(error))
    //     }, []);
        
    useEffect(() => {
        axios.get(`http://localhost:8080/api/accounts/greet`)
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
        }, []);
    console.log(lastNames)


    return (
        //output something from backend here
        <div>
        </div>
        
    );
}





