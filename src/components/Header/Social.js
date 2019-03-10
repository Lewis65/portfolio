import React from 'react'
import styled from 'styled-components'

const SocialWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  margin: 0 auto;
  width: 100%;
`
const SocialLink = styled.a`
  background-color: white;
  color: ${props => props.theme.colors.darkblue};
  border-radius: 50%;
  box-shadow: ${props => props.theme.smallShadow};
  box-sizing: border-box;
  font-size: 24px;
  height: 40px;
  line-height: 30px;
  padding: 5px;
  text-decoration: none;
  text-align: center;
  width: 40px;
  @media screen and (min-width: 1024px) {
    transition: color 0.15s ease-out;
    &:hover {
      color: ${props => props.theme.colors.lightblue};
    }
  }
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
