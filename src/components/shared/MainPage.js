import styled from 'styled-components'

const Main = styled.div`
  align-content: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  @media screen and (min-width: 1024px) {
    margin-top: 2rem;
    padding: 5rem;
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