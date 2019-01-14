import styled from 'styled-components'

const Main = styled.main`
  align-content: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: absolute;
  z-index: 10;
  @media screen and (min-width: 1024px) {
    height: 100vh;
    padding: 5rem;
  }
  p {
    color: white;
    line-height: 150%;
    @media screen and (min-width: 1024px) {
      font-size: 130%;
    }
  }
`

export default Main