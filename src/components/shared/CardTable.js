import styled from 'styled-components'

const CardTable = styled.div`
    columns: auto 1;
    column-gap: 2rem;
    & > div {
        margin-bottom: 2rem;
        &:last-child {
            margin-bottom: 0;
        }
    }
    @media screen and (min-width: 1024px){
        columns: 300px auto;
    }
`

export default CardTable