import React from "react";

import Layout from "../components/common/layout";
import SEO from "../components/seo";
import App from "../components/App";
import SettingsProvider from "../components/context/SettingsProvider";
import AllThemesProvider from "../components/context/AllThemesProvider";

const IndexPage = () => (
  <SettingsProvider>
    <AllThemesProvider>
      <Layout>
        <SEO title="Home" />
        <App />
      </Layout>
    </AllThemesProvider>
  </SettingsProvider>
);

export default IndexPage;
