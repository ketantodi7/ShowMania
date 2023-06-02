import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    // a basic bootstrap footer
    return (
        <>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        <Link to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"></svg>
                        </Link>
                        <p className="text-body-secondary">&copy; 2023 SHOW MANIA</p>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Features</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">About</Link></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Features</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">About</Link></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Features</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">About</Link></li>
                        </ul>
                    </div>
                </footer>
            </div>

            <div className="b-example-divider"></div>


            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Features</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">About</Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Features</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">About</Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Features</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">About</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                        <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row  py-4 my-4 border-top">
                        <p >&copy; 2023 SHOW MANIA, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
