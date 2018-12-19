import React from 'react'
import styled from 'styled-components'

const SocialWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  margin: 0 auto;
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`
const SocialLink = styled.a`
  background-color: ${props => props.theme.colors.gunmetal};
  color: ${props => props.theme.colors.white};
  border-radius: 50%;
  box-sizing: border-box;
  font-size: 24px;
  height: 36px;
  line-height: 24px;
  padding-top: 5px;
  text-decoration: none;
  text-align: center;
  width: 36px;
`

const Social = () => (
  <SocialWrapper>
      <SocialLink href="#">
        <i className="fab fa-github"></i>
      </SocialLink>
      <SocialLink href="#">
        <i className="fab fa-linkedin"></i>
      </SocialLink>
      <SocialLink href="#">
        <i className="fab fa-free-code-camp"></i>
      </SocialLink>
  </SocialWrapper>
)

export default Social
