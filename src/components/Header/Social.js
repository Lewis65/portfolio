import React from 'react'
import styled from 'styled-components'

const SocialWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  margin: 0 auto;
  max-width: 200px;
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
      <SocialLink target="_blank" href="https://github.com/Lewis65">
        <i className="fab fa-github"></i>
      </SocialLink>
      <SocialLink target="_blank" href="https://www.linkedin.com/in/lewishorwood/">
        <i className="fab fa-linkedin"></i>
      </SocialLink>
      <SocialLink target="_blank" href="https://www.freecodecamp.org/lewis65">
        <i className="fab fa-free-code-camp"></i>
      </SocialLink>
  </SocialWrapper>
)

export default Social
