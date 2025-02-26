import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//Pages

function Home(){
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}

function About(){
    return(
        <div>
            <h1>About</h1>
        </div>
    )
}

//App with routing
function app (){
    return(
        <BrowserRouter>
            <nav>
                <link to='/'>Home</link>|<link to='/about'>About</link>
            </nav>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default app