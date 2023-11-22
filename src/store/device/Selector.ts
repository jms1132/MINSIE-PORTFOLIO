import { useSelector } from 'react-redux';

import { DeviceType } from './Device';
import { rootState } from '..';

interface useMobileSelectorReturnType {
  isMobile: boolean;
  isTablet: boolean;
  isSmallDesktop: boolean;
  isLaptop: boolean;
  isPC: boolean;
  device: DeviceType;
}

export const useDeviceSelector = (): useMobileSelectorReturnType => {
  const device = useSelector((state: rootState) => {
    return state.device;
  });

  const isMobile = device.device === 'mobile';
  const isTablet = device.device === 'tablet';
  const isLaptop = device.device === 'laptop';
  const isSmallDesktop = device.device === 'smallDesktop';
  const isPC = device.device === 'pc' || device.desktopMode;

  return {
    isMobile,
    isTablet,
    isSmallDesktop,
    isLaptop,
    isPC,
    device: device.device,
  };
};

export const useDesktopModeSelector = (): boolean => {
  return useSelector((state: rootState) => state.device.desktopMode);
};
