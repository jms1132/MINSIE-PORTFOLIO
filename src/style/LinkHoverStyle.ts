import { css } from 'styled-components';

const none = null;

const opacity = css`
  &:not([disabled]):hover {
    opacity: 0.8;
  }
`;

const zoomIn = css`
  isolation: isolate;
  overflow: hidden;
  > * {
    transition: transform 0.5s;
  }
  &:hover > * {
    transform: scale(1.05);
  }
`;

export default {
  none,
  opacity,
  zoomIn,
};
