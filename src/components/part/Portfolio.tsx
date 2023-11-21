import { usePagePositionSelector } from '@/store/pagePosition/Selector';
import { ReactElement, useEffect, useRef } from 'react';
import { styled } from 'styled-components';

const Portfolio = (): ReactElement => {
  const pagePosition = usePagePositionSelector();
  const portfolioRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (pagePosition === 'portfolio' && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [pagePosition]);

  return (
    <DIV_PortfolioWrap className="section" ref={portfolioRef}>
      <div className="section-title">포트폴리오</div>
      <DIV_ContentSection></DIV_ContentSection>
    </DIV_PortfolioWrap>
  );
};
const DIV_PortfolioWrap = styled.div`
  background: linear-gradient(0deg, #ffffff 0%, #fef5e7 60%, #fdebd0 100%);
`;

const DIV_ContentSection = styled.div``;
export default Portfolio;
