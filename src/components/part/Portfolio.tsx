import { ReactElement, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Portfolio = (): ReactElement => {
  const params = useParams();
  const portfolioRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.location.hash.includes('portfolio')) {
      portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [params]);

  return (
    <DIV_Portfolio className="section" ref={portfolioRef}>
      <div className="section-title">포트폴리오</div>
    </DIV_Portfolio>
  );
};
const DIV_Portfolio = styled.div`
  background: linear-gradient(0deg, #ffffff 0%, #fef5e7 60%, #fdebd0 100%);
`;

export default Portfolio;
