import Link from 'next/link';
import React from 'react';
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
  return (
    <nav>
      {/* logo */}
      <div></div>
      {/* logo */}

      <ul>
        {navItems.map((i) => {
          return (
            <li key={i.name}>
              <Link href={i.link}>{i.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
