import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";
import About from "../components/about";
import Service from "../components/service";
import Work from "../components/work";
import Blogs from "../components/blogs";
import Testimonial from "../components/testimonial";
import Contact from "../components/contact";
import Photos from "../components/photos";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title={data.contentfulAboutMe.designation}
      keywords={[`Rohit Gupta`, `Frontend Developer`, `Developer`]}
    />
    <Banner data={data.contentfulAboutMe}></Banner>

    {data.contentfulSiteInformation.menus
      .filter(item => item === "About")
      .map(t => {
        return (<Zoom><About data={data.contentfulAboutMe}></About></Zoom>);
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Service")
      .map(t => {
        return <Service data={data.allContentfulService}></Service>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Blogs")
      .map(t => {
        return (<Rotate bottom left >
          <Blogs data={data.allContentfulBlogs}></Blogs>;
          </Rotate>)
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Work")
      .map(t => {
        return (<Rotate bottom right><Work data={data.allContentfulWorks}></Work></Rotate>);
      })}

    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Testimonials")
      .map(t => {
        return (
          <Testimonial data={data.allContentfulTestimonials}></Testimonial>
        );
      })} */}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Photos")
      .map(t => {
        return (<Rotate bottom left><Photos data={data.contentfulPhotos}></Photos></Rotate>);
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Contact")
      .map(t => {
        return <Contact data={data.contentfulAboutMe.gmail}></Contact>;
      })}
  </Layout>
);

export default injectIntl(IndexPage) ;

export const pageQuery = graphql`
  query AboutQuery($locale: String) {
    contentfulAboutMe(node_locale: { eq: $locale } ) { 
      name
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      designation
      age
      facebook
      github
      gmail
      id
      instagram
      linkdin
      twitter
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      bannerList
    }
    allContentfulService {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulBlogs(limit: 5) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          createdAt
        }
      }
    }
    allContentfulTestimonials {
      edges {
        node {
          name
          subTitle
          description {
            childMarkdownRemark {
              html
            }
          }
          avatarImage {
            fluid(maxWidth: 200) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    allContentfulWorks {
      edges {
        node {
          siteName
          url
          image {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    contentfulPhotos {
      photos {
        fluid(maxWidth: 600) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
    contentfulSiteInformation {
      menus
    }
  }
`;
