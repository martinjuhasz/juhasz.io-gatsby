import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'

export const Contact = () => {
	const [submitted, setSubmitted] = useState(false)
	const [requestErrored, setRequestErrored] = useState(false)
	const { register, handleSubmit, formState, errors } = useForm({
		mode: 'onChange',
	})

	const onSubmit = handleSubmit(async data => {
		setRequestErrored(false)
		const request = await fetch(process.env.CONTACT_API_URL, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Request could not be submitted.')
				}
				return response.json()
			})
			.then(() => {
				setSubmitted(true)
			})
			.catch(() => setRequestErrored(true))
		return request
	})

	if (submitted) {
		return ContactSuccess()
	}
	return ContactForm(register, onSubmit, formState, errors, requestErrored)
}

const ContactSuccess = () => {
	return (
		<div className="form">
			<h3>Thank you for submitting your request!</h3>
			<p>I will contact you as soon as possible.</p>
		</div>
	)
}

const ContactForm = (register, onSubmit, formState, errors, requestErrored) => {
	return (
		<form onSubmit={onSubmit} className="form">
			<div className="fields">
				<div className="field">
					<label htmlFor="name">Name *</label>
					<input
						type="text"
						name="name"
						id="name"
						ref={register({ required: true })}
						className={classNames({ invalid: errors.name })}
					/>
				</div>
				<div className="field">
					<label htmlFor="contact">Email *</label>
					<input
						type="text"
						name="contact"
						id="contact"
						ref={register({ required: true, pattern: /.+@.+\..+/ })}
						className={classNames({ invalid: errors.contact })}
					/>
				</div>
				<div className="field">
					<label htmlFor="content">Message *</label>
					<textarea
						name="content"
						id="content"
						rows="4"
						ref={register({ required: true })}
						className={classNames({ invalid: errors.content })}
					></textarea>
				</div>
			</div>
			<ul className="actions">
				<li>
					<input
						type="submit"
						value="Send Message"
						disabled={!formState.isValid || formState.isSubmitting}
					/>
				</li>
				{formState.isSubmitting && (
					<li>
						<i
							style={{ marginTop: '0.225em' }}
							className="fa fa-circle-o-notch fa-spin fa-2x"
						></i>
					</li>
				)}
			</ul>
			{requestErrored && (
				<div className="error">
					I'm sorry. Your request could not be submitted. Please try again
					later!
				</div>
			)}
		</form>
	)
}
