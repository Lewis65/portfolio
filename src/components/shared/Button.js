import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.theme.colors.active};
  border: none;
  border-radius: 1rem;
  box-shadow: ${props => props.theme.smallShadow};
  color: ${props => props.theme.colors.bg1};
  font-size: 120%;
  margin: 1rem auto;
  outline: none;
  padding: 6px;
  text-align: center;
  text-decoration: none;
  &:hover {
    animation: "perkup" 0.2s forwards ease-out;
    color: white;
  }
  @media screen and (min-width: 1024px) {
    font-size: 150%;
  }
  @keyframes perkup {
    0% {
      margin-top: 1rem;
    }
    100% {
      margin-top: 0.75rem;
    }
  }
`

export default Button
