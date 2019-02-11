import styled from 'styled-components'

const Heading = styled.h1`
  background-color: ${props => props.hero || props.blog ? "white" : props.theme.colors.bg2};
  box-shadow: 8px 8px ${props => props.hero || props.blog ?  props.theme.colors.active : props.theme.colors.shadow};
  color: ${props => props.hero || props.blog ? props.theme.colors.highlight : props.theme.colors.body};
  display: inline-block;
  font-family: ${props => props.theme.fonts.header};
  font-size: ${props => props.blog ? "200%" : "56px"};
  margin: 0 auto 1rem 0;
  padding: 1rem;
  @media screen and (min-width: 1024px) {
    font-size: 500%;
    margin-bottom: ${props => props.hero ? "2rem" : 0};
  }
`

export default Heading