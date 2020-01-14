import React from 'react'
import { Link } from 'gatsby'

export const Navigation = ({ onMenuToggle = () => {} }) => {
	return (
		<nav id="menu">
			<div className="inner">
				<h2>Menu</h2>
				<ul className="links">
					<li>
						<Link
							onClick={() => {
								onMenuToggle()
							}}
							to="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							onClick={() => {
								onMenuToggle()
							}}
							to="/impressum"
						>
							Impressum
						</Link>
					</li>
				</ul>
				<a
					className="close"
					onClick={e => {
						e.preventDefault()
						onMenuToggle()
					}}
					href="#menu"
				>
					{''}
				</a>
			</div>
		</nav>
	)
}
