import React, { useEffect } from "react";
import axios from "axios";


function jokes (){
    const [jokes,setJokes] = React.useState('');


    useEffect(()=>{
        axios.get('https://official-joke-api.appspot.com/random_joke')
        .then (Response=>{
            setJokes(Response.data.setup=''=Response.data.punchline)
        })
        .catch(error=>{
            console.log('Error while fetching jokes',error)
            setJokes('OOH NO looks like u haveing a bad relationshp with karma')
        })
    },[])//empty array = runs once on mount

    return <p>{jokes||'loading.....'}</p>
}

export default jokes;
