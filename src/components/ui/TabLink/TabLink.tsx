import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './TabLink.module.css';

type TabLinkProps = {
  route: string;
};

export const TabLink = (props: PropsWithChildren<TabLinkProps>) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? `${classes.link} ${classes.active}` : classes.link)}
      to={props.route}
    >
      {props.children}
    </NavLink>
  );
};
