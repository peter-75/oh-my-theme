import React from "react";

import Layout from "../components/common/layout";
import SEO from "../components/seo";
import App from "../components/App";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <App />
  </Layout>
);

export default IndexPage;
