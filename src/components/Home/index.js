import {Component} from 'react'
import MyMovesCard from '../MyMovesCard'
import './index.css'

class Home extends Component {
  state = {customerEstimations: '', isClicked: false, clickedItem: ''}

  componentDidMount() {
    this.getMovesdata()
  }

  convertingData = newData => ({
    estimateId: newData.estimate_id,
    movingFrom: newData.moving_from,
    movingTo: newData.moving_to,
    movingOn: newData.moving_on,
    distance: newData.distance,
    propertySize: newData.property_size,
    totalItems: newData.total_items,
  })

  getMovesdata = async () => {
    const movesUrl =
      'https://run.mocky.io/v3/3d59aba6-f03d-44b5-aa8c-1fac10657d3b'
    const response = await fetch(movesUrl)
    const data = await response.json()
    const estimatedData = data.Customer_Estimate_Flow
    const newData = estimatedData
    const updatedData = newData.map(each => this.convertingData(each))

    this.setState({customerEstimations: [...updatedData]})
  }

  renderReturnSelectView = () => {
    const {customerEstimations, clickedItem} = this.state
    const clickedItemDetails = customerEstimations.filter(
      each => each.estimateId === clickedItem,
    )
    console.log(clickedItemDetails)
    return (
      <div>
        <MyMovesCard
          {...clickedItemDetails}
          moveItemClicked={this.moveItemClicked}
        />
      </div>
    )
  }

  moveItemClicked = id => {
    const {isClicked} = this.state
    if (isClicked === false) {
      this.setState({isClicked: true, clickedItem: id})
    } else {
      this.setState({isClicked: false, clickedItem: ''})
    }
  }

  render() {
    const {customerEstimations, isClicked} = this.state
    const renderData = [...customerEstimations]

    return (
      <div className="bg-container">
        <div className="side-panel">
          <ul>
            <button type="button">
              <li>MY MOVES</li>
            </button>
            <button type="button">
              <li>MY PROFILE</li>
            </button>
            <button type="button">
              <li>GET QUOTE</li>
            </button>
            <button type="button">
              <li>LOGOUT</li>
            </button>
          </ul>
        </div>

        <div>
          {isClicked === true ? (
            this.renderReturnSelectView()
          ) : (
            <div>
              <h1>My Moves</h1>
              {renderData.map(each => (
                <MyMovesCard
                  key={each.estimateId}
                  {...each}
                  moveItemClicked={this.moveItemClicked}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
