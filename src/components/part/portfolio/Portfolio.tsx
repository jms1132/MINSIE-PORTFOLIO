import Label from '@/components/common/Label';
import { portfolio, portfolioArray } from '@/model/Portfolio';
import { usePagePositionSelector } from '@/store/pagePosition/Selector';
import { Theme } from '@/style/Theme';
import { HoverDefaultstyle } from '@/style/common.style';
import { mobileMedia } from '@/style/deviceWidth';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { css, styled } from 'styled-components';
import PortfolioModal from './modal/PortfolioModal';

const Portfolio = (): ReactElement => {
  const pagePosition = usePagePositionSelector();
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const [portfolioModal, setPortfolioModal] = useState<portfolio | undefined>(
    undefined
  );

  useEffect(() => {
    if (pagePosition === 'portfolio' && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [pagePosition]);

  return (
    <DIV_PortfolioWrap className="section content-max" ref={portfolioRef}>
      <div className="section-title">포트폴리오</div>
      <DIV_ContentSection>
        {portfolioArray.map((item, idx) => (
          <>
            <div key={`portfolio-${idx}`} className="portfolio-item">
              <img
                onClick={() => setPortfolioModal(item)}
                src={item.img}
                alt=""
              />

              <div className="content">
                <div
                  onClick={() => setPortfolioModal(item)}
                  className="item-title"
                >
                  {item.title}
                </div>
                <div className="item-label-list">
                  {item.label.includes('web') && (
                    <Label
                      name={'Web'}
                      styles={css`
                        ${Theme.Typography.subtitle3};
                        ${Theme.Typography.extraBold};
                        background: #ebdef0;
                        color: #884ea0;
                      `}
                    />
                  )}
                  {item.label.includes('mobile') && (
                    <Label
                      name={'Mobile'}
                      styles={css`
                        ${Theme.Typography.subtitle3};
                        ${Theme.Typography.extraBold};
                        background: #d1f2eb;
                        color: #148f77;
                      `}
                    />
                  )}
                </div>
              </div>
            </div>
          </>
        ))}
      </DIV_ContentSection>
      {portfolioModal?.kind === 'portfolio' && (
        <PortfolioModal
          onClose={() => setPortfolioModal(undefined)}
          portfolio={portfolioModal}
        />
      )}
    </DIV_PortfolioWrap>
  );
};
const DIV_PortfolioWrap = styled.div`
  background: linear-gradient(0deg, #ffffff 0%, #fef5e7 60%, #fdebd0 100%);
`;

const DIV_ContentSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .portfolio-item {
    display: flex;
    gap: 30px;

    img {
      width: 50%;
      border-radius: 8px;
      ${HoverDefaultstyle}
    }
    .content {
      .item-title {
        ${Theme.Typography.subtitle1};
        ${Theme.Typography.extraBold};
        font-family: 'Noto Sans';
        ${HoverDefaultstyle}
      }
      .item-label-list {
        padding-top: 20px;
        display: flex;
        gap: 10px;
      }
    }
  }

  ${mobileMedia} {
    .portfolio-item {
      flex-direction: column;
      img {
        width: 100%;
      }
      .content {
        .item-title {
        }
        .item-label-list {
          padding-top: 10px;
        }
      }
    }
  }
`;
export default Portfolio;
