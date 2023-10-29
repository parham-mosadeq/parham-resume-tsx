'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '#/src/styles/navbar.module.css';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';
const navItems = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'about',
    link: '/about',
  },
  {
    name: 'work',
    link: '/work',
  },
  {
    name: 'contact',
    link: '/contact',
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.container}>
      {/* logo */}
      <div>
        <h3 className={styles.logo}>
          <Link href={'/'}>
            Parham mosadeqzadeh <span>{`</>`}</span>
          </Link>
        </h3>
      </div>
      {/* logo */}

      <ul
        className={`${styles.navItemsContainer} ${
          isOpen ? styles.navItemsContainerShow : styles.navItemsContainerHide
        }`}
      >
        {navItems.map((i) => {
          return (
            <li key={i.name}>
              <Link href={i.link}>{i.name}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setIsOpen((prev) => !prev)} className={styles.btn}>
        {isOpen ? <HiX /> : <HiMenu />}
      </button>
    </nav>
  );
}
