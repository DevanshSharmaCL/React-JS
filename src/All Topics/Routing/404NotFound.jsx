import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//pages

function home(){
    return <h1>Home Page</h1>
}

function about(){  
    return <h1>About Page</h1>
}

function notFound(){
    return <h1>404 Not Found</h1>
} 


function App() {
    return(
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>|<Link to="/about">About</Link>
               <link to="/oops">Oops</link>
            </nav>
            <Routes>
                <Route path="/" element={<home />} />
                <Route path="/about" element={<about />} />
                <Route path="*" element={<notFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;


// What’s Happening:
// path="*" matches any URL that doesn’t fit the other routes.
// Go to /oops (or anything random), and you’ll see “404 - Page Not Found.”
