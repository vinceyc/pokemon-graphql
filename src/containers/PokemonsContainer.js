import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/get-pokemons';

export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {});

  return (
    <div className="container">
      {pokemons && pokemons.map(pokemon => console.log(pokemon))}
    </div>
  )
}