/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { useEffect, useRef } from 'react';

export const useNonInitialEffect = (effect, deps) => {
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effect();
    }
  }, deps);
};
