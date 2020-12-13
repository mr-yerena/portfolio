// Import React
import React from 'react'

// Import Libraries
import { Title as RbxTitle } from 'rbx'
import PropTypes from 'prop-types'

const Title = (props) => {
  const {
    children,
    className,
    type,
    centered,
  } = props

  const fullClassName = centered ? `${className} centered` : className

  return (
    <RbxTitle
      as={type}
      className={`${fullClassName}`}
    >
      {
        children
      }
    </RbxTitle>
  )
}

titleTypes = [
  `h2`,
]

Title.defaultProps = {
  className: ``,
  type: `h2`,
  centered: false,
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(titleTypes),
  centered: PropTypes.bool,
}

export default Title
