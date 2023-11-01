import React from 'react';
import styles from '#/src/styles/home.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function IntroHome() {
  return (
    <article>
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
            elig debitis.
          </p>
          <Link href={'/about'} className={styles.readBtn}>read more</Link>
        </div>
      </div>
      {/* intro */}
    </article>
  );
}
