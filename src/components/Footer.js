import React from 'react'
import config from '../../config'
import { Link } from 'gatsby'
import { Contact } from './Contact'

export const Footer = ({ showContactForm }) => {
	return (
		<section id="footer">
			<div className="inner">
				{showContactForm ? ExtendedFooter() : SmallFooter()}
			</div>
		</section>
	)
}

const ExtendedFooter = () => {
	return (
		<>
			<h2 className="major" id="contact">
				Drop me a line
			</h2>
			<p>
				Do you have any questions? I'm here to help and answer any question you
				might have. Fill out this form, give me a call, write me an email or
				text me on twitter. I'm looking forward hearing from you.
			</p>

			<Contact />
			<ul className="contact">
				<li className="fa-home">{config.address}</li>

				<li className="fa-phone">{config.phone}</li>

				{config.socialLinks.map(social => {
					const { icon, url, name } = social
					return (
						<li className={`${icon}`} key={url}>
							<a href={url}>{name}</a>
						</li>
					)
				})}
			</ul>
			<ul className="copyright">
				<li>&copy; Martin Juhasz</li>
				<li>
					<Link to="/impressum">Impressum</Link>
				</li>
			</ul>
		</>
	)
}

const SmallFooter = () => {
	return (
		<>
			<h2 className="major" id="contact">
				Contact
			</h2>
			<p>
				Do you have any questions? I'm here to help and answer any question you
				might have. Give me a call, write me an email or text me on twitter. I'm
				looking forward hearing from you.
			</p>
			<ul className="contact small">
				<li className="fa-home">{config.address}</li>

				<li className="fa-phone">
					<a href={`tel:${config.phone}`}>{config.phone}</a>
				</li>

				{config.socialLinks.map(social => {
					const { icon, url, name } = social
					return (
						<li className={`${icon}`} key={url}>
							<a href={url}>{name}</a>
						</li>
					)
				})}
			</ul>
			<ul className="copyright">
				<li>&copy; Martin Juhasz</li>
				<li>
					<Link to="/impressum">Impressum</Link>
				</li>
			</ul>
		</>
	)
}
