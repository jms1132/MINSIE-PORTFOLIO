import { css } from 'styled-components';

const gray = {
  /** #F9FAFB */ gray050: '#F9FAFB',
  /** #F5F6F7 */ gray100: '#F5F6F7',
  /** #E9EBED */ gray200: '#E9EBED',
  /** #DBDEE2 */ gray300: '#DBDEE2',
  /** #BFC6D2 */ gray400: '#BFC6D2',
  /** #AAB1BC */ gray500: '#AAB1BC',
  /** #8E94A0 */ gray600: '#8E94A0',
  /** #6F7785 */ gray700: '#6F7785',
  /** #404A5C */ gray800: '#404A5C',
  /** #101C33 */ gray900: '#101C33',
};

const blue = {
  /** #F5F8FF */ blue050: '#F5F8FF',
  /** #D5E6FF */ blue100: '#D5E6FF',
  /** #B4D2FF */ blue200: '#B4D2FF',
  /** #78B6FF */ blue300: '#78B6FF',
  /** #387AFC */ blue400: '#387AFC',
  /** #2656F6 */ blue500: '#2656F6',
  /** #1F4DEA */ blue600: '#1F4DEA',
  /** #1941DD */ blue700: '#1941DD',
  /** #1335D2 */ blue800: '#1335D2',
  /** #071CC3 */ blue900: '#071CC3',
};

const system = {
  /** #000000 */ black: '#000000',
  /** #ffffff */ white: '#ffffff',
};

const Color = {
  primary: { ...blue },
  ...blue,
  ...gray,
  system,
  ...system,
  status: {
    white: {
      /** #8E94A0 */ off: gray.gray600,
      /** #2656F6 */ info: blue.blue500,
      /** #00BD2F */ positive: '#00BD2F',
      /** #FF5C00 */ notice: '#FF5C00',
      /** #F21724 */ negative: '#F21724',
    },
    dark: {
      /** #DBDEE2 */ off: gray.gray300,
      /** #387AFC */ info: blue.blue400,
      /** #00C853 */ positive: '#00C853',
      /** #FFB800 */ notice: '#FFB800',
      /** #F63C43 */ negative: '#F63C43',
    },
  },
};

const Typography = {
  /** 700 */ extraBold: 'font-weight: 800;',
  /** 700 */ bold: 'font-weight: 700;',
  /** 500 */ medium: 'font-weight: 500;',
  /** 400 */ regular: 'font-weight: 400;',

  fontHeading: 'font-family: Open Sans, GmarketSansBold, sans-serif;',
  fontContents: 'font-family: Open Sans, GmarketSansMedium, sans-serif;',

  /** 40px */ heading: `
    font-size: 70px;
    line-height: 140px;
    letter-spacing: -0.5px;`,
  /** 40px */ title: `
      font-size: 40px;
      line-height: 45px;
      letter-spacing: -0.5px;`,
  /** 32px */ h1: `
      font-size: 32px;
      line-height: 44px;
      letter-spacing: -0.5px;`,
  /** 28px */ h2: `
      font-size: 28px;
      line-height: 40px;
      letter-spacing: -0.5px;`,
  /** 22px */ h3: `
      font-size: 22px;
      line-height: 44px;
      letter-spacing: -0.5px;`,
  /** 18px */ subtitle1: `
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.5px;`,
  /** 16px */ subtitle2: `
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.5px;`,
  /** 15px */ subtitle3: `
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.5px;`,
  /** 14px */ body1: `
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.25px;`,
  /** 12px */ caption1: `
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.25px;`,
  /** 10px */ caption2: `
      font-size: 10px;
      line-height: 15px;
      letter-spacing: -0.25px;`,
};

const Device = {
  mobile: { width: 600 },
  tablet: { width: 1024 },
  smallDesktop: { width: 1200 },
  wideDesktop: { width: 1920 },
};

const MediaQuery = {
  mobile: `@media only screen and (max-width: ${Device.mobile.width}px)`,
  table: `@media only screen and (max-width: ${Device.tablet.width}px)`,
  smallDesktop: `@media only screen and (max-width: ${Device.smallDesktop.width}px)`,
};

const Style = {
  arrowDirection: {
    up: `transform: rotate(-90deg);`,
    down: `transform: rotate(-270deg);`,
    left: `transform: rotate(180deg);`,
    right: ``,
  },
  scrollBar: {
    hide: css`
      &::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;
      scrollbar-width: none;
    `,
  },
};

export const Theme = { Color, Typography, MediaQuery, Style };
