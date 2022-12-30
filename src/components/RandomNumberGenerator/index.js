// Write your code here
import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {no: 0}

  click = () => {
    this.setState({no: Math.round(Math.random() * 100)})
  }

  render() {
    const {no} = this.state
    return (
      <div className="mainContainer">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.click}>
            Generate
          </button>
          <p className="msg">{no}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
