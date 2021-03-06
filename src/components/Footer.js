/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'

import SocialLinks from '../components/social'

import {FaPhone, FaMapMarker, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer sx={{
      py: 6,
      borderTop: '1px solid',
      borderColor: 'gray.5',
      bg: 'dark',
      color: 'white',
      a: {
        color: 'white'
      }
    }}
    >
      <Container sx={{variant: ['utils.textCenter']}}>
        <div sx={footerContentStyles}>
          <div className='column' sx={{textAlign: 'left'}}>
            <h6>My Banat Souvenirs</h6>
            <p>Timisoara Tour Guide S.R.L.</p>
            <ul sx={{variant: 'lists.reset', li: {mb: 4, a: {variant: 'utils.noUnderline'}, svg: {mr: 2}}}}>
              <li>
                <FaMapMarkerAlt />
                Calea Torontalului nr.6 sc.A ap.11 <br />
                300628 Timisoara, Romania
              </li>
              <li>
                <a href='mailto:contact@banatdesign.com'><FaEnvelope /> contact@banatdesign.com</a>
              </li>
              <li>
                <a href='tel:+40-742-112-174'><FaPhone /> +40 742 112 174</a>
              </li>
            </ul>
          </div>
          <div className='column'>
            <h6>Info</h6>
            <ul sx={{textAlign: 'left', mx: 'auto', width: '200px', li: {py: 3}}}>
              <li><Link to='/terms-and-conditions/'>Terms &amp; Conditions</Link></li>
              <li><Link to='/privacy-policy/'>Privacy Policy</Link></li>
              <li><Link to='/contact/'>Contact</Link></li>
            </ul>
          </div>
          <div className='column'>
            <h6>Social</h6>
            <ul sx={{variant: 'lists.reset', fontSize: 4}}>
              <SocialLinks />
            </ul>
          </div>

        </div>
        <p sx={{
          fontSize: 0
        }}
        >Copyright &copy;{new Date().getFullYear()} <a href='https://timisoaratourguide.com' target='_blank' rel='noopener noreferrer'>Timisoara Tour Guide</a>, All Rights Reserved. | Website by <a href='https://ovswebsites.com' target='_blank' rel='noopener noreferrer'>OVS Websites</a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer

const footerContentStyles = {
  display: 'flex',
  fontSize: 0,
  mb: 5,
  '.column': {
    width: ['full', null, null, '1/3']
  },
  h6: {
    fontSize: 1,
    mt: 0
  }
}
