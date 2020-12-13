// Import React
import React from 'react'

// Import Libraries
import { Section as RbxSection } from 'rbx'
import PropTypes from 'prop-types'

const Section = (props) => {
  const { children, className } = props

  return (
    <RbxSection
      className={className}
    >
      {
        children
      }
    </RbxSection>
  )
}

Section.defaultProps = {
  children: null,
  className: ``,
}

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Section
