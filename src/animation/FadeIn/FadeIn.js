import React from 'react';
import styles from './FadeIn.module.css';

import useScroll from '../../hooks/useScroll';

const FadeIn = ({ children }) => {
  const condition = (ref) => {
    const scrollPos = window.innerHeight - 100;
    const top = ref.current.getBoundingClientRect().top;
    if (top <= scrollPos) {
      return true;
    }
    return false;
  };
  const { ref, state } = useScroll(condition);
  const classes = [styles.container];
  if (state) {
    classes.push(styles.containerActive);
  }
  return (
    <div ref={ref} className={classes.join(' ')}>
      {children}
    </div>
  );
};

export default FadeIn;
