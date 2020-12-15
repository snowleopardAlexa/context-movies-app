import React from "react";

const Movie = (props) => {
    return (
        <div>
          <h3>{props.name}</h3>
          <p>{props.price}</p>
        </div>
    );
}

export default Movie;

// We can also pass props this way:
// const Movie = ({ name, price }) => {
// return (
//  <div>
//     <h3>{name}</h3>    
//   )
//  </div>
//   );
// };