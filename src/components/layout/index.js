// Import React
import React from 'react'

// Import Components
import {
  SEO,
} from 'components'

// Import Libraries
import PropTypes from 'prop-types'

const Layout = (props) => {
  const { children } = props

  return (
    <>
      <SEO
        pageTitle={`Home Page`}
      />
      {
        children
      }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
