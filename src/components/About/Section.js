import styled from 'styled-components'

const Section = styled.section`
    color: white;
    margin: 2rem 0;
    text-align: center;
    width: 100%;
    h2 {
        font-family: ${props => props.theme.fonts.header};
        font-size: 3em;
        padding: 0;
        margin: 0 auto 2rem auto;
    }
    p {
        line-height: 200%;
        margin: 2rem auto;
        padding: 0;
    }
`

export default Section