import { gql } from "graphql-tag";

export const GET_POKEMONS = gql`
  query GetPokemons {
    pokemon_v2_pokemon(limit: 10) {
        id
        name
    }
  }
`;