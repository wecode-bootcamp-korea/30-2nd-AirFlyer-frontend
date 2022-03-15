import { useLayoutEffect } from 'react';

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
};
