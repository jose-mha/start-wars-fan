import { NavLink as NavLinkReactRouter } from 'react-router-dom';

const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkReactRouter {...props} className={({ isActive }) => (isActive ? 'is-active' : '')} to={to}>
      {children}
    </NavLinkReactRouter>
  );
};

export default NavLink;
