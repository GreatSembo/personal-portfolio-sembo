import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./header";
import Footer from "./footer";

import "../css/style.css";
import "../css/font-awesome.css";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-oldschool-dark'
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children, header }) => {
  const options = {
    // you can also just use 'bottom center'
    position: positions.MIDDLE,
    timeout: 4000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }
   
   
  return <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        contentfulSiteInformation {
          siteName
          siteDescription
          logo {
            file {
              url
            }
          }
          menus
        }
      }
    `}
    render={data => (
      <>
      <AlertProvider template={AlertTemplate} {...options}>
        <Header
          data={data.contentfulSiteInformation}
          siteTitle={data.contentfulSiteInformation.siteName}
          header={header}
        />
        <div>
          <main id="home">{children}</main>
        </div>
        <Footer siteName={data.contentfulSiteInformation.siteName} />
        </AlertProvider>
      </>
    )}
  />
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
