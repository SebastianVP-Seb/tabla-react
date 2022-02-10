import React, { useState, useEffect } from 'react'

function useFetch(url) {

    const [datos, setDatos]=useState(null);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        (async ()=>{
            try {
                const resp=await fetch(url);
                const result=await resp.json();
                setDatos(result);
                setLoading(false);
                
            } catch (error) {
                console.log(error);
                
            }
        })();
    },[url]);
  return {datos, loading};
};

export default useFetch;