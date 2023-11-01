import Image from 'next/image';
import React from 'react';
import styles from '#/src/styles/about.module.css';
import TechStack from '../modules/about/TechStack';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      {/* intro */}
      <article className={styles.header}>
        {/* parham img */}
        <div className={styles.header_img_container}>
          <Image
            src={'/images/parham.jpg'}
            width={500}
            height={500}
            alt='parham mosadeqzadeh'
          />
        </div>
        {/* parham img */}
        {/* bio */}
        <div className={styles.header_info}>
          <div className={styles.header_titles}>
            <h6>know me better!</h6>
            <h1>parham mosadeqzadeh</h1>
            <p>shiraz, Iran</p>
          </div>
          <div className={styles.header_desc}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              molestiae illo rem ullam similique veritatis veniam cumque sit
              inventore nulla ad, nesciunt impedit iure repudiandae fugiat
              sapiente facere optio repellat commodi illum. Aliquam tempore
              recusandae, iusto quis dolor minus est a, magni sapiente deserunt
              explicabo voluptates soluta eum iste excepturi, quibusdam quas
            </p>
            <p>
              blanditiis voluptate labore laborum atque molestiae delectus
              ullam. Dolorem laboriosam ipsa aliquid, consequatur beatae nostrum
              quae porro qui. sapiente facere optio repellat commodi illum.
              Aliquam tempore recusandae, iusto quis dolor minus est a, magni
              sapiente deserunt explicabo voluptates soluta eum iste excepturi,
              quibusdam quas blanditiis voluptate labore laborum atque molestiae
              delectus ullam. Dolorem laboriosam ipsa aliquid, consequatur
              beatae nostrum quae porro qui.
            </p>
          </div>
        </div>
        {/* bio */}
      </article>
      {/* intro end*/}
      <TechStack />
    </div>
  );
}
