import React, { useState, useReducer } from 'react'
import { useGlobal, addReducer } from 'reactn'
import { reducer } from '../reducer'

const HookComponent = () => {
  const [localText, setLocalText] = useState('Hello world!')
  const [globalText, setGlobalText] = useGlobal('globalText')
  const [x, setX] = useGlobal('x')
  //const [ global, setGlobal ] = useGlobal();
  const [state, dispatch] = useReducer(reducer, { x: 0 })

  return (
    <div>
      localText: {localText}
      <br />
      globalText: {globalText}
      <br />
      aa co iks:{x}
      <br />
      <button
        onClick={() => {
          /* setGlobal({
          x: global.x + 1
        }         );*/
          setX(x + 2)
        }}
      >
        Click Me to add 2: {x}
      </button>
      <br />
      <button onClick={() => dispatch({ type: 'incrementTwo' })}>
        add 2 via local reducer
      </button>
      <button onClick={() => setLocalText('Ahoj světe!')}>
        změn local text
      </button>
      <button onClick={() => setGlobalText('Ahoj celý světe!')}>
        změn global text
      </button>
    </div>
  )
}

export default HookComponent
