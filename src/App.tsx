import '@/style/app.css';
import { ReactElement } from 'react';
import styled from 'styled-components';
import useResize from './hooks/useResize';
import Router from './route/Router';

const App = (): ReactElement => {
  useResize();

  return (
    <DIV_App id="app" className="app">
      <div className="wrap">
        <Router />
      </div>
    </DIV_App>
  );
};

const DIV_App = styled.div`
  width: 100%;
  height: 100%;
`;
export default App;
