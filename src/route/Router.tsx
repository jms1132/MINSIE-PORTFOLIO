import Home from '@/pages/Home';
import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
