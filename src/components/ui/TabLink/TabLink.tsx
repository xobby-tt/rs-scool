import { Component, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './TabLink.module.css';

type TabLinkProps = {
  route: string;
};

class TabLink extends Component<PropsWithChildren<TabLinkProps>> {
  render() {
    return (
      <NavLink
        className={({ isActive }) =>
          isActive ? `${classes.link} ${classes.active}` : classes.link
        }
        to={this.props.route}
      >
        {this.props.children}
      </NavLink>
    );
  }
}

export default TabLink;
