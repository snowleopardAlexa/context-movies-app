import React, {useContext} from "react";
import {MovieContext} from './MovieContext';

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <nav className="navbar">
            <ul className="list">
            <h3>Alexa</h3>
            <p>List of Movies: {movies.length}</p>
            </ul>
        </nav>
    );
}

export default Nav;