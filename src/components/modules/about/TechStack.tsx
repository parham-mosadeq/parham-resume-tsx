import React from 'react';
import styles from '#/src/styles/about.module.css';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiGit,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
const techStack = [
  {
    id: 1,
    val: <SiTypescript />,
  },
  {
    id: 2,
    val: <SiJavascript />,
  },
  {
    id: 3,
    val: <SiReact />,
  },
  {
    id: 4,
    val: <SiGit />,
  },
  {
    id: 5,
    val: <AiFillHtml5 />,
  },
  {
    id: 6,
    val: <BiLogoCss3 />,
  },
];

const designs = [
  {
    id: 7,
    val: <SiAdobexd />,
  },
  {
    id: 8,
    val: <SiAdobeillustrator />,
  },
  {
    id: 9,
    val: <SiAdobephotoshop />,
  },
];

export default function TechStack() {
  return (
    <>
      {/* designs */}
      <div className={styles.tech_designs}>
        <ul className={styles.tech_designs_items}>
          {/* <li>
              <SiAdobexd />
            </li>
            <li>
              <SiAdobeillustrator />
            </li> */}
          {designs.map((i) => {
            return <li key={i.id}>{i.val}</li>;
          })}
        </ul>
      </div>
      {/* designs */}
      {/* codes */}
      <div className={styles.codes}>
        <ul>
          {/* <li>
              <AiFillHtml5 />
            </li>
            <li>
              <BiLogoCss3 />
            </li>
            <li>
              <SiJavascript />
            </li>
            <li>
              <SiReact />
            </li>
            <li>
              <SiTypescript />
            </li>
            <li>
              <SiGit />
            </li> */}
          {techStack.map((i) => {
            return <li key={i.id}>{i.val}</li>;
          })}
        </ul>
      </div>
      {/* codes */}
    </>
  );
}
