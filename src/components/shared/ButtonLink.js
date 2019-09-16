import styled from 'styled-components'
import { Link } from 'gatsby'

const Button = styled(Link)`
  background-color: ${props => props.theme.colors.pink};
  border-radius: 1rem;
  box-shadow: ${props => props.theme.smallShadow};
  color: white;
  font-size: 120%;
  margin: 1rem auto;
  padding: 6px;
  text-align: center;
  text-decoration: none;
  @media screen and (min-width: 1024px) {
    font-size: 150%;
  }
`

export default Button
