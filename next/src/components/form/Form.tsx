'use client';

import React, { ChangeEvent, useState } from 'react';
import styles from './form.module.css';

type FormInputInformation = {
	firstName: string;
	lastName: string;
	emailAddress: string;
	message: string;
};

export default function Form() {
	const [formInformation, setFormInformation] = useState<FormInputInformation>({
		firstName: '',
		lastName: '',
		emailAddress: '',
		message: '',
	});

	function handleFormInformation(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
		const { name, value } = event.target;

		setFormInformation(previous => ({
			...previous,
			[name]: value,
		}));
	}

	function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
		event.preventDefault();

		setFormInformation({
			firstName: '',
			lastName: '',
			emailAddress: '',
			message: '',
		});
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
						className={styles.mailAddress}
						href='mailto:test@hotmail.com'>
						kontakt@nathaliekorhonenpsykolog.se
					</a>
					<br />
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
						name='firstName'
						id='firstName'
						value={formInformation.firstName}
						onChange={handleFormInformation}
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
						name='lastName'
						id='lastName'
						value={formInformation.lastName}
						onChange={handleFormInformation}
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
						name='emailAddress'
						id='emailAddress'
						value={formInformation.emailAddress}
						onChange={handleFormInformation}
						placeholder='E-post adress'
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
						name='message'
						id='message'
						value={formInformation.message}
						onChange={handleFormInformation}
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
