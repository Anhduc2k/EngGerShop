import styled from 'styled-components'

export const Footer = styled.footer`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.65);
  padding: 4.4rem 0 3.7rem;
  background: #f5f5f5;
  width: 100%;
  min-width: max-content;
`
export const FooterTop = styled.footer`
  background-color: #fbfbfb;
  border-top: 4px solid #eee;
  padding-top: 16px;
`
export const FooterGrid = styled.footer`
  max-width: 1200px;
  margin: auto;
`
export const FooterRow = styled.footer`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: -4px;
  margin-right: -4px;
  width: 100%;
`
export const FooterCol = styled.footer`
  width: 20%;
  box-sizing: border-box;
`
export const FooterList = styled.div`
  padding-left: 0;
  margin-top: 20px;
  list-style: none;
`
export const FooterListItem = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  color: #666;
  right: 0;
  padding: 8px 0;
  transition: right linear 0.2s;
  &:hover {
    color: #ee4d2d;
    cursor: pointer;
  }
`

export const FooterHeading = styled.footer`
  width: 25%;
  text-transform: uppercase;
`
export const Footer1 = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`

export const Language = styled.div`
  display: flex;
  span {
    padding: 0 0.3125rem;
    cursor: pointer;
    &:not(:last-child) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
    &.active {
      color: #ee4d2d;
    }
  }
`

export const Footer2 = styled.div`
  font-size: 1.2rem;
  text-align: center;
  div {
    line-height: 2;
    &:first-child {
      margin-bottom: 1.5rem;
    }
  }
`
