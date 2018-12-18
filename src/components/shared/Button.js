import styled from 'styled-components'

const Button = styled.a`
  background-color: ${props => props.theme.colors.tangerine};
  border-radius: 2px;
  box-shadow: 2px 2px ${props => props.theme.colors.tangerineDark};
  color: ${props => props.theme.colors.white};
  font-size: 24px;
  margin: 1rem auto;
  padding: 6px;
  text-align: center;
  text-decoration: none;
`

export default Button
