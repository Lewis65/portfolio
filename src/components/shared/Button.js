import styled from 'styled-components'
import { Link } from 'gatsby'

const Button = styled(Link)`
  background-color: ${props => props.theme.colors.active};
  border-radius: 2px;
  box-shadow: 2px 2px ${props => props.theme.colors.activeDark};
  color: ${props => props.theme.colors.bg1};
  font-size: 24px;
  margin: 1rem auto;
  padding: 6px;
  text-align: center;
  text-decoration: none;
`

export default Button
