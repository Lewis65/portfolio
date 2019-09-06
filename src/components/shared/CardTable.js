import styled from 'styled-components'

const CardTable = styled.div`
    columns: auto 250px;
    column-gap: 2rem;
    & > div {
        margin-bottom: 2rem;
        &:last-child {
            margin-bottom: 0;
        }
    }
`

export default CardTable