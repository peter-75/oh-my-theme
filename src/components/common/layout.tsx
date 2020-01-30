import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
/** @jsx jsx */
import { jsx } from "theme-ui";
import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} sx={{ width: "100%" }} />
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
        }}
      >
        {children}
      </main>
      <footer
        sx={{
          width: "100%",
          color: "gray",
          textAlign: "center",
          fontSize: "12px",
          fontStyle: "italic",
          margin: "10px 0",
        }}
      >
        Template is largely inspired from the beautiful codePen of Olivia Ng (
        <a
          href="https://codepen.io/oliviale/pen/mgWjpq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to the codePen
        </a>
        )
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
