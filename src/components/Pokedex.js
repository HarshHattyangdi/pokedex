import { useState } from "react";
import axios from "axios";

import Pokemon from "./Pokemon";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
function Pokedex() {
  const [state, setstate] = useState();
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.get(`${BASE_URL}/${state}`);
      const poke = res.data;
      setPokemon(poke);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => getPokemon(e)}>
        <input
          type="text"
          placeholder="Enter Pokemon No."
          onChange={(e) => {
            setstate(e.target.value.toLowerCase());
          }}
        />
        <input type="submit" value="Get Pokemon!!" />
      </form>
      {pokemon && <Pokemon pokemon={pokemon} />}
    </div>
  );
}

export default Pokedex;
