import { LegacyRef, useEffect, useState } from 'react';
import styles from './dino.module.scss';
import trexImg from './trex.png';

export interface DinoProps {
  innerRef: LegacyRef<HTMLImageElement>;
}

export function Dino({ innerRef } : DinoProps) {
  const [isJumping, setJumping] = useState(false);

  const handleJump = (event: KeyboardEvent) => {
    if (event.code === 'Space' && !isJumping) {
      setJumping(true);
      setTimeout(() => {
        setJumping(false);
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleJump);

    return () => {
      window.removeEventListener('keydown', handleJump);
    };
  }, []);

  return (
    <img
      ref={innerRef}
      className={`${styles.dino} ${isJumping ? styles.jump : ''}`}
      src={trexImg}
    ></img>
  );
}

export default Dino;
