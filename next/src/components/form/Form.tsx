'use client';

import React from 'react';
import styles from './form.module.css';

export default function Form() {
  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <h3>Kontakt</h3>
        <p className={styles.formParagraph}>
          Vid frågor är du välkommen att maila mig på{' '}
          <a
            href='mailto:test@hotmail.com'
            style={{ display: 'block' }}>
            kontakt@nathaliekorhonenpsykolog.se
          </a>
          Om du skulle vilja boka ett första samtal vänligen fyll i intresseanmälan nedan. För att värna om sekretessen, beskriv ditt ärende
          kortfattat och utelämna personliga detaljer och känslig information.
        </p>
        <div className={styles.firstNameWrapper}>
          <label
            className={styles.firstNameLabel}
            htmlFor=''>
            Förnamn:{' '}
          </label>
          <input
            className={styles.firstNameInput}
            type='text'
            placeholder='Förnamn'
          />
        </div>
        <div className={styles.lastNameWrapper}>
          <label
            className={styles.lastNameLabel}
            htmlFor=''>
            Efternamn:{' '}
          </label>
          <input
            className={styles.lastNameInput}
            type='text'
            placeholder='Efternamn'
          />
        </div>
        <div className={styles.emailWrapper}>
          <label
            className={styles.emailLabel}
            htmlFor=''>
            Mail adress:
          </label>
          <input
            className={styles.emailInput}
            type='text'
            placeholder='Mail adress'
          />
        </div>
        <div className={styles.messageWrapper}>
          <label
            className={styles.messageLabel}
            htmlFor=''>
            Kort beskrivning om vad ditt ärende gäller:
          </label>
          <textarea
            className={styles.messageInput}
            placeholder='Skriv ett meddelande här..'
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.formButton}>Skicka</button>
        </div>
      </div>
    </form>
  );
}
