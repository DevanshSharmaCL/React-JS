import React, { useReducer } from 'react'

//this will toggle the values between true and false
function reducer(state, action) {
    if ( action.type === 'toggle'){
        return !state//toggle the values
    }
    return state
}

function Switch(){
    const [isOn,dispatch]=useReducer(reducer,false);

    return(
        <div>
            <p>The Switch is {isOn?'ON':'OFF'}</p>
            <button onClick={()=>dispatch({type:'toggle'})}>toggle</button>
        </div>
    )

}


export default Switch

// What’s Happening:
// isOn starts as false.
// dispatch({ type: 'toggle' }) flips it to true or false.
// The text updates accordingly.