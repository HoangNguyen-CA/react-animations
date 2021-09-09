import styles from './App.module.css';

import FadeIn from './animation/FadeIn/FadeIn';
import Cover from './components/Cover/Cover';

function App() {
  return (
    <div className='App'>
      <Cover />
      <div className={styles.container}>
        <FadeIn>
          <h1>Lorem</h1>
        </FadeIn>
        <FadeIn>
          <h1>Lorem</h1>
        </FadeIn>
        <FadeIn>
          <h1>Lorem</h1>
        </FadeIn>
        <FadeIn>
          <h1>Lorem</h1>
        </FadeIn>
        <FadeIn>
          <h1>Lorem</h1>
        </FadeIn>
      </div>
      <Cover />
    </div>
  );
}

export default App;
