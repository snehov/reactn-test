import React, { Component } from 'reactn'
import { useGlobal, addReducer } from 'reactn'

class Neco extends Component {
  addThree = () => {
    console.log('incrementik o 3')
    this.setGlobal(state => ({
      x: state.x + 3,
    }))
  }

  render() {
    return (
      <div>
        <p>toto je neco a bere z global state X:{this.global.x}</p>
        <button onClick={this.addThree}>add 3</button>
        <button onClick={this.global.incrementXtwice}>
          add 2 via global reducer
        </button>
      </div>
    )
  }
}
export default Neco
