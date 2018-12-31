import styled from 'styled-components'

const Heading = styled.h1`
  background-color: #FFF;
  box-shadow: 5px 5px ${props => props.active ? props.theme.colors.activeShade : props.theme.colors.highlight};
  color: ${props => props.active ? props.theme.colors.active : props.theme.colors.highlight};
  display: inline-block;
  font-family: ${props => props.theme.fonts.header};
  font-size: 48px;
  margin: 0 auto 1rem 0;
  padding: 1rem;
  @media screen and (min-width: 1024px) {
    box-shadow: 8px 8px ${props => props.active ? props.theme.colors.activeShade : props.theme.colors.highlight};
    font-size: 500%;
    margin-bottom: 2rem;
  }
`

export default Heading