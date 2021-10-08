import React from 'react'
import Footer from '../components/Footer/Footer'
import HeaderRegister from '../components/HeaderRegister/HeaderRegister'

export default function RegisterLayout({ childen, title }) {
  return (
    <div>
      <HeaderRegister title={title} />
      {childen}
      <Footer />
    </div>
  )
}
