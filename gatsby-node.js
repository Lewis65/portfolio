const path = require("path")

//Create pages from Contentful blog posts
exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    const postTemplate = path.resolve('./src/templates/post.js')
    const postTagTemplate = path.resolve('./src/templates/postTag.js')
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
                                src
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

        //Map all blog tags
        let allTagsInBlogPosts = []
        let mapOfTagsAndTheirPosts = {}
        result.data.allContentfulBlogPost.edges.forEach(edge => {
            if(edge.node.tags && edge.node.tags.length){
                edge.node.tags.forEach(tag => {
                    allTagsInBlogPosts.push(tag)
                    if(mapOfTagsAndTheirPosts.hasOwnProperty(tag)){
                        mapOfTagsAndTheirPosts[tag].push(edge.node)
                    } else {
                        mapOfTagsAndTheirPosts[tag] = [edge.node]
                    }
                })
            }
        })
        
        allTagsInBlogPosts = Array.from(new Set(allTagsInBlogPosts))

        //Create pages for posts with tags
        allTagsInBlogPosts.forEach(tag => {
            createPage({
                path: `/blog/tags/${tag}`,
                component: postTagTemplate,
                context: {
                    posts: mapOfTagsAndTheirPosts[tag],
                    tag: tag
                }
            })
        })

        //Create pages for blog posts
        result.data.allContentfulBlogPost.edges.forEach(edge => {
            createPage({
                path: `/blog/${edge.node.slug}`,
                component: postTemplate,
                context: edge.node
            })
        })
    })
}