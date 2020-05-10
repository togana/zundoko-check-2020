import { configureStore } from '@reduxjs/toolkit';
import kiyoshiSlice from '../features/kiyoshi/kiyoshiSlice';

export default configureStore({
  reducer: {
    kiyoshi: kiyoshiSlice,
  },
});
