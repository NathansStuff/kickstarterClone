import React, { Fragment, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SignUpComponent from './signupComponents/SignUpComponent';

export default function Login() {
  return (
    <Fragment>
      <Navbar />
      <SignUpComponent />
      <Footer />
    </Fragment>
  )
}
