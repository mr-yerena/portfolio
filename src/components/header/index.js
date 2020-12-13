// Import React
import React from 'react'

// Import Elements
import { CallToAction } from 'elements'

// Import Utils
import ElementKey from 'utils/elementKey'

// Import Libraries
import {
  Container,
  Navbar,
} from 'rbx'
import PropTypes from 'prop-types'

const Header = (props) => {
  const {
    navbar,
    logo,
  } = props

  return (
    <Container>
      <Navbar>
        <Navbar.Brand></Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Segment align={`end`}>
            {
              navbar.map((item, index) => (
                <Navbar.Item
                  key={`navbar-link-${ElementKey(index)}`}
                >
                  <CallToAction
                    to={item.to}
                  >
                    {
                      item.title
                    }
                  </CallToAction>
                </Navbar.Item>
              ))
            }
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
    </Container>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  navbar: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Header
