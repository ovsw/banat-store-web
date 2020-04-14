/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'

const Footer = () => {
  return (
    <footer sx={{borderTop: '1px solid', borderColor: 'gray.5', py: 3}}>
      <Container sx={{variant: ['utils.textCenter']}}>
        <p>Copyright &copy;{new Date().getFullYear()} <a href='https://timisoaratourguide.com' target='_blank' rel='noopener noreferrer'>Timisoara Tour Guide</a>, All Rights Reserved. | Website by <a href='https://ovswebsites.com' target='_blank' rel='noopener noreferrer'>OVS Websites</a> </p>
      </Container>
    </footer>
  )
}

export default Footer
