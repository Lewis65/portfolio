import styled from 'styled-components'

const Main = styled.div`
  align-content: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  @media screen and (min-width: 1024px) {
    padding: 4rem;
    width: calc(100%-(4rem+${props => props.theme.headerWidth}));
  }
  p {
    line-height: 125%;
    @media screen and (min-width: 1024px) {
      font-size: 120%;
    }
  }
`

export default Main