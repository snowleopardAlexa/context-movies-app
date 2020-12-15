import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addMovie = e => {
        // it stops the page from refreshing when you click submit the form
        e.preventDefault();
        // ... -> its going to make a copy of array of objects
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
    }

    return (
        <form onSubmit={addMovie} style={{marginTop: "30px"}}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input 
               type="text" 
               name="price" 
               value={price}
               onChange={updatePrice} 
            />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;