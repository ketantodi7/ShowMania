import React, { useContext } from 'react'
import showContext from '../Context/ShowContext';
import { Link } from "react-router-dom";


const Showitem = (props) => {
    const context = useContext(showContext);
    const { showDetails } = context;

    const { show } = props
    let newSummary = ""
    if (show.show.summary !== null) {
        newSummary = show.show.summary.replace(/<\/?[^>]+(>|$)/g, "");
    }
    else {
        newSummary = "No summary Please Visit the Link Below for more Information";
    }
    // api url used  - `https://api.tvmaze.com/search/shows?q=${search}`
    // particular card that is displayed on the home screen with all the details fetched by api
    return (
        <>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-2">
                        <img style={{ height: "100%" }} src={show.show.image !== null ? show.show.image.original : "https://static.vecteezy.com/system/resources/previews/005/502/524/original/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg"} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h2 className="card-title">{show.show.name}</h2>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{show.show.genres.map((name) => {
                                return <span key={name}>{name} </span>
                            })}</h6>
                            <p>
                                <i className="fa-solid fa-star" style={{ color: "#fff700" }}></i>
                                <span className='mx-2'>Average Rating - {show.show.rating.average ? show.show.rating.average : "No Rating"}
                                </span>
                            </p>
                            <p>
                                {newSummary}
                            </p>
                            <p className="card-text"><small className="text-body-secondary">{show.show.language}</small></p>
                            <div className="container" style={{ margin: "80px 0px 0px 0px" }}>
                                <span> <Link to={`https://www.imdb.com/title/${show.show.externals !== null ? show.show.externals.imdb : "tt7414406"}/`} style={{ fontSize: "1.5rem" }}>
                                    <i className="fa-brands fa-imdb fa-2xl" style={{ color: "#eeff00" }}></i>
                                </Link>
                                </span>
                                <span style={{ float: "right" }}><Link className="btn btn-success" to="/showdetails" onClick={() => { showDetails(show.show.id) }} role="button">More Details</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showitem
