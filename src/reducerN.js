import React from 'react'
import { setGlobal, addReducer, addCallback } from 'reactn'

setGlobal({
  data: null,
  x: 9,
  globalText: 'some random global text',
  rate: '...',
})

// Every time the global state changes, this function will execute.
addCallback(global => {
  // console.log("The new store is:", global);
  window.__globalState__ = global
});

addReducer('incrementX', state => ({
  x: state.x + 1,
}))

addReducer('incrementXtwice', state => {
  console.log('incr 2 via reducer')
  return {
    x: state.x + 2,
  }
})

addReducer('refreshRate', (state, params) => {
  const day = params.date ? params.date : 'latest'
  return fetch('https://api.exchangeratesapi.io/' + day + '?base=EUR')
    .then(response => response.text())
    .then(html => {
      return {
        rate: JSON.parse(html).rates.CZK,
      }
    })
})
