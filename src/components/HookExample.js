import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useGlobal } from 'reactn'

const HookExample = ({ argument }) => {
  console.log('hook ergs argument', argument)
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)
  const [rate, setRate] = useGlobal('rate')

  // Similar to componentDidMount and componentDidUpdate:
  // run your “effect” function AFTER flushing changes to the DOM
  // React runs the effects after every render, incl. fist one
  useEffect(() => {
    console.log('usingEFFECT')
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })
  // this is something like before render, and its synchroniously blocking
  // its more for a server rendering stuff, try to avoid this anyway
  useLayoutEffect((...e) => {
    console.log('useLayoutEffect', e)
  })

  return (
    <div>
      <p>
        You clicked {count} times. ARG[{argument}]
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>the rate is {rate}</p>
    </div>
  )
}
export default HookExample
