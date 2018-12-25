import styled from 'styled-components'

const Heading = styled.h1`
  background-color: ${props => props.backgroundColor || props.theme.colors.bg1};
  box-shadow: 5px 5px ${props => props.theme.colors.active};
  color: ${props => props.color || props.theme.colors.active};
  display: inline-block;
  font-family: ${props => props.theme.fonts.header};
  font-size: 48px;
  margin: 0 auto 0 0;
  padding: 0.5rem;
  @media screen and (min-width: 1024px) {
    box-shadow: 8px 8px ${props => props.theme.colors.active};
    font-size: 500%;
  }
`

export default Heading