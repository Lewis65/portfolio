import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.theme.colors.lightblue};
  border: none;
  box-shadow: ${props => props.theme.smallShadow};
  color: white;
  cursor: pointer;
  font-size: 120%;
  outline: none;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  @media screen and (min-width: 1024px) {
    font-size: 150%;
  }
`

export default Button
