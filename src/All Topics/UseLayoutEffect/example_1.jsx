import React, { useLayoutEffect } from 'react'

function BoxMeasure(){
    const divRef = useRef(null);

    useLayoutEffect(()=>{
        const hieght = divRef.current.getBoundingClientRect().hieght;
    },  []);//runs after dom is ready 

    return (
        <div ref={divRef} style={{ height: '100px', background: 'lightblue' }}>
          I’m a box!
        </div>
      );
}


export default BoxMeasure


// What’s Happening:
// divRef grabs the <div>.
// useLayoutEffect checks its height right after it’s added to the DOM.
// Logs “Div height: 100” before the screen paints.