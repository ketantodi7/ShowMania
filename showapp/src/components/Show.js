import React, { useContext } from 'react'
import Showitem from './Showitem'
import showContext from '../Context/ShowContext'

const Show = () => {
    const context = useContext(showContext);
    const { Show } = context;
    // main show where all the card are placed for the home screen by using the map function placing each card on the screen
    return (
        <>
            {Show.length === 0 ? <div className="container my-3"><div className="alert alert-info " role="alert"><i className="fa-sharp fa-solid fa-bomb"> </i> No Result Found
            </div> </div> : <div>
                <h1 className="text-center" style={{ margin: '35px 0px' }}>Top Shows</h1>
                <div className="container">
                    {Show.map((element) => {
                        return <Showitem key={element.show.id} show={element} />
                    })}
                </div>
            </div>}

        </>
    )
}

export default Show