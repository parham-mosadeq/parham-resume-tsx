import Link from 'next/link';
import { FaWhatsapp, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { BiLogoGmail, BiLogoTelegram } from 'react-icons/bi';
import styles from '#/src/styles/footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.container}>
      {/* about */}
      <div className={styles.about}>
        <h5>about me</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quis
          optio adipisci minus necessitatibus reiciendis inventore ab, ratione
          recusandae voluptatem, veniam, voluptates provident. Deserunt facilis
          optio adipisci minus necessitatibus reiciendis inventore ab, ratione
          recusandae voluptatem, veniam, voluptates provident. Deserunt facilis
          optio adipisci minus necessitatibus reiciendis inventore ab, ratione
          recusandae voluptatem, veniam, voluptates provident. Deserunt facilis
          impedit aut dolor quisquam facere?
        </p>
        {/* contact */}
        <div className={styles.contact}>
          <input className={styles.inputs} type='text' placeholder='email' />
          <input className={styles.inputs} type='text' placeholder='name' />
          <button>submit</button>
        </div>

        {/* contact */}
      </div>
      {/* about */}

      {/* socials */}
      <div className={styles.socials}>
        <a href=''>
          <BiLogoTelegram />
        </a>
        <a href=''>
          <FaWhatsapp />
        </a>
        <a href=''>
          <FaXTwitter />
        </a>
        <a href=''>
          <FaLinkedinIn />
        </a>
        <a href=''>
          <BiLogoGmail />
        </a>
      </div>
      {/* socials */}

      <p className={styles.dev}>
        parham mosadeqzadeh | <span>Front-end Developer</span>
      </p>
    </footer>
  );
}
