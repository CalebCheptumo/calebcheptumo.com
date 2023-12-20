import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-around`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-lg)`,
        textDecoration: `none`,
        color: `var(--color-text)`,
      }}
    >
      {siteTitle}
    </Link>
    <nav>
      <ul
        style={{
          display: `flex`,
          listStyle: `none`,
          margin: 0,
        }}
      >
        <li
          style={{
            marginLeft: `var(--space-4)`,
          }}
        >
          <Link
            to="/"
            style={{
              fontSize: `var(--font-md)`,
              textDecoration: `none`,
              color: `var(--color-text)`,
            }}
          >
            Home
          </Link>
        </li>
        <li
          style={{
            marginLeft: `var(--space-4)`,
          }}
        >
          <Link
            to="/about"
            style={{
              fontSize: `var(--font-md)`,
              textDecoration: `none`,
              color: `var(--color-text)`,
            }}
          >
            About
          </Link>
        </li>
        <li
          style={{
            marginLeft: `var(--space-4)`,
          }}
        >
          <Link
            to="/projects"
            style={{
              fontSize: `var(--font-md)`,
              textDecoration: `none`,
              color: `var(--color-text)`,
            }}
          >
            Projects
          </Link>
        </li>
        <li
          style={{
            marginLeft: `var(--space-4)`,
          }}
        >
          <Link
            to="/blog"
            style={{
              fontSize: `var(--font-md)`,
              textDecoration: `none`,
              color: `var(--color-text)`,
            }}
          >
            Blog
          </Link>
        </li>
        <li
          style={{
            marginLeft: `var(--space-4)`,
          }}
        >
          <Link
            to="/contact"
            style={{
              fontSize: `var(--font-md)`,
              textDecoration: `none`,
              color: `var(--color-text)`,
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
