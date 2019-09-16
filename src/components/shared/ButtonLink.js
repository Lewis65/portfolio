import styled from 'styled-components'
import { Link } from 'gatsby'

const Button = styled(Link)`
  background-color: ${props => props.theme.colors.lightblue};
  border: none;
  box-shadow: ${props => props.theme.smallShadow};
  color: white;
  cursor: pointer;
  font-size: 120%;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  @media screen and (min-width: 1024px) {
    font-size: 150%;
  }
`

export default Button
