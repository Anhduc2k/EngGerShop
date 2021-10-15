import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { path } from '../../constants/path'
import { useAuthenticated } from '../../hooks/useAuthenticated'
import usePopover from '../../hooks/usePopover'
import Popover from '../Popover/Popover'
import * as S from './navBar.style'
export default function NavBar() {
  const authenticated = useAuthenticated()
  const profile = useSelector(state => state.auth.profile)
  const { activePopover, showPopover, hidePopover } = usePopover()

  return (
    <S.Navbar>
      <S.NavMenu>
        {authenticated && (
          <li>
            <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
              <S.UserImage src="https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-profile-line-black-icon-png-image_691051.jpg" />
              <S.UserName>{profile.name || profile.email}</S.UserName>
              {activePopover && (
                <Popover active={activePopover}>
                  <S.UserLink to="">Tài khoản của tôi</S.UserLink>
                  <S.UserLink to="">Đơn mua</S.UserLink>
                  <S.UserButton>Đăng xuất</S.UserButton>
                </Popover>
              )}
            </S.User>
          </li>
        )}
        {!authenticated && (
          <Fragment>
            <li>
              <S.NavLink to={path.register}>Đăng ký</S.NavLink>
            </li>
            <li>
              <S.NavLink to={path.login}>Đăng nhập</S.NavLink>
            </li>
          </Fragment>
        )}
      </S.NavMenu>
    </S.Navbar>
  )
}
