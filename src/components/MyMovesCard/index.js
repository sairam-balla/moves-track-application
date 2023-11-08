import {
  AiFillHome,
  AiOutlineArrowRight,
  AiFillWarning,
  AiFillCheckSquare,
} from 'react-icons/ai'
import {FaBoxes, FaCalendarCheck} from 'react-icons/fa'
import {GiPathDistance} from 'react-icons/gi'
import './index.css'

const MyMovesCard = props => {
  const {
    estimateId,
    movingFrom,
    movingTo,
    movingOn,
    distance,
    propertySize,
    totalItems,
    moveItemClicked,
  } = props

  const itemClicked = () => {
    moveItemClicked(estimateId)
  }
  return (
    <div className="move-cards-container">
      <div className="move-card-container">
        <div className="place-container">
          <h1>From</h1>
          <p>{movingFrom}</p>
        </div>
        <div className="arrow-icon">
          <AiOutlineArrowRight />
        </div>

        <div className="place-container">
          <h1>To</h1>
          <p>{movingTo}</p>
        </div>
        <div>
          <h1>Request#</h1>
          <p>{estimateId}</p>
        </div>
      </div>
      <div className="row-container">
        <div className="details-container">
          <AiFillHome className="icons" />
          <p>{propertySize}</p>
        </div>
        <div className="details-container">
          <FaBoxes className="icons" />
          <p>{totalItems}</p>
        </div>
        <div className="details-container">
          <GiPathDistance className="icons" />
          <p>{distance}</p>
        </div>
        <div className="details-container">
          <FaCalendarCheck className="icons" />
          <p>{movingOn}</p>
        </div>
        <div className="details-container">
          <AiFillCheckSquare className="icons" />
          <p>Is flexible</p>
        </div>
        <div className="details-container">
          <button
            type="button"
            className="details-button"
            onClick={itemClicked}
          >
            View move details
          </button>
        </div>
        <div className="details-container">
          <button type="button" className="quotes-button">
            Quotes
          </button>
        </div>
      </div>
      <div className="center-div">
        <div className="arrow-icon">
          <AiFillWarning />
        </div>
        <p>
          Disclaimer: Please update your move date before two days of shifting
        </p>
      </div>
      <hr />
    </div>
  )
}

export default MyMovesCard
