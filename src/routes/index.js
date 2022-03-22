import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';

const RoutesComponet = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponet;
