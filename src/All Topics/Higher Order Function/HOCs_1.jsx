import React from 'react'


// Creation of Higher Order Component
function withLogger(wrappedComponent) {
    return function EnhancedComponent(props){
    console.log('${wrappedComponent.name} rendered')
    return <wrappedComponent {...props}/>
    }
}

//Simple component
function button({label}){
    return <button>{label}</button>
}

//enchance it 
const EnhancedButton = withLogger(button)

//use it 
function app(){
    return <EnhancedButton label="click me"/>
}


export default app