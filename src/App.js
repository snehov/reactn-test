import React, { Component } from 'reactn'
import logo from './logo.svg'
import Neco from './components/Neco'
import HookComponent from './components/HookComponent'
import HookExample from './components/HookExample'
import './App.css'

class App extends Component {
  componentDidMount() {
    //this.global.fetchData();
    this.setGlobal(
      fetch('https://api.exchangeratesapi.io/latest?base=EUR')
        .then(response => {
          console.log('RES', response)
          return response.text()
        })
        .then(html => {
          return {
            rate: JSON.parse(html).rates.CZK,
          }
        }),
    )
  }

  /* incrementX = () => {
    console.log("incrementik")
    this.setGlobal(state => ({
      x: state.x + 1
    }));
  }; */

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ReactN, EUR is for {this.global.rate} CZK</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          children={this.global.x}
          /* onClick={this.incrementX} */
          onClick={this.global.incrementX}
        />
        <Neco />
        <HookComponent />
        <HookExample argument={this.global.x} />
        <br />
        <button onClick={() => this.global.refreshRate({ date: '2019-04-01' })}>
          REFRESH EUR
        </button>
      </div>
    )
  }
}

export default App
