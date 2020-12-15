import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
         name: 'Harry Potter and the Chambers of Secrets',
         price: '$10',
         id: 23124
        },
        {
         name: 'The Lion King',
         price: '$20',
         id: 34567
        },
        {
         name: 'Frozen',
         price: '$30',
         id: 45678
        }
     ]);
return (
     <MovieContext.Provider value={[movies, setMovies]}>
       {props.children}
     </MovieContext.Provider>
  );
}
