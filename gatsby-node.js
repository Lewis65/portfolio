const path = require("path")

//Create pages from Contentful blog posts
exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    const template = path.resolve('./src/templates/post.js')
    return graphql(`
        {
            allContentfulBlogPost {
                edges {
                    node {
                        id
                        title
                        slug
                        createdAt
                        updatedAt
                        tags
                        description {
                            description
                        }
                        featuredImage {
                            fluid {
                                base64
                            }
                        }
                        bodyText {
                            childMarkdownRemark {
                                html
                            }
                        }
                    }
                }
            }
        }
    `).then(result => {
        if(result.hasOwnProperty('errors')){
            throw result.errors
        }

        //Create pages
        result.data.allContentfulBlogPost.edges.forEach(edge => {
            createPage({
                path: `/blog/${edge.node.slug}`,
                component: template,
                context: edge.node
            })
        })
    })
}