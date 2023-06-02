import React, { useContext, useState } from 'react'
import showContext from '../Context/ShowContext'
import { useNavigate } from 'react-router-dom';


const Book = () => {
    const context = useContext(showContext);
    const { book } = context; // fetching the card info for booking page card
    let newSummary = ""
    if (book.summary !== null) {
        newSummary = book.summary.replace(/<\/?[^>]+(>|$)/g, "");
    }
    else {
        newSummary = "No summary Please Visit the Link Below for more Information";
    }

    let navigate = useNavigate(); // using useNavigate form react router for redirect to Home page after submiting the form
    const [credential, setcredential] = useState({ username: "", email: "" });

    // handling the response from user and setting credential to local storage 
    const handle_response = async (e) => {
        e.preventDefault();
        localStorage.setItem("credential", { username: credential.username, email: credential.email });
        navigate("/");
    }

    // form onchange activity handler 
    const onChange = (e) => {
        setcredential({
            ...credential, [e.target.name]: e.target.value
        })

    }

    return (
        <>
        {/* card on the booking site  */}
            <div className="container my-4">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-2">
                            <img style={{ height: "100%" }} src={book.image !== null ? book.image.original : "https://static.vecteezy.com/system/resources/previews/005/502/524/original/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg"} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">{book.name}</h5>
                                <p className="card-text">{newSummary}</p>
                                <p className="card-text">
                                    <i className="fa-solid fa-star" style={{ color: "#fff700" }}></i><small className="text-body-secondary"> Rating - {book.rating.average !== null ? book.rating.average : "No Data Available"}</small></p>
                                <p className="card-text"><small className="text-body-secondary">Rs.500</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                {/* form where user enter details for the show to be booked */}
                <h1>ENTER YOUR DETAILS</h1>
                <form onSubmit={handle_response}>
                    <div className="mb-3 my-4">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" onChange={onChange} name="username" aria-describedby="emailHelp" value={credential.username} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" value={credential.email} />
                    </div>
                    <button type="submit" className="btn btn-primary">BOOK</button>
                </form>
            </div>
        </>
    )
}
export default Book
