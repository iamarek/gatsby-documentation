import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  background: ${({theme}) => theme.darkGrey};
  padding: 20px 15px;
  display: flex;
  justify-content: flex-end;
`

const StyledH1 = styled.h1`
  font-size: 20px;
  color: white;
`

const Header = ({ siteTitle }) => (
  <StyledWrapper>
    <Link to="/">
      <StyledH1 style={{ margin: 0 }}>
        {siteTitle}
      </StyledH1>
    </Link>
  </StyledWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
