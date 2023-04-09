import type { Pokemon } from '@favware/graphql-pokemon';
import { createContext, PropsWithChildren, useCallback, useState } from 'react';
import { CardPopup } from '../CardPopup';
import classes from './CardPopupHost.module.css';

export const PopupContext = createContext({
  popups: [],
  openPopup: (_pokemon: Partial<Pokemon>) => {},
});

export const CardPopupHost = (props: PropsWithChildren<object>) => {
  const [popups, setPopups] = useState<Partial<Pokemon>[]>([]);

  const openPopup = useCallback(
    (popup: Partial<Pokemon>) => {
      console.log(popup);
      setPopups([...popups, popup]);
    },
    [setPopups, popups]
  );

  const closePopup = useCallback(
    (popup: Partial<Pokemon>) => {
      setPopups([...popups.filter((popupItem) => popupItem !== popup)]);
    },
    [setPopups, popups]
  );

  const handleClickOutside = () => {
    setPopups([]);
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <PopupContext.Provider value={{ popups, openPopup }}>{props.children}</PopupContext.Provider>

      {popups.length ? (
        <div className={classes.popupConainer} onClick={handleClickOutside}>
          {popups.map((popup) => (
            <div key={popup.key} className={classes.popup} onClick={stopPropagation}>
              <CardPopup pokemon={popup} close={closePopup}></CardPopup>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </>
  );
};
