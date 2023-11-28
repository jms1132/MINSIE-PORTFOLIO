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
};

export default Assets as Records<typeof Assets, AssetType>;
