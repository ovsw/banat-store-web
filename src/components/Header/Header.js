/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'

const Header = () => {
  return (
    <header sx={{mt: 5}}>
      <Container>
        <Link to='/' sx={{color: 'black', textDecoration: 'none', ':hover': {textDecoration: 'underline'}}}>
          <Styled.h1 as='p'>My Banat Souvenirs</Styled.h1>
        </Link>
      </Container>
    </header>
  )
}

export default Header
