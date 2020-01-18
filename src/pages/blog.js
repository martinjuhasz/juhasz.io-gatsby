import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components/Layout'

export const AllPostsQuery = graphql`
	query AllBlogPosts {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					frontmatter {
						date(formatString: "MMMM DD, YYYY", locale: "en")
						title
						description
						author
						path
					}
				}
			}
		}
	}
`

const PostsPage = ({ data }) => (
	<Layout fullMenu>
		<section id="wrapper">
			<header>
				<div className="inner">
					<h2>Blog</h2>
					<p>
						This is my notebook. Mainly a place for myself to keep things in
						written form so i can remember. I'm glad if you find something
						interesting. Mostly tech related.
					</p>
				</div>
			</header>

			<div className="wrapper">
				<div className="inner">
					{data.allMarkdownRemark.edges.map(post => {
						const { title, date, description, path } = post.node.frontmatter

						return (
							<div key={`${date}__${title}`}>
								<h3 className="major">
									<Link to={path}>{title}</Link>
								</h3>
								<h4>{date}</h4>
								<p>{description}</p>
								<ul className="actions">
									<li>
										<Link to={path} className="button secondary">
											Read more
										</Link>
									</li>
								</ul>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	</Layout>
)

export default PostsPage
