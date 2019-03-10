import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.theme.colors.pink};
  border: none;
  border-radius: 1rem;
  box-shadow: ${props => props.theme.smallShadow};
  color: white;
  font-size: 120%;
  margin: 1.25rem auto 0.75rem;
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
      margin: 1.25rem auto 0.75rem;
    }
    100% {
      margin: 0.75rem auto 1.25rem;
    }
  }
`

export default Button
