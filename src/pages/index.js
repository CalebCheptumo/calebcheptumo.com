import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    {/*start of hero*/}
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Hi, I'm Caleb Cheptumo, a Web Developer</h1>
        <p>
          Specializing in building exceptional, high-quality websites and
          applications.
        </p>
        <a
          href="https://drive.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.button}>Download Resume</button>
        </a>
      </div>
      <div className={styles.heroImage}>
        <StaticImage
          src="../images/calebcheptumo.png"
          alt="Caleb Cheptumo"
          style={{ borderRadius: "50%", width: "300px", height: "300px" }}
        />
      </div>
    </div>
    {/*end of hero*/}
  </Layout>
)

export const Head = () => <Seo title="Home Page" />

export default IndexPage
