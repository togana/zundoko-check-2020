import { createSlice } from '@reduxjs/toolkit';

export const kiyoshiSlice = createSlice({
  name: 'kiyoshi',
  initialState: {
    value: {
      river: [],
      music: true,
    },
  },
  reducers: {
    zun: state => {
      state.value.river.push('ズン');
    },
    doko: state => {
      state.value.river.push('ドコ');
    },
    kiyoshi: state => {
      state.value.river.push('キ・ヨ・シ！');
      state.value.music = false;
    },
  },
});

export const { zun, doko, kiyoshi } = kiyoshiSlice.actions;

const sing = () => {
  return 0.5 < Math.random() ? zun() : doko();
}

export const stop = () => dispatch => {
  setTimeout(() => {
    dispatch(kiyoshi());
  }, 750);
};

export const singsong = () => (dispatch, getState) => {
  const { kiyoshi } = getState();
  if(kiyoshi.value.music) {
    setTimeout(() => {
      dispatch(sing());
    }, 750);
  }
};

export const selectRiver = state => state.kiyoshi.value.river;

export default kiyoshiSlice.reducer;
