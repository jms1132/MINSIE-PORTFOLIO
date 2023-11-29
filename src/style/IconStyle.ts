import { css } from 'styled-components';

export type IconType =
  | 'thin12'
  | 'thin16'
  | 'thin24'
  | 'thin32'
  | 'thin44'
  | 'bold12'
  | 'bold16'
  | 'bold24'
  | 'bold32'
  | 'bold44';

export const ArrowDirectionStyle = {
  up: css`
    transform: rotate(-90deg);
  `,
  down: css`
    transform: rotate(-270deg);
  `,
  left: css`
    transform: rotate(180deg);
  `,
  right: css``,
};

export const levelColor = {
  bronze: css`
    .level-background {
      fill: #eddccb;
    }
    .level-box1 {
      fill: #d9ac80;
    }
    .level-box2 {
      fill: #f2d3ba;
    }
    .level-box3 {
      fill: #a67e4f;
    }
    .level-box4 {
      fill: #643513;
    }
    .level-box5 {
      fill: #926e43;
    }
  `,
  silver: css`
    .level-background {
      fill: #e9e9e9;
    }
    .level-box1 {
      fill: #cbcbcb;
    }
    .level-box2 {
      fill: #e9e9e9;
    }
    .level-box3 {
      fill: #a5a5a5;
    }
    .level-box4 {
      fill: #404040;
    }
    .level-box5 {
      fill: #696969;
    }
  `,
  gold: css`
    .level-background {
      fill: #fdf1c5;
    }
    .level-box1 {
      fill: #ffd97c;
    }
    .level-box2 {
      fill: #fffaea;
    }
    .level-box3 {
      fill: #e9ad27;
    }
    .level-box4 {
      fill: #755000;
    }
    .level-box5 {
      fill: #b57b00;
    }
  `,
  premium: css`
    .level-background {
      fill: #d5e6ff;
    }
    .level-box1 {
      fill: #78b6ff;
    }
    .level-box2 {
      fill: #eef3fd;
    }
    .level-box3 {
      fill: #387afc;
    }
    .level-box4 {
      fill: #071cc3;
    }
    .level-box5 {
      fill: #2656f6;
    }
  `,
};
