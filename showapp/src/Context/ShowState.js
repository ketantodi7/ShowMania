import React, { useState, useEffect } from 'react'
import ShowContext from './ShowContext'

const ShowState = (props) => {
    const [Show, setShow] = useState([]);
    const [search, setSearch] = useState("india");
    const [Details, setDetails] = useState([]);
    const [book, setbook] = useState([]);

    //  fetching all Details of the show for the Home screen 
    const updateShow = async () => {
        const url = `https://api.tvmaze.com/search/shows?q=${search}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setShow(parsedData)
    }

    // taking the input and updating the show details when user search anything
    const sendQuery = async (query) => {
        setSearch(query);
    }
    
    useEffect(() => {
        updateShow();
        // eslint-disable-next-line
    }, [search])


    // fetching the details of a particular show 
    const showDetails = async (id) => {
        const url = `https://api.tvmaze.com/shows/${id}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setDetails([parsedData])
    }

    const BookDetailed = (show) => {
        setbook(show);
    }

    return (
        <ShowContext.Provider value={{ Show, updateShow, sendQuery, showDetails, Details, book, BookDetailed }}>
            {props.children}
        </ShowContext.Provider>
    )
}

export default ShowState
