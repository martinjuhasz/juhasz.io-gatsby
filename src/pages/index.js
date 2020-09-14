import React from 'react'

import { Layout } from '../components/Layout'

import logo from '../assets/images/logo.svg'
import profilePicture from '../assets/images/profile.jpg'
import servicesPicture from '../assets/images/services.jpg'
import vitaPicture from '../assets/images/vita.jpg'
import watchedPicture from '../assets/images/watched.jpg'
import storyboardPicture from '../assets/images/storyboard.jpg'

import config from '../../config'
const IndexPage = () => (
	<Layout showContactForm>
		<section id="banner">
			<div className="inner">
				<div className="heading">
					<div className="logo">
						<img className="icon" src={logo} alt="juhasz.io Logo" />
					</div>
					<h2>{config.heading}</h2>
				</div>
				<p>{config.subHeading}</p>
			</div>
		</section>

		<section id="wrapper">
			<section id="one" className="wrapper spotlight style1">
				<div className="inner">
					<a href="/#" className="image">
						<img src={profilePicture} alt="" />
					</a>
					<div className="content">
						<h2 className="major">Martin Juhasz</h2>
						<p>
							As a <strong>Media Computer Scientist (B.Sc.)</strong> I'm
							developing inidivual web- and mobile applications for clients and
							employers for over 14 years now.{' '}
							<strong>I'm available as a freelance developer</strong> to help
							you to realize your project professionally and timely. No matter
							if it's a web presence of your company/person or a specific
							software project, I'm happy to be your working partner.
						</p>
						<a href="/#contact" className="special">
							Contact Me
						</a>
					</div>
				</div>
			</section>

			<section id="two" className="wrapper alt spotlight style2">
				<div className="inner">
					<a href="/#" className="image">
						<img src={servicesPicture} alt="Services" />
					</a>
					<div className="content">
						<h2 className="major">Services</h2>
						<p style={{ marginBottom: '1em' }}>
							From planning to launch, i'm there to help you advance your
							business. You can also hire me as an expert on your software team.
							<strong> Let's get started</strong> with your
						</p>
						<ul>
							<li>Personal or Company Website</li>
							<li>Custom tailored Web Application</li>
							<li>Mobile Application (iOS/Android)</li>
							<li>Frontend/Backend Development</li>
						</ul>
						<a href="/#contact" className="special">
							Contact Me
						</a>
					</div>
				</div>
			</section>

			<section id="three" className="wrapper spotlight style3">
				<div className="inner">
					<a href="/#" className="image">
						<img src={vitaPicture} alt="Vita" />
					</a>
					<div className="content">
						<h2 className="major">Vita</h2>
						<p>
							I've always been fascinated by technologies of all kinds. That is
							why I aimed for an apprenticeship as a media designer at an early
							stage. There I learned the basics of development as well as
							design. It soon became clear to me that I wanted to delve much
							deeper into the topics of computer science.
						</p>
						<p>
							Therefore I studied computer science at the RheinMain University
							of Applied Sciences and graduated in 2016. Since then I've been
							working as an employee as well as a freelancer.
						</p>
						<p>
							Technology is my passion, I'm a maker by heart and love to tinker
							with embedded devices in my spare time.
						</p>
					</div>
				</div>
			</section>

			<section id="four" className="wrapper alt style1">
				<div className="inner">
					<h2 className="major">Portfolio</h2>
					<p>Get a glimpse of my work. </p>
					<section className="features">
						<article>
							<div className="image">
								<img src={watchedPicture} alt="watched iOS Application" />
							</div>
							<h3 className="major">watched</h3>
							<p>
								A native iOS application that lets you track, rate and share
								movies you watched.
							</p>
						</article>
						<article>
							<div className="image">
								<img src={storyboardPicture} alt="Storyboard iOS Application" />
							</div>
							<h3 className="major">Storyboard</h3>
							<p>
								A native iOS application for film makers to create storyboards
								for upcoming shootings.
							</p>
						</article>
					</section>
				</div>
			</section>
		</section>
	</Layout>
)

export default IndexPage
