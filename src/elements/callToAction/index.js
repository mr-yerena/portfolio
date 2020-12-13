// Import React
import React from 'react'

// Import Elements
import { Link } from 'elements'

// Import Libraries
import { Button } from 'rbx'
import PropTypes from 'prop-types'

const CallToAction = (props) => {
  const {
    className,
    children,
    to,
  } = props

  return (
    <>
      {
        to ? (
          <Link
            className={className}
            to={to}
          >
            {
              children
            }
          </Link>
        ) : (
          <Button>
            {
              children
            }
          </Button>
        )
      }
    </>
  )
}

CallToAction.defaultProps = {
  className: ``,
  to: null,
}

CallToAction.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
}

export default CallToAction
