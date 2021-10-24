// import axios from "axios";

import { useState } from "react";

function Pokemon({ pokemon }) {
  const pokemonStats = pokemon.stats;
  const pokemonTypes = pokemon.types;
  const pokemonMoves = pokemon.moves;
  const pokemonAbilities = pokemon.abilities;
  const pokemonSpecies = pokemon.species;

  const [pokemonColor, setPokemonColor] = useState();

  const getPokemonSpecies = async () => {
    const response = await fetch(pokemonSpecies.url);
    const data = await response.json();
    setPokemonColor(data.color.name);
  };

  getPokemonSpecies();

  let id = 0;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img
        src={
          pokemon.sprites.other.dream_world.front_default ||
          pokemon.sprites.front_default
        }
        alt=""
        style={{
          border: "1px solid black",
        }}
      />

      <h2>Color</h2>
      <ul>
        <li>{pokemonColor}</li>
      </ul>

      <h2>Type</h2>
      <ul>
        {pokemonTypes.map((el) => (
          <li key={el.slot}>{el.type.name}</li>
        ))}
      </ul>

      <h2>Abilities</h2>
      <ul>
        {pokemonAbilities.map((el) => (
          <li key={el.slot}>{el.ability.name}</li>
        ))}
      </ul>

      <h2>Stats</h2>
      <ul>
        {pokemonStats.map((el) => (
          <li key={id++}>
            {el.stat.name} : {el.base_stat}
          </li>
        ))}
      </ul>

      <h2>Moves</h2>
      <ul>
        {pokemonMoves.slice(0, 5).map((el) => (
          <li>{el.move.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemon;
