import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectRiver,
  singsong,
  stop,
} from './kiyoshiSlice';

export function Kiyoshi() {
  const river = useSelector(selectRiver);
  const dispatch = useDispatch();
  const success = ['ズン', 'ズン', 'ズン', 'ズン', 'ドコ'].toString();

  useEffect(() => {
    const check = river.slice(-5).toString();

    if (check === success) {
      dispatch(stop());
      return;
    }

    dispatch(singsong());
  }, [river, success, dispatch]);

  return (
    <div>
      {river.map((item, i) =>
        <span key={i}>{item}</span>
      )}
    </div>
  );
}
