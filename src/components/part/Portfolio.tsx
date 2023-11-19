import useOnView from '@/hooks/useOnView';
import { ReactElement, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Portfolio = (): ReactElement => {
  const params = useParams();
  const navigate = useNavigate();
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const targetOnView = useOnView({
    target: contentRef,
  });

  useEffect(() => {
    if (targetOnView) {
      navigate('#portfolio');
    }
  }, [targetOnView, navigate]);

  useEffect(() => {
    if (window.location.hash.includes('portfolio')) {
      portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [params]);

  return (
    <DIV_PortfolioWrap className="section" ref={portfolioRef}>
      <div className="section-title">포트폴리오</div>
      <DIV_ContentSection ref={contentRef}></DIV_ContentSection>
    </DIV_PortfolioWrap>
  );
};
const DIV_PortfolioWrap = styled.div`
  background: linear-gradient(0deg, #ffffff 0%, #fef5e7 60%, #fdebd0 100%);
`;

const DIV_ContentSection = styled.div``;
export default Portfolio;
