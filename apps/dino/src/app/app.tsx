import React, { useEffect } from 'react';
import styles from './app.module.scss';
import { Dino, Cactus } from '@enroute-systems/dino/ui';

export function App() {
  const dinoRef = React.createRef<HTMLImageElement>();
  const cactusRef = React.createRef<HTMLImageElement>();

  const detectCollision = () => {
    const dinoTop = parseInt(
      window
        .getComputedStyle(dinoRef.current as Element)
        .getPropertyValue('top')
    );
    const cactusLeft = parseInt(
      window
        .getComputedStyle(cactusRef.current as Element)
        .getPropertyValue('left')
    );
    console.log(dinoTop, ' ', cactusLeft);
    if (cactusLeft < 0 && dinoTop >= 120) {
      alert('Game Over ;v');
    }
  };

  useEffect(() => {
    const watchCollision = setInterval(() => {
      detectCollision();
    }, 10);

    return () => {
      clearInterval(watchCollision);
    };
  }, []);

  useEffect(() => {
    if (dinoRef.current !== null && cactusRef.current !== null) {
    }
  }, [dinoRef.current, cactusRef.current]);

  return (
    <div className={styles.app}>
      <Dino innerRef={dinoRef} />
      <Cactus innerRef={cactusRef} />
    </div>
  );
}

export default App;
