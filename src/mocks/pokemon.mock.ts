import { PokemonEnum } from '@favware/graphql-pokemon';

export const PIKACHU_MOCK = {
  key: PokemonEnum.Pikachu,
  baseStats: {
    attack: 55,
    defense: 40,
    hp: 35,
    specialattack: 50,
    specialdefense: 50,
    speed: 90,
  },
  baseStatsTotal: 320,
  bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/pikachu_(Pokémon)',
  color: 'Yellow',
  eggGroups: ['Field', 'Fairy'],
  flavorTexts: [
    {
      flavor:
        'When several of these Pokémon gather, their electricity can build and cause lightning storms.',
      game: 'Violet',
    },
  ],
  gender: {
    female: '50%',
    male: '50%',
  },
  height: 0.4,
  species: 'pikachu',
  sprite: 'https://play.pokemonshowdown.com/sprites/ani/pikachu.gif',
  weight: 6,
};

export const WARTORTLE_MOCK = {
  key: PokemonEnum.Wartortle,
  baseStats: {
    attack: 63,
    defense: 80,
    hp: 59,
    specialattack: 65,
    specialdefense: 80,
    speed: 58,
  },
  baseStatsTotal: 405,
  bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/wartortle_(Pokémon)',
  color: 'Blue',
  eggGroups: ['Monster', 'Water 1'],
  flavorTexts: [
    {
      flavor:
        'It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity.',
      game: 'Shining Pearl',
    },
  ],
  gender: {
    female: '12.5%',
    male: '87.5%',
  },
  height: 1,
  species: 'wartortle',
  sprite: 'https://play.pokemonshowdown.com/sprites/ani/wartortle.gif',
  weight: 22.5,
};

export const SLOWPOKE_MOCK = {
  key: PokemonEnum.Slowpoke,
  baseStats: {
    attack: 65,
    defense: 65,
    hp: 90,
    specialattack: 40,
    specialdefense: 40,
    speed: 15,
  },
  baseStatsTotal: 315,
  bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/slowpoke_(Pokémon)',
  color: 'Pink',
  eggGroups: ['Monster', 'Water 1'],
  flavorTexts: [
    {
      flavor:
        'It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail.',
      game: 'Violet',
    },
  ],
  gender: {
    female: '50%',
    male: '50%',
  },
  height: 1.2,
  species: 'slowpoke',
  sprite: 'https://play.pokemonshowdown.com/sprites/ani/slowpoke.gif',
  weight: 36,
};

export const MEOWTH_MOCK = {
  key: PokemonEnum.Meowth,
  baseStats: {
    attack: 45,
    defense: 35,
    hp: 40,
    specialattack: 40,
    specialdefense: 40,
    speed: 90,
  },
  baseStatsTotal: 290,
  bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/meowth_(Pokémon)',
  color: 'Yellow',
  eggGroups: ['Field'],
  flavorTexts: [
    {
      flavor:
        'It loves things that sparkle. When it sees a shiny object, the gold coin on its head shines, too.',
      game: 'Violet',
    },
  ],
  gender: {
    female: '50%',
    male: '50%',
  },
  height: 0.4,
  species: 'meowth',
  sprite: 'https://play.pokemonshowdown.com/sprites/ani/meowth.gif',
  weight: 4.2,
};

export const BULBASAUR_MOCK = {
  key: PokemonEnum.Bulbasaur,
  baseStats: {
    attack: 49,
    defense: 49,
    hp: 45,
    specialattack: 65,
    specialdefense: 65,
    speed: 45,
  },
  baseStatsTotal: 318,
  bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/bulbasaur_(Pokémon)',
  color: 'Green',
  eggGroups: ['Monster', 'Grass'],
  flavorTexts: [
    {
      flavor:
        'For some time after its birth, it grows by taking nourishment from the seed on its back.',
      game: 'Shining Pearl',
    },
  ],
  gender: {
    female: '12.5%',
    male: '87.5%',
  },
  height: 0.7,
  species: 'bulbasaur',
  sprite: 'https://play.pokemonshowdown.com/sprites/ani/bulbasaur.gif',
  weight: 6.9,
};

export const POKEMONS_LIST_MOCK = [
  PIKACHU_MOCK,
  WARTORTLE_MOCK,
  SLOWPOKE_MOCK,
  MEOWTH_MOCK,
  BULBASAUR_MOCK,
];
