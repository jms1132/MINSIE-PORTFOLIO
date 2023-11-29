/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDeviceSelector } from '@/store/device/Selector';
import { ArrowDirectionStyle } from '@/style/IconStyle';
import { mobileMedia } from '@/style/deviceWidth';
import SlickThemeStyle from '@/style/slick-theme.style';
import SlickStyleStyle from '@/style/slickStyle.style';
import { Property } from 'csstype';
import { MouseEvent, ReactElement, ReactNode, useEffect, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import styled from 'styled-components';

interface StyledImageSliderProps {
  width?: string;
  overflow?: Property.Overflow;
}

interface ImageSliderProps extends StyledImageSliderProps {
  children: ReactNode;
  sliderSettings?: Settings;
  className?: string;
  tabActiveIndex?: number;
  mobileArrowsEnabled?: boolean;
}

const defaultProps = {
  width: '100%',
  overflow: 'hidden',
};

const ImageSlider = (
  props: ImageSliderProps & typeof defaultProps
): ReactElement => {
  const { isMobile } = useDeviceSelector();
  const { tabActiveIndex } = props;

  const mouseClickRef = useRef({
    x: 0,
    y: 0,
    handleMouseDown: (e: MouseEvent) => {
      mouseClickRef.current.x = e.clientX;
      mouseClickRef.current.y = e.clientY;
    },
    handleClick: (e: MouseEvent) => {
      if (
        mouseClickRef.current.x !== e.clientX ||
        mouseClickRef.current.y !== e.clientY
      ) {
        e.stopPropagation();
      }
    },
  });

  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    if (sliderRef.current !== null && tabActiveIndex !== undefined) {
      sliderRef.current.slickGoTo(tabActiveIndex, false);
      return;
    }
  }, [tabActiveIndex]);

  return (
    <DIV_ImageSliderWrapper
      {...props}
      onMouseDown={mouseClickRef.current.handleMouseDown}
      onClickCapture={mouseClickRef.current.handleClick}
    >
      <SlickStyleStyle />
      <SlickThemeStyle />
      <Slider
        fade={isMobile}
        arrows={!isMobile || props.mobileArrowsEnabled}
        variableWidth={!isMobile}
        {...props.sliderSettings}
        ref={sliderRef}
      >
        {props.children}
      </Slider>
    </DIV_ImageSliderWrapper>
  );
};

const DIV_ImageSliderWrapper = styled.div<StyledImageSliderProps>`
  margin: 0 auto;
  max-width: ${({ width }) => width};
  overflow: ${({ overflow }) => overflow};

  .slick-dots {
    text-align: left;
    bottom: -25px;
  }

  .slick-arrow {
    width: 48px;
    height: 48px;
    z-index: 1;
    right: 0px;
  }

  .slick-prev {
    left: 0px;
    &::before {
      ${ArrowDirectionStyle['left']}
    }
  }

  .slick-track {
    display: flex;
    margin: 0;

    .slick-active {
    }
  }

  .slick-list {
    overflow: visible;
  }

  .slick-dots {
    width: initial;
    li {
      width: 12px;
      height: 6px;
      transition: 0.3s ease-out all;

      button::before {
        width: 6px;
        height: 6px;
        border-radius: 3px;
        content: '';
        background: #aab1bc;
        transition: 0.3s ease-out all;
      }

      &.slick-active {
        width: 46px;

        button::before {
          width: 40px;
        }
      }
    }
  }

  ${mobileMedia} {
    max-width: 100vw;
    margin: 0;
    ::-webkit-scrollbar {
      display: none;
    }

    .slick-current {
      z-index: 100;
    }
  }
`;

ImageSlider.defaultProps = defaultProps;

export default ImageSlider;
