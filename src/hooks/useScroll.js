import { useLayoutEffect, useRef, useState } from 'react';

const useScroll = (condition) => {
  const ref = useRef(null);
  const [state, setState] = useState();

  useLayoutEffect(() => {
    const onScroll = () => {
      if (condition(ref)) {
        setState(true);
      } else {
        setState(false);
      }
    };

    onScroll();

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onscroll);
    };
  }, [condition]);

  return { ref, state };
};

export default useScroll;
