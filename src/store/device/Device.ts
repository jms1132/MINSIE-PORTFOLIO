import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type DeviceType = 'mobile' | 'smallDesktop' | 'tablet' | 'laptop' | 'pc';

interface Device {
  device: DeviceType;
  desktopMode: boolean;
}

const initialState: Device = {
  device: 'pc',
  desktopMode: false,
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDevice: (state, action: PayloadAction<DeviceType>) => {
      state.device = action.payload;
    },
    setDesktopMode: (state, action: PayloadAction<boolean>) => {
      state.desktopMode = action.payload;
    },
  },
});

export const { setDevice, setDesktopMode } = deviceSlice.actions;

export default deviceSlice.reducer;
