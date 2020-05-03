var path = require("path");
exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    console.log("config")
   
    deletePage(page)
    // You can access the variable "locale" in your page queries now
    if(page.path.includes('photos')){
      console.log(page)
      page.path='/photos'
      createPage({
        ...page
        
    })
    }else{
      createPage({
        ...page,
        context: {
            ...page.context,
            locale: page.context.intl.language,
        },
    })
    }
    
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blog-post.js");
    resolve(
      graphql(`
        {
          allContentfulBlogs(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulBlogs.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          });
        });
        return;
      })
    );
  });
};
