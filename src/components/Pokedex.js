import { useState,useRef,useEffect } from "react";
import axios from "axios";

import Pokemon from "./Pokemon";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
function Pokedex() {
  const inputField = useRef(null);

  const [pokemon, setPokemon] = useState(null);
  
  
  const getPokemon = () => {
    console.log(inputField.current.value);
    const URL = `${BASE_URL}/${inputField.current.value}`;
    return fetch(URL)
    .then(res=>res.json())
    .then(results => setPokemon(results));
  };

  return (
    <div>
      <div >
        <input
          type="text"
          placeholder="Enter Pokemon No."
          ref={inputField}
        />
        <input type="button" value="Get Pokemon!!" onClick={ getPokemon}/>
      </div>
      {pokemon && <Pokemon pokemon={pokemon} />}
    </div>
  );
}

export default Pokedex;
