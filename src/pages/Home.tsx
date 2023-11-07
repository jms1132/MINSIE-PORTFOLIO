import Section1 from '@/components/Section1';
import DefaultTemplate from '@/components/template/DefaultTemplate';
import { ReactElement } from 'react';




const Home = (): ReactElement => {
  return (
    <>
      <DefaultTemplate>
        <Section1 />
      </DefaultTemplate>
    </>
  );
};

export default Home;
