import React from 'react';
import { Link, useRouteError } from 'react-router';
import Home from '../Home/Home';


const ErrorPage = () => {
const error=useRouteError()
console.log(error);


    return (
        <div>
            <h2>Oops!!!</h2>
            <p>
                {error.statusText || error.message}

                {
                    error.status === 404 && <div>
                        <h3>Page not found</h3>
                        <p>Go back where you from</p>
                        <Link to="/"><button>Home</button></Link>
                    </div>
                }
            </p>
        </div>
    );
};

export default ErrorPage;