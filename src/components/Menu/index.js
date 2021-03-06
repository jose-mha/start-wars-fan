import NavLink from '../NavLink';

const Menu = () => {
  return (
    <nav className="h-auto w-auto">
      <ul className="flex space-x-8">
        <li className="font-bold text-md text-white hover:underline underline-offset-4">
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li className="font-bold text-md text-white hover:underline underline-offset-4">
          <NavLink to="/favorites">Favoritos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
