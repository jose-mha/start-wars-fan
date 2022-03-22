import { NavLink as NavLinkReactRouter } from 'react-router-dom';

const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkReactRouter {...props} className={({ isActive }) => (isActive ? 'text-primary underline underline-offset-4' : '')} to={to}>
      {children}
    </NavLinkReactRouter>
  );
};

export default NavLink;
