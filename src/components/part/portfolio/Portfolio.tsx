import Label from '@/components/common/Label';
import { portfolio, portfolioArray } from '@/model/Portfolio';
import { usePagePositionSelector } from '@/store/pagePosition/Selector';
import { Theme } from '@/style/Theme';
import { HoverDefaultstyle } from '@/style/common.style';
import { mobileMedia } from '@/style/deviceWidth';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { css, styled } from 'styled-components';
import PortfolioModal from './modal/PortfolioModal';

const labelColor = {
  Web: {
    background: '#ebdef0',
    color: '#884ea0',
  },
  Mobile: {
    background: '#d1f2eb',
    color: '#148f77',
  },
};

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
    <DIV_PortfolioWrap className="section" ref={portfolioRef}>
      <div className="section-title">포트폴리오</div>
      <DIV_ContentSection className="content-max">
        {portfolioArray.map((item, idx) => (
          <>
            <div key={`portfolio-${idx}`} className="portfolio-item">
              <div className="thumbnail-wrap">
                <img
                  className="click-button blink"
                  src="./images/common/icon-click.svg"
                  alt=""
                />
                <img
                  src={item.thumbnail}
                  alt=""
                  className="thumbnail"
                  onClick={() => setPortfolioModal(item)}
                />
              </div>
              <div className="content">
                <div className="item-header">
                  <div
                    onClick={() => setPortfolioModal(item)}
                    className="item-title"
                  >
                    {item.title}
                  </div>
                  <div className="item-label-list">
                    {(item.labels as string[])?.map?.((label, idx) => (
                      <Label
                        key={`label-${idx}`}
                        name={label}
                        styles={css`
                          ${Theme.Typography.subtitle3};
                          ${Theme.Typography.extraBold};
                          background: ${Object.entries(labelColor).find(
                            (color) => color[0] === label
                          )?.[1].background};
                          color: ${Object.entries(labelColor).find(
                            (color) => color[0] === label
                          )?.[1].color};
                        `}
                      />
                    )) || (
                      <Label
                        name={item.labels as string}
                        styles={css`
                          ${Theme.Typography.subtitle3};
                          ${Theme.Typography.extraBold};
                          background: ${Object.entries(labelColor).find(
                            (color) => color[0] === item.labels
                          )?.[1].background};
                          color: ${Object.entries(labelColor).find(
                            (color) => color[0] === item.labels
                          )?.[1].color};
                        `}
                      />
                    )}
                  </div>
                </div>
                <div className="skill-list">
                  {item.frontend && (
                    <div className="skill-item">
                      <div className="skill-kind">Frontend: </div>
                      {item.frontend.join(', ')}
                      {item.frontend.join(', ')}
                    </div>
                  )}
                  {item.backend && (
                    <div className="skill-item">
                      <div className="skill-kind">Backend: </div>
                      {item.backend.join(', ')}
                    </div>
                  )}
                </div>
                {item.func && (
                  <div className="func">
                    <b>주요 기능: </b>
                    {item.func}
                  </div>
                )}
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  .portfolio-item {
    width: 100%;
    display: flex;
    gap: 30px;
    .thumbnail-wrap {
      width: 50%;
      position: relative;
      border-radius: 8px;
      border: 1px solid rgb(245, 246, 247);

      .click-button {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        background-color: ${Theme.Color.white};
        border-radius: 50%;
        border: 2px solid ${Theme.Color.primary};
        padding: 3px;
        z-index: 100;
      }
      .thumbnail {
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 8px;
        ${HoverDefaultstyle}
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 30px;
      flex: 1;
      word-break: keep-all;
      .item-header {
        .item-title {
          ${Theme.Typography.h3};
          ${Theme.Typography.extraBold};
          font-family: 'Noto Sans';
          ${HoverDefaultstyle}
        }
        .item-label-list {
          padding-top: 10px;
          display: flex;
          gap: 10px;
        }
      }
      .skill-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .skill-item {
          display: flex;
          ${Theme.Typography.subtitle2};

          .skill-kind {
            padding-right: 4px;
            font-family: 'Noto Sans';
          }
        }
      }
      .func {
        font-family: 'GmarketSansLight';
        ${Theme.Typography.subtitle2};
        div:first-child {
          ${Theme.Typography.extraBold};
        }
      }
    }
  }

  ${mobileMedia} {
    gap: 0;

    > * + * {
      border-top: 1px solid ${Theme.Color.gray700};
      padding: 40px 0;
    }
    > *:first-child {
      padding-bottom: 40px;
    }

    .portfolio-item {
      flex-direction: column;
      .thumbnail-wrap {
        width: 100%;
        .click-button {
        }
        .thumbnail {
          width: 100%;
        }
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

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }

  .blink {
    animation: blink-effect 2s step-end infinite;
  }
`;
export default Portfolio;
