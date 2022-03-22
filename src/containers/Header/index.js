import Menu from '../../components/Menu';

const Header = () => {
  return (
    <header className="w-full h-14 bg-secondary flex p-4 justify-between fixed z-10">
      <div className="h-auto w-auto">
        <p className="text-xl text-primary font-black">Star Wars</p>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
