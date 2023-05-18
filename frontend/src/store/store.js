import { configureStore } from '@reduxjs/toolkit';
import roundReducer from '../slices/roundSlice';

export default configureStore({
  reducer: {
    round: roundReducer,
  },
});
