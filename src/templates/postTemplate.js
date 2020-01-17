import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components/Layout'

export const AllPostsQuery = graphql`
	query BlogPost($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			frontmatter {
				date(formatString: "MMMM DD, YYYY", locale: "en")
				title
				path
			}
			html
		}
	}
`

const PostTemplate = ({ data }) => {
	const post = data.markdownRemark
	const { title, date } = post.frontmatter

	return (
		<Layout fullMenu>
			<section id="wrapper">
				<header>
					<div className="inner">
						<h2>{title}</h2>
						<p>{date}</p>
					</div>
				</header>

				<div className="wrapper">
					<div className="inner">
						<div dangerouslySetInnerHTML={{ __html: post.html }} />
						<ul className="actions">
							<li>
								<Link to="/blog" className="button secondary">
									Back
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default PostTemplate
