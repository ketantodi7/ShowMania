import React, { useContext } from 'react'
import showContext from '../Context/ShowContext'
import DetailedItem from './DetailedItem';

const ShowDetails = () => {
  const context = useContext(showContext);
  const { Details } = context; // using context to get the info about the particular card

  // sending a particular file data to DetailedItem to display the card on the screen
  // Details - contain the card Info 

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px' }}>Your Show</h1>

      <div className="container">
        {Details.map((element) => {
          return <DetailedItem key={element.id} show={element} />
        })}
      </div>
    </>
  )
}

export default ShowDetails
