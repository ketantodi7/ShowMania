import React, { useContext } from 'react'
import showContext from '../Context/ShowContext'
import { Link } from "react-router-dom";

const Navbar = () => {
  const context = useContext(showContext);
  const { sendQuery } = context;

  // Usecontext - ShowState 
  // used handle click to take the query from the search bar and fetch the show details accoridng to the input given by the user 
  const handleSubmit = (e) => {
    e.preventDefault()
    const { sQuery } = e.target.elements
    let query = String(sQuery.value)
    sendQuery(query);
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Show mania</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
          </ul>
          <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input className="form-control me-2" type="search" name='sQuery' placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
