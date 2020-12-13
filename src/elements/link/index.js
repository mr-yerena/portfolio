// Import React
import React from 'react'

// Import Utils
import isExternalLink from 'utils/isExternalLink'

// Import Libraries
import { Link as GbLink } from 'gatsby'
import PropTypes from 'prop-types'

const Link = (props) => {
  const {
    className,
    children,
    to,
  } = props

  return (
    <>
      {
        isExternalLink(to) ? (
          <a
            href={to}
            target={`_blank`}
            className={className}
          >
            {
              children
            }
          </a>
        ) : (
          <GbLink
            to={to}
            className={className}
          >
            {
              children
            }
          </GbLink>
        )
      }
    </>
  )
}

Link.defaultProps = {
  className: ``,
}

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default Link