import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/test">Go to /test</Link>
    <br />
    <Link to="/test/one">Go to /test/one</Link>
  </div>
)

export default IndexPage
