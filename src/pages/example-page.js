// import React, { Component } from "react";
// import Img from "gatsby-image";
// import { graphql } from "gatsby";

// import Layout from "../components/layout";
// import SEO from "../components/seo";

// function Example(props){
//     const { data } = props;
//     console.log(data)
//     return (
//       <Layout header="Tomato Timer">
//         <SEO
//           title="Tomato Timer"
//           keywords={[`Luca Sembolini`, `Frontend Developer`, `Developer`, `Tomato`,`timer`,`Tomato Timer`,`metodo pomodoro`,`Pomodoro Timer`]}
//         />
//         <div className="site-container blogs-page" id="Blogs">
//           <div className="container">
//             <div className="section-head">
//               <h1 className="line-heading h2">Tomato Timer {data.contentfulAboutMe.name}</h1>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     );
// }
// export default Example
// export const pageQuery = graphql`
//   query example {
//     contentfulAboutMe {
//       name
//       photo {
//         file {
//           url
//         }
//         fluid {
//           base64
//           aspectRatio
//           src
//           srcSet
//           srcWebp
//           srcSetWebp
//           sizes
//         }
//       }
//       designation
//       age
//       facebook
//       github
//       gmail
//       id
//       instagram
//       linkdin
//       twitter
//       location
//       description {
//         childMarkdownRemark {
//           html
//         }
//       }
//       bannerImage {
//         fluid(maxWidth: 1500) {
//           base64
//           aspectRatio
//           src
//           srcSet
//           srcWebp
//           srcSetWebp
//           sizes
//         }
//       }
//       bannerList
//     }
//     allContentfulService {
//       edges {
//         node {
//           title
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//     allContentfulBlogs(limit: 5) {
//       edges {
//         node {
//           title
//           slug
//           featureImage {
//             fluid(maxWidth: 600) {
//               base64
//               aspectRatio
//               src
//               srcSet
//               srcWebp
//               srcSetWebp
//               sizes
//             }
//           }
//           createdAt
//         }
//       }
//     }
//     allContentfulTestimonials {
//       edges {
//         node {
//           name
//           subTitle
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//           avatarImage {
//             fluid(maxWidth: 200) {
//               base64
//               aspectRatio
//               src
//               srcSet
//               srcWebp
//               srcSetWebp
//               sizes
//             }
//           }
//         }
//       }
//     }
//     allContentfulWorks {
//       edges {
//         node {
//           siteName
//           url
//           image {
//             fluid(maxWidth: 600) {
//               base64
//               aspectRatio
//               src
//               srcSet
//               srcWebp
//               srcSetWebp
//               sizes
//             }
//           }
//         }
//       }
//     }
//     contentfulPhotos {
//       photos {
//         fluid(maxWidth: 600) {
//           base64
//           aspectRatio
//           src
//           srcSet
//           srcWebp
//           srcSetWebp
//           sizes
//         }
//       }
//     }
//     contentfulSiteInformation {
//       menus
//     }
//   }
// `;


