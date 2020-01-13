import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/sass/main.scss'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'
import config from '../../config'

export const Layout = ({ children, fullMenu, showContactForm }) => {
	const [isPreloaded, setIsPreloaded] = useState(true)
	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsPreloaded(false)
		}, 100)
		return () => {
			clearTimeout(timeout)
		}
	})

	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={data => (
				<>
					<Helmet
						title={data.site.siteMetadata.title}
						meta={[
							{
								name: 'description',
								content: `${config.manifestName - config.subHeading}`,
							},
							{ name: 'keywords', content: config.keywords },
						]}
					>
						<html lang="en" />
					</Helmet>
					<div
						className={isPreloaded ? ' main-body  is-preload' : ' main-body'}
					>
						<div id="page-wrapper">
							<Sidebar fullMenu={fullMenu} />
							{children}
							<Footer showContactForm={showContactForm} />
						</div>
					</div>
				</>
			)}
		/>
	)
}
