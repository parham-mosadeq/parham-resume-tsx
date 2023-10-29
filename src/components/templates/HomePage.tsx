import React from 'react';
import styles from '#/src/styles/home.module.css';
import Image from 'next/image';
export default function HomePage() {
  return (
    <section className={styles.container}>
      {/* intro */}
      <div className={styles.intro}>
        {/* img */}
        <div className={styles.introImg}>
          <Image
            src='/images/intor.jfif'
            width={500}
            height={500}
            alt='intor'
          />
        </div>
        {/* img */}

        {/* add type writer effect */}
        <div className={styles.introDesc}>
          <h3>Hi,i'm parham</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            voluptatibus voluptates reiciendis maxime facere! Autem itaque
            magni, similique veniam natus fuga consequatur laborum animi
            eveniet? Numquam, impedit ex rem sint fugit, similique, nobis
            eligendi amet modi ab recusandae sed distinctio. Sint, beatae.
            Repellat accusamus similique veniam natus fuga consequatur laborum
            animi eveniet? Numquam, impedit ex rem sint fugit, similique, nobis
            elig 
            debitis.
          </p>
        </div>
      </div>
      {/* intro */}

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
    </section>
  );
}
