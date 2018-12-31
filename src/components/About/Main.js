import styled from 'styled-components'

const Main = styled.main`
  align-content: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: absolute;
  z-index: 10;
  @media screen and (min-width: 1024px) {
    margin-top: 8rem;
  }
  p {
    color: ${props => props.theme.colors.bg1};
    line-height: 150%;
    @media screen and (min-width: 1024px) {
      font-size: 130%;
    }
  }
`

export default Main