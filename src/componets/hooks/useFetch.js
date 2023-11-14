import { useState, useEffect } from 'react';


export function useFetch(url,context){
    const [data,setData] = useState(null);

    useEffect(()=>{
        fetch(url,context)
        .then((response) => response.json())
        .then(data=>setData(data))
    },[])

    return {data};    
}