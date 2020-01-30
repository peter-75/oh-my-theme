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
        }}
      >
        Footer
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
