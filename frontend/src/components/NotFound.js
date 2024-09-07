import React from 'react'
import { Link } from 'react-router-dom';
function NotFound() {
    return ( 
        <div className='container text-center m-5 p-5'>
            <h1>404 NOT FOUND</h1>
            <p>We couldn’t find the page you were looking for. <Link className='text-decoration-none' to={"/"}>Visit Health Buddy’s home page</Link></p>
        </div>
     );
}

export default NotFound;