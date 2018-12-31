import styled from 'styled-components'

const Main = styled.div`
  align-content: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: absolute;
  z-index: 10;
  @media screen and (min-width: 1024px) {
    margin-top: 4rem;
  }
  p {
    line-height: 125%;
    @media screen and (min-width: 1024px) {
      font-size: 120%;
    }
  }
`

export default Main