import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {hero ,heroText, heading,subheading,buttons,button,buttonWork} from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    {/*start of hero*/}
    <div className={hero}>
      <div className={heroText}>
        <h1 className={heading}>Hi, I'm Caleb Cheptumo, a Web Developer</h1>
        <p className={subheading}>
          Specializing in building exceptional, high-quality websites and
          applications.
        </p>
        <div className={buttons}>
          <a
            href="https://drive.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={button}>Download Resume</button>
          </a>
          <a
            href="mailto:kibusia@calebcheptumo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={buttonWork}>
              Let's Work Together
            </button>
          </a>
        </div>
      </div>
    </div>
    {/*end of hero*/}
  </Layout>
)

export const Head = () => <Seo title="Home Page" />

export default IndexPage
