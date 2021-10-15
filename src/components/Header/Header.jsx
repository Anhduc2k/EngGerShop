import React from 'react'
import NavBar from '../Navbar/NavBar'
import * as S from './header.style'
export default function Header() {
  return (
    <S.StyledHeader>
      <div className="container">
        <NavBar />
      </div>
    </S.StyledHeader>
  )
}
