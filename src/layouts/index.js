import React from 'react'
import LayoutWrapper from '../components/layout'
import {hot} from 'react-hot-loader/root'
import Helmet from 'react-helmet'

const Layout = (props) => (
  <>
    <Helmet htmlAttributes={{lang: 'en'}}>
      <link href='https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css' rel='stylesheet' type='text/css' />
      <script src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js' />
      <script id='snipcart' src='https://cdn.snipcart.com/scripts/2.0/snipcart.js' data-api-key='MDliYWU5YjItNTU0MC00Njk0LWIyZDgtNTc0YTIwYmNkYTU4NjM2NDUzMjExMTEyODc1Mzc5' />
    </Helmet>

    <LayoutWrapper>{props.children}</LayoutWrapper>
  </>
)

export default hot(Layout)
