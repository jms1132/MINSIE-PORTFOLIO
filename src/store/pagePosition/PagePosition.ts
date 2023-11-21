/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PagePositionState {
  page?: string;
}

const initialState: PagePositionState = {
  page: '',
};

const pagePositionSlice = createSlice({
  name: 'pagePosition',
  initialState,
  reducers: {
    setPagePosition: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
  },
});

export const { setPagePosition } = pagePositionSlice.actions;
export default pagePositionSlice.reducer;
