import { Pokemon } from '@favware/graphql-pokemon';
import { useCallback } from 'react';
import classes from './CardPopup.module.css';

type AlertProps = {
  pokemon: Partial<Pokemon>;
  close: (pokemon: Partial<Pokemon>) => void;
};

export const CardPopup = ({ pokemon, close }: AlertProps) => {
  const handleClose = useCallback(() => {
    close(pokemon);
  }, [close, pokemon]);

  return (
    <div className={classes.popup}>
      <h2 className={classes.title}>{pokemon.key}</h2>
      <img className={classes.sprite} src={pokemon.sprite}></img>
      <div className={classes.description}>
        {pokemon.flavorTexts?.map((text) => (
          <p key={text.game} className={classes.description__text}>
            {text.flavor}
          </p>
        )) || ''}

        <div className={classes.description__info}>
          <ul className={classes.description__info_block}>
            <li className={classes.description__item}>Color: {pokemon.color || '-'}</li>
            <li className={classes.description__item}>Weight: {pokemon.weight || '-'}</li>
            <li className={classes.description__item}>Height: {pokemon.height || '-'}</li>
            <li className={classes.description__item}>
              <div className={classes.itemGroup}>
                Gender:&nbsp;
                <div>
                  Female-{pokemon.gender.female || '0%'} <br />
                  Male-{pokemon.gender.male || '0%'}
                </div>
              </div>
            </li>
            <li className={classes.description__item}>Egg groups: {pokemon.eggGroups || '-'}</li>
          </ul>

          <ul className={classes.description__info_block}>
            <li className={classes.description__item}>Attack: {pokemon.baseStats.attack || '-'}</li>
            <li className={classes.description__item}>
              Defense: {pokemon.baseStats.defense || '-'}
            </li>
            <li className={classes.description__item}>HP: {pokemon.baseStats.hp || '-'}</li>
            <li className={classes.description__item}>Speed: {pokemon.baseStats.speed || '-'}</li>
            <li className={classes.description__item}>
              Special attack: {pokemon.baseStats.specialattack || '-'}
            </li>
            <li className={classes.description__item}>
              Special defense: {pokemon.baseStats.specialdefense || '-'}
            </li>
          </ul>
        </div>
      </div>

      <button className={`${classes.close} material-symbols-outlined`} onClick={handleClose}>
        close
      </button>
    </div>
  );
};
