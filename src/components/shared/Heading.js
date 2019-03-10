import styled from 'styled-components'

const Heading = styled.h1`
  background-color: ${props => props.hero || props.blog ? "white" : "none"};
  box-shadow: ${props => props.hero || props.blog ?  `8px 8px 0 ${props.theme.colors.pink}` : "none"};
  color: ${props => props.hero || props.blog ? props.theme.colors.lightblue : props.theme.colors.body};
  display: inline-block;
  font-family: ${props => props.theme.fonts.header};
  font-size: ${props => props.blog ? "200%" : "56px"};
  margin: 0 auto 0 0;
  padding: ${props => props.hero || props.blog ? "1rem" : "0"};
  @media screen and (min-width: 1024px) {
    font-size: 500%;
    margin-bottom: ${props => props.blog ? 0 : "2rem"};
  }
`

export default Heading