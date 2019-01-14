import React from 'react'
import styled from 'styled-components'

const SocialWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  margin: 0 auto;
  width: 100%;
`
const SocialLink = styled.a`
  background-color: ${props => props.theme.colors.body};
  color: ${props => props.theme.colors.bg1};
  border-radius: 50%;
  box-shadow: ${props => props.theme.smallShadow};
  box-sizing: border-box;
  font-size: 24px;
  height: 36px;
  line-height: 24px;
  padding-top: 5px;
  text-decoration: none;
  text-align: center;
  width: 36px;
  @media screen and (min-width: 1024px) {
    margin-top: 1rem;
    &:hover {
      animation: "perkup" 0.2s forwards ease-out;
      color: white;
    }
    @keyframes perkup {
      0% {
        margin-top: 1rem;
      }
      100% {
        margin-top: 0.75rem;
      }
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
