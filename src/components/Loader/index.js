const Loader = () => {
  return (
    <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-10">
      <div className="top-1/2 my-0 mx-auto block relative w-0 h-0">
        <div className="w-16 h-16 border-4 border-dar border-amber-500 border-dashed rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
