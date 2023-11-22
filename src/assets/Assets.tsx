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
};

export default Assets as Records<typeof Assets, AssetType>;
