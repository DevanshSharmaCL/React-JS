//DOM Manipulation 

import React from 'react'

const useRef3=()=>{

    const inputRef=React.useRef(null);

    function handleFocus(){
        inputRef.current.style.backgroundColor='black';
    }

    function handleBlur(){
        inputRef.current.style.backgroundColor='';
    }
    return (
        <div>
            <input ref={inputRef} type="text" onFocus={handleFocus} onBlur={handleBlur} />
        </div>
    )
}

export default useRef3