import Image from 'next/image';
import React from 'react';
import styles from '#/src/styles/home.module.css';

export default function FaqHome() {
  const d = [
    {
      id: 1,
      title: 'who am i?',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            facilis.`,
    },
    {
      id: 2,
      title: 'what do i do?',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            facilis.`,
    },
    {
      id: 3,
      title: ' why me?',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            facilis.`,
    },
    {
      id: 4,
      title: 'tech desk!',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            facilis.`,
    },
  ];
  return (
    <div className={styles.faq}>
      <div className={styles.introImg}>
        <Image src='/images/faq.jfif' width={500} height={500} alt='faq' />
      </div>
      <section>
        {d.map((i) => {
          return (
            <details key={i.id}>
              <summary>{i.title}</summary>
              <p>{i.desc}</p>
            </details>
          );
        })}
      </section>
    </div>
  );
}
