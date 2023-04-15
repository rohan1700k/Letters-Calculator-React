import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeInput = event => {
    const val = event.target.value
    this.setState(prevState => ({
      count: val.length,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="input">Enter the phrase</label> <br />
          <input type="text" id="input" onChange={this.onChangeInput} />
          <p>No.of letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            height="70%"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
