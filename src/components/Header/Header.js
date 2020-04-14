/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'

const Header = () => {
  return (
    <header>
      <Container>
        <Link to='/' sx={{color: 'black', textDecoration: 'none', ':hover': {textDecoration: 'underline'}}}>
          <h1>Banat Store</h1>
        </Link>
      </Container>
    </header>
  )
}

export default Header
