import { createSlice } from '@reduxjs/toolkit';

export const roundSlice = createSlice({
  name: 'round',
  initialState: {
    value: [],
  },
  reducers: {
    // create a round and add it to the rounds array
    SET_ROUNDS: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { SET_ROUNDS } = roundSlice.actions;
export default roundSlice.reducer;
