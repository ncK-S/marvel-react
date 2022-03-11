import React, { useState, useEffect } from 'react';
import { server_calls } from '../API';

export const useGetData = () => {
    const [ heroData, setData ] = useState<any>([]);

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect Hook adds data to react state
    useEffect( () =>{
        handleDataFetch();
    }, [])

    return {heroData, getData:handleDataFetch}
}