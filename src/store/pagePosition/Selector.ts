import { useSelector } from 'react-redux';
import { rootState } from '..';

export const usePagePositionSelector = (): string | undefined =>
  useSelector((state: rootState) => state.pagePosition.page);
