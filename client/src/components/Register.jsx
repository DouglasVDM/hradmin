import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

const Register = () => {
	const useRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [validName, setValidName] =
		useState(false);
	const [userFocus, setUserFocus] =
		useState(false);

	const [password, setPassword] = useState('');
	const [validPassword, setValidPassword] =
		useState(false);
	const [passwordFocus, setPasswordFocus] =
		useState(false);

	const [matchPassword, setMatchPassword] =
		useState('');
	const [validMatch, setValidMatch] =
		useState(false);
	const [matchFocus, setMatchFocus] =
		useState(false);

	const [errorMessage, setErrorMessage] =
		useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		useRef.current.focus();
	}, []);

	useEffect(() => {
		const result = USER_REGEX.test(user);
		console.log('result = ', result);
		console.log('user = ', user);
		setValidName(result);
	}, [user]);

	useEffect(() => {
		const result = PWD_REGEX.test(password);
		console.log('result = ', result);
		console.log('password = ', password);
		setValidPassword(result);
		const match = password === matchPassword;
		setValidMatch(match);
	}, [password, matchPassword]);

	useEffect(() => {
		setErrorMessage('');
	}, [user, password, matchPassword]);

	return (
		<section>
			<p
				ref={errRef}
				className={
					errorMessage
						? 'errorMessage'
						: 'offscreen'
				}
				aria-live="assertive"
			>
				{errorMessage}
			</p>
			<h1>Register</h1>
			<form>
				<label htmlFor="username">
					Username:
					<span
						className={
							validName ? 'valid' : 'hide'
						}
					>
						<FontAwesomeIcon icon={faCheck} />
					</span>
					<span
						className={
							validName || !user
								? 'hide'
								: 'invalid'
						}
					>
						<FontAwesomeIcon icon={faTimes} />
					</span>
				</label>
				<input
					type="text"
					id="username"
					ref={useRef}
					autoComplete="off"
					onChange={(event) =>
						setUser(event.target.value)
					}
					required
					aria-invalid={
						validName ? 'false' : 'true'
					}
					aria-describedby="uidnote"
					onFocus={() => setUserFocus(true)}
					onBlur={() => setUserFocus(false)}
				/>
				<p
					id="uidnote"
					className={
						useFocus && user && !validName
							? 'instructions'
							: 'offscreen'
					}
				>
					<FontAwesomeIcon icon={faInfoCircle} />
					4 to 24 characters.
					<br />
					Must begin with a letter.
					<br />
					letters, numbers, underscores, hyphens
					allowed.
				</p>
			</form>
		</section>
	);
};

export default Register;
