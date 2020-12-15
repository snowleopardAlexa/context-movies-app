import React from "react";
import './App.css';
import Nav from './Nav';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import {MovieProvider} from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
     <Nav />
     <AddMovie />
     <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;

// We can have a state in App.js component but it is not efficient.
// The App.js has nothing to do with a state, but let's say we lifted the state from MovieList to
// App.js, what's happening? Now, we need to do PROP DRILLING, passing props down all the components
// - it is inefficient practice, this is why we use Context. 

