/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/snipcart.css'
import '../styles/base.css'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
