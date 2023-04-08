import { gql } from '@apollo/client';

export const GET_ALL_POKEMONS = gql`
  {
    getAllPokemon(take: 20) {
      key
      baseForme
      baseSpecies
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      baseStatsTotal
      bulbapediaPage
      color
      cosmeticFormes
      eggGroups
      flavorTexts {
        flavor
        game
      }
      gender {
        female
        male
      }
      height
      species
      sprite
      weight
    }
  }
`;

export const SEARCH = gql`
  query getFuzzyItem($item: String!) {
    getFuzzyItem(item: $item, take: 10) {
      sprite
    }
  }
`;
