import { useStaticQuery, graphql } from "gatsby";
import * as React from "react";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div>
      <title>{data.site.siteMetadata.title}</title>
      <nav>
        <h1>{data.site.siteMetadata.title}</h1>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
