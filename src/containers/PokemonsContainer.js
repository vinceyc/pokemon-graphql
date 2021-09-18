import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components/Pokemon';

export function PokemonsContainer() {
    const { loading, error, data } = useQuery(GET_POKEMONS);
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data);
  const pokemonArray = data && data.pokemon_v2_pokemon;
  
  return (
    <div className="container">
      {pokemonArray.map(pokemon => <Pokemon pokemonData={pokemon} key={pokemon.id} />)}
    </div>
  )
}
