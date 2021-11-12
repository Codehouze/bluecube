import {useState,useEffect } from 'react';
import axios from 'axios';
const API_KEY="7dJDeRlzqytdwVXealAoIF_5cew8qGs-gY4bISPwjyA";
const count =1


const LoadImages =()=>{

    const[state,setState] = useState([])
    useEffect(() => {
        axios
        .get("https://api.unsplash.com/photos/?client_id=" + API_KEY)
        .then((data) => { 
            // console.log(data);
            setState(data.data);
        });
    },[count])
    
    return state;
}

export {LoadImages} 