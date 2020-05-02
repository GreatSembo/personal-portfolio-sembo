import React, { Component } from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function TomatoTime(props){
    
    return (
      <Layout header="Tomato Timer">
        <SEO
          title="Tomato Timer"
          keywords={[`Luca Sembolini`, `Frontend Developer`, `Developer`, `Tomato`,`timer`,`Tomato Timer`,`metodo pomodoro`,`Pomodoro Timer`]}
        />
        <div className="site-container blogs-page" id="Blogs">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">Tomato Timer</h1>
            </div>
          </div>
        </div>
      </Layout>
    );
}
export default TomatoTime
