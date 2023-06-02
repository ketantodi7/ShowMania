import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import showContext from '../Context/ShowContext';

const DetailedItem = (props) => {
    const context = useContext(showContext);
    const { BookDetailed } = context;
    const { show } = props // taking the props to add in the card from ShowDetails.js
    let newSummary = ""
    if (show.summary !== null) {
        newSummary = show.summary.replace(/<\/?[^>]+(>|$)/g, "");
    }
    else {
        newSummary = "No summary Please Visit the Link Below for more Information";
    }

    // a particular card for a completed info about thte show and booking option 
    return (
        <>

            <div className="card mb-3">
                <img className="card-img-top" style={{ maxWidth: '1300px', maxHeight: "1000px" }} src={show.image !== null ? show.image.original : "https://static.vecteezy.com/system/resources/previews/005/502/524/original/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg"} alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{show.name}</h2>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{show.genres.map((name) => {
                        return <span key={name}>{name} </span>
                    })}</h6>
                    <p>
                        <i className="fa-solid fa-star" style={{ color: "#fff700" }}></i>
                        <span className='mx-2'>Average Rating - {show.rating.average ? show.rating.average : "No Rating"}
                        </span>
                    </p>
                    <p>
                        {newSummary}
                    </p>
                    <p className="card-text"><small className="text-body-secondary">Availabe on -  {show.webChannel !== null ? show.webChannel.name : "No Data"}</small></p>
                    <p className="card-text"><small className="text-body-secondary">Premiered {show.premiered ? show.premiered : "No Data"}</small></p>
                    <p className="card-text"><small className="text-body-secondary">{show.language}</small></p>
                    <span> <Link to={`https://www.imdb.com/title/${show.externals !== null ? show.externals.imdb : "tt7414406"}`} style={{ fontSize: "1.5rem" }}>
                        <i className="fa-brands fa-imdb fa-2xl" style={{ color: "#eeff00" }}></i>
                    </Link>
                    </span>
                    <span style={{ float: "right" }}><Link className="btn btn-danger" onClick={() => { BookDetailed(show) }} to="/Book" role="button">BOOK TICKETS</Link></span>
                </div>
            </div>
        </>
    )
}


export default DetailedItem
