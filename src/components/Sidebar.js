import React, { useState } from 'react'
import { Navigation } from './Navigation'
import { Link } from 'gatsby'

export const Sidebar = ({ fullMenu }) => {
	const [headerOpen, toggleHeader] = useState(false)
	return (
		<>
			<header id="header" className={`${fullMenu ? '' : 'alt'}`}>
				<h1>
					<Link to="/">juhasz.io | Software Crafter</Link>
				</h1>

				<nav>
					<a
						href="#menu"
						onClick={e => {
							e.preventDefault()
							toggleHeader(!headerOpen)
						}}
						className="menuToggle"
					>
						<span>Menu</span>
					</a>
				</nav>
			</header>
			<div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
				<Navigation onMenuToggle={() => toggleHeader(!headerOpen)} />
			</div>
		</>
	)
}
