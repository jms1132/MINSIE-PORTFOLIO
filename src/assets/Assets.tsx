import { Records } from '@/utils/Type';
import { ReactNode } from 'react';
import { CSSProp } from 'styled-components';

export interface AssetType {
  icon: ReactNode;
  viewBox: string;
  colorType?: 'fill' | 'stroke';
  colors?: CSSProp;
}

export const VIEW_BOX_12 = '0 0 12 12';
export const VIEW_BOX_16 = '0 0 16 16';
export const VIEW_BOX_24 = '0 0 24 24';
export const VIEW_BOX_32 = '0 0 32 32';
export const VIEW_BOX_40 = '0 0 40 40';

const Assets = {
  hamburger36: {
    icon: (
      <>
        <path d="M0 28L32 28" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M0 18L32 18" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M0 8L32 8" strokeWidth="2.5" strokeLinecap="round" />
      </>
    ),
    colorType: 'stroke',
    viewBox: '0 0 36 36',
  },
  closeThin16: {
    icon: (
      <>
        <path d="m8.899 8 5.915-5.914a.636.636 0 0 0-.9-.9L8.002 7.102 2.086 1.187a.634.634 0 0 0-.9 0 .634.634 0 0 0 0 .899L7.102 8l-5.914 5.914A.634.634 0 0 0 1.636 15a.635.635 0 0 0 .45-.187L8 8.899l5.914 5.914a.635.635 0 1 0 .899-.9L8.899 8z" />
      </>
    ),
    colorType: 'fill',
    viewBox: VIEW_BOX_16,
  },
  closeBold16: {
    icon: (
      <>
        <path d="m9.414 8 5.293-5.293a.999.999 0 1 0-1.414-1.414L8 6.586 2.707 1.293a.999.999 0 1 0-1.414 1.414L6.586 8l-5.293 5.293a.999.999 0 1 0 1.414 1.414L8 9.414l5.293 5.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L9.414 8z" />
      </>
    ),
    colorType: 'fill',
    viewBox: VIEW_BOX_16,
  },
  closeBold24: {
    icon: (
      <>
        <path d="m13.414 12 8.293-8.293a.999.999 0 1 0-1.414-1.414L12 10.586 3.707 2.293a.999.999 0 1 0-1.414 1.414L10.586 12l-8.293 8.293a.999.999 0 1 0 1.414 1.414L12 13.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414 12z" />
      </>
    ),
    colorType: 'fill',
    viewBox: VIEW_BOX_24,
  },
  closeBold32: {
    icon: (
      <>
        <path d="M17.414 16 29.707 3.707a.999.999 0 1 0-1.414-1.414L16 14.586 3.707 2.293a.999.999 0 1 0-1.414 1.414L14.586 16 2.293 28.293a.999.999 0 1 0 1.414 1.414L16 17.414l12.293 12.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L17.414 16z" />
      </>
    ),
    colorType: 'fill',
    viewBox: VIEW_BOX_32,
  },
  arrowThin12: {
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.68888 11.0004C3.85188 11.0004 4.01388 10.9424 4.13688 10.8264L8.81688 6.43738C9.06088 6.20738 9.06088 5.83638 8.81588 5.60738L4.07988 1.17438C3.83288 0.942377 3.43288 0.942377 3.18588 1.17138C2.93888 1.40038 2.93788 1.77238 3.18388 2.00338L7.47788 6.02238L3.24088 9.99738C2.99588 10.2294 2.99688 10.6014 3.24488 10.8294C3.36788 10.9434 3.52888 11.0004 3.68888 11.0004Z"
      />
    ),
    viewBox: VIEW_BOX_12,
    colorType: 'fill',
  },
};

export default Assets as Records<typeof Assets, AssetType>;
