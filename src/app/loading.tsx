import Image from 'next/image';
import React from 'react';
import styles from '#/src/styles/rootLoader.module.css';
export default function loading() {
  return (
    <div className={styles.container}>
      <Image
        src='/images/parham.jpg'
        width={500}
        height={500}
        alt='loader-spinner'
      />
    </div>
  );
}
