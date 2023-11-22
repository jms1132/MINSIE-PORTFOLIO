import { DeviceType, setDevice } from '@/store/device/Device';
import { useDeviceSelector } from '@/store/device/Selector';
import { deviceWidthNumber } from '@/style/deviceWidth';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

const useResize = (): void => {
  const dispatch = useDispatch();
  const { device } = useDeviceSelector();
  const scrollBarWidth = useMemo(() => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);
    const inner = document.createElement('div');
    outer.appendChild(inner);
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode?.removeChild(outer);
    return scrollbarWidth;
  }, [device]);

  const handleSetDevice = () => {
    let device = '';
    if (
      document.documentElement.clientWidth + scrollBarWidth <=
      deviceWidthNumber.mobile
    ) {
      if (device === 'mobile') {
        return;
      }
      device = 'mobile';
    } else if (
      document.documentElement.clientWidth + scrollBarWidth <=
      deviceWidthNumber.tablet
    ) {
      if (device === 'tablet') {
        return;
      }
      device = 'tablet';
    } else if (
      document.documentElement.clientWidth + scrollBarWidth <=
      deviceWidthNumber.smallDesktop
    ) {
      if (device === 'smallDesktop') {
        return;
      }
      device = 'smallDesktop';
    } else if (
      document.documentElement.clientWidth + scrollBarWidth <=
      deviceWidthNumber.laptop
    ) {
      device = 'laptop';
    } else {
      if (device === 'pc') {
        return;
      }
      device = 'pc';
    }
    if (device.length) {
      dispatch(setDevice(device as DeviceType));
    }
  };

  useEffect(() => {
    handleSetDevice();
    window.addEventListener('resize', handleSetDevice);
    return () => {
      window.removeEventListener('resize', handleSetDevice);
    };
  }, []);
};

export default useResize;
