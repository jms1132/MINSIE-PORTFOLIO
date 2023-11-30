import Assets from '@/assets/Assets';
import DisableScroll from '@/components/common/DisableScroll';
import Icon from '@/components/common/Icon';
import Label from '@/components/common/Label';
import Link from '@/components/common/Link';
import Modal from '@/components/common/Modal';
import ImageSlider from '@/components/common/slider/ImageSlider';
import SliderArrow from '@/components/common/slider/SliderArrow';
import { portfolio } from '@/model/Portfolio';
import { useDeviceSelector } from '@/store/device/Selector';
import { Theme } from '@/style/Theme';
import {
  HideScrollbarStyle,
  ScrollbarDefaultStyle,
} from '@/style/common.style';
import { mobileMedia } from '@/style/deviceWidth';
import { ReactElement, useMemo } from 'react';
import { Settings } from 'react-slick';
import styled, { css } from 'styled-components';
import SummaryRow from './common/SummaryRow';

interface PortfolioModalProps {
  onClose?: () => void;
  portfolio: portfolio;
}
const PortfolioModal = (props: PortfolioModalProps): ReactElement => {
  const { portfolio } = props;
  const { isMobile } = useDeviceSelector();
  const randomColor = useMemo(() => {
    return ['#F5B7B1', '#D7BDE2', '#AED6F1', '#F9E79F', '#A9DFBF', '#FAD7A0'];
  }, []);

  const labelColor = useMemo(() => {
    return {
      Web: {
        background: '#ebdef0',
        color: '#884ea0',
      },
      Mobile: {
        background: '#d1f2eb',
        color: '#148f77',
      },
    };
  }, []);

  const sliderSettings: Settings = useMemo(() => {
    return {
      fade: false,
      autoplay: true,
      autoplaySpeed: 1800,
      arrows: true,
      nextArrow: (
        <SliderArrow>
          <Icon asset={Assets.arrowThin12} color={Theme.Color.system.white} />
        </SliderArrow>
      ),
      prevArrow: (
        <SliderArrow>
          <Icon asset={Assets.arrowThin12} color={Theme.Color.system.white} />
        </SliderArrow>
      ),
    };
  }, []);

  const headerContent = useMemo(() => {
    return (
      <DIV_Header>
        <span>project</span>
        <div className="header-title">
          {portfolio.title}
          <div className="item-label-list">
            {(portfolio.labels as string[])?.map?.((label, idx) => (
              <Label
                key={`label-${idx}`}
                name={label}
                styles={css`
                  ${Theme.Typography.caption1};
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
                name={portfolio.labels as string}
                styles={css`
                  ${Theme.Typography.caption1};
                  ${Theme.Typography.extraBold};
                  background: ${Object.entries(labelColor).find(
                    (color) => color[0] === portfolio.labels
                  )?.[1].background};
                  color: ${Object.entries(labelColor).find(
                    (color) => color[0] === portfolio.labels
                  )?.[1].color};
                `}
              />
            )}
          </div>
        </div>
      </DIV_Header>
    );
  }, [portfolio, labelColor]);

  const mainContent = useMemo(() => {
    return (
      <DIV_MainContent>
        <div className="thumbnail-wrap">
          {portfolio.video ? (
            <video className="thumbnail" autoPlay loop muted playsInline>
              <source src={portfolio.video} type="video/mp4" />
            </video>
          ) : (
            <ImageSlider
              className="thumbnail thumbnail-slider"
              sliderSettings={sliderSettings}
            >
              {portfolio.img?.map((img, idx) => (
                <img key={`img-${idx}`} src={img} alt="" />
              ))}
            </ImageSlider>
          )}
        </div>
        <div className="summary">
          <SummaryRow
            name={'SKILLS'}
            content={portfolio.frontend.map((skill, index) => (
              <Label
                name={skill}
                key={index}
                styles={css`
                  background: ${randomColor[index % randomColor.length]};
                  color: ${Theme.Color.black};
                `}
              />
            ))}
          />
          <SummaryRow
            name={'TOOLS'}
            content={
              (portfolio.tools as string[])?.map?.((tool, idx) => {
                return (
                  <Label
                    name={tool}
                    key={idx}
                    styles={css`
                      background: #e5e7e9;
                    `}
                  />
                );
              }) || (
                <Label
                  name={portfolio.tools as string}
                  styles={css`
                    background: #e5e7e9;
                  `}
                />
              )
            }
          />
          <SummaryRow
            styles={css`
              .content {
                word-break: break-all;
              }
            `}
            name={'GitHub'}
            content={
              <Link
                href={portfolio.github}
                target="_blank"
                styles={css`
                  text-decoration: underline;
                  text-underline-position: under;
                `}
              >
                {portfolio.github}
              </Link>
            }
          />
          {portfolio.period && (
            <SummaryRow name={'개발 기간'} content={portfolio.period} />
          )}
          {portfolio.member && (
            <SummaryRow name={'참여 인원'} content={portfolio.member} />
          )}
          <SummaryRow name={'주요 기능'} content={portfolio.content} />
        </div>
      </DIV_MainContent>
    );
  }, [portfolio, randomColor, sliderSettings]);

  return (
    <>
      <DisableScroll enable />
      <Modal
        open
        close={props.onClose}
        header={headerContent}
        content={mainContent}
        styles={modalStyle}
        closeButton={
          isMobile ? (
            <Icon asset={Assets.closeBold16} color={Theme.Color.system.black} />
          ) : (
            <Icon asset={Assets.closeBold16} color={Theme.Color.system.white} />
          )
        }
      />
    </>
  );
};

const modalStyle = css`
  .modal-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
    max-height: 90vh;
    width: 700px;
    background-color: ${Theme.Color.white};
    color: ${Theme.Color.black};
    border-radius: 6px;
    padding: 40px 50px 50px;

    .modal-close-btn {
      position: absolute;
      top: 0px;
      right: -15px;
    }

    > main {
      display: block;
      overflow: auto;
      ${ScrollbarDefaultStyle}
    }
  }

  ${mobileMedia} {
    .modal-inner {
      width: 100%;
      height: 100%;
      max-height: 90%;
      max-width: 90%;
      background-color: ${Theme.Color.white};
      color: ${Theme.Color.black};
      padding: 30px 30px;

      .modal-close-btn {
        display: unset;
        position: absolute;
        top: 18px;
        right: 30px;
        height: initial;
        width: initial;
      }
      > main {
        ${HideScrollbarStyle}
      }
    }
  }
`;

const DIV_Header = styled.div`
  margin-bottom: 30px;
  span {
    font-size: 15px;
    ${Theme.Typography.extraBold};
  }
  .header-title {
    ${Theme.Typography.h1};
    ${Theme.Typography.extraBold};
    font-family: 'Noto Sans';

    display: flex;
    align-items: center;
    gap: 20px;
    .item-label-list {
      display: flex;
      gap: 10px;
    }
  }

  ${mobileMedia} {
    margin-bottom: 20px;

    span {
      font-size: 15px;
    }
    .header-title {
      ${Theme.Typography.h2};
    }
  }
`;

const DIV_MainContent = styled.div`
  padding-right: 10px;
  .thumbnail-wrap {
    width: 100%;
    position: relative;
    .thumbnail {
    }

    .thumbnail {
      width: 100%;
      margin-bottom: 40px;
      border-radius: 8px;
      border: 1px solid rgb(245, 246, 247);
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);

      &.thumbnail-slider {
        .slick-slider {
          background-color: ${Theme.Color.white};
          position: initial;
          > .slick-arrow {
            visibility: visible;
            display: flex !important;
            justify-content: center;
            align-items: center;
            border-radius: 50%;

            background-color: ${Theme.Color.gray700};
            width: 32px;
            height: 32px;
            &:hover {
              background-color: ${Theme.Color.gray900};
            }
            &.slick-prev {
              left: 25px;
              > svg {
                transform: rotate(-180deg);
              }
            }
            &.slick-next {
              right: 25px;
            }
            &::before {
              display: none;
              background: none;
            }
          }
          .slick-slide {
            width: 100%;
          }
        }
      }
    }
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 14px;
    .content {
      li {
        list-style-position: inside;
        text-indent: -20px;
        font-size: 15px;
        color: ${Theme.Color.gray700};
      }
    }
  }

  ${mobileMedia} {
    video {
      margin-bottom: 30px;
    }

    .summary {
      display: flex;
      flex-direction: column;
      gap: 14px;
      ${Theme.Typography.subtitle3};
    }
  }
`;
export default PortfolioModal;
