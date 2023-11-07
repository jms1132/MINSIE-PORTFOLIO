import '@/style/app.css';
import { ReactElement } from 'react';
import styled from 'styled-components';
import Router from './route/Router';

const App = (): ReactElement => {
  return (
    <DIV_App>
      <div className="wrap">
        <Router />
      </div>
    </DIV_App>
  );
};

const DIV_App = styled.div`
  width: 100%;
  height: 100%;
  .wrap {
    min-width: 1200px;
    width: 100%;
  }
`;
export default App;
