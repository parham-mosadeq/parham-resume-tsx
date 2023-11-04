import React from 'react';
import styles from '#/src/styles/contact.module.css';
export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{/* <h5>give me a shout</h5> */}</div>
      <div className={styles.formContainer}>
        <h1>contact me via email</h1>
        <form action=''>
          <div>
            <div className={styles.inputContainers}>
              <label htmlFor='name'>name</label>
              <input required={true} type='text' name='name' id='name' />
            </div>
            <div className={styles.inputContainers}>
              <label htmlFor='email'>email</label>
              <input required={true} type='text' name='email' id='email' />
            </div>
            <div className={styles.inputContainers}>
              <label htmlFor='name'>phone</label>
              <input required={true} type='number' name='name' id='name' />
            </div>
          </div>
          <div>
            <textarea name='message' id='message' cols={50} rows={10} />
          </div>
          <button type='submit'> submit form</button>
        </form>
      </div>
    </div>
  );
}
