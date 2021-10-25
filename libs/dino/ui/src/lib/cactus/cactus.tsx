import { LegacyRef } from 'react';
import styles from './cactus.module.scss';
import cactusImg from './cactus.png';

export interface CactusProps {
  innerRef: LegacyRef<HTMLImageElement>;
}

export function Cactus({ innerRef }: CactusProps) {
  return (
    <img ref={innerRef} src={cactusImg} className={`${styles.cactus}`}></img>
  );
}

export default Cactus;
