import React from 'react';
import styles from '#/src/styles/home.module.css';
import Work from '../modules/home/WorkHome';
import IntroHome from '../modules/home/IntroHome';
import FaqHome from '../modules/home/FaqHome';
// todo CREATE A MODULE FOR WORK ITEMS AND INTRO SECTIONS
// todo
export default function HomePage() {
  return (
    <section className={styles.container}>
      {/* introduction */}
      <IntroHome />
      {/* show work */}
      <Work />
      {/* faq */}
      <FaqHome />
    </section>
  );
}
