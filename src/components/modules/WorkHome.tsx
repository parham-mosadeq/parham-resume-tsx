import React from 'react';
import Image from 'next/image';
import styles from '#/src/styles/home.module.css';
export default function Work() {
  return (
    <article>
      {/* work */}
      <div className={styles.work}>
        {/* thoughts */}
        <div className={styles.introImg}>
          <Image
            src='/images/work-1.jfif'
            width={500}
            height={500}
            alt='what do i do?'
          />
        </div>
        {/* thoughts */}

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in
          molestias sed obcaecati modi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis in molestias sed obcaecati modi.
        </p>
      </div>
      {/* work */}
      {/* work */}
      <div className={styles.work}>
        {/* thoughts */}
        <div className={styles.introImg}>
          <Image
            src='/images/work-2.jfif'
            width={500}
            height={500}
            alt='what do i do?'
          />
        </div>
        {/* thoughts */}

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in
          molestias sed obcaecati modi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis in molestias sed obcaecati modi.
        </p>
      </div>
      {/* work */}
      {/* work */}
      <div className={styles.work}>
        {/* thoughts */}
        <div className={styles.introImg}>
          <Image
            src='/images/work-3.jfif'
            width={500}
            height={500}
            alt='what do i do?'
          />
        </div>
        {/* thoughts */}

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in
          molestias sed obcaecati modi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis in molestias sed obcaecati modi.
        </p>
      </div>
      {/* work */}
      {/* work */}
      <div className={styles.work}>
        {/* thoughts */}
        <div className={styles.introImg}>
          <Image
            src='/images/work-4.jfif'
            width={500}
            height={500}
            alt='what do i do?'
          />
        </div>
        {/* thoughts */}

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in
          molestias sed obcaecati modi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis in molestias sed obcaecati modi.
        </p>
      </div>
      {/* work */}
    </article>
  );
}
