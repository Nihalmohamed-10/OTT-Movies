import styled from 'styled-components'

const StyledAbout = styled.h3`
 width: 400px;
    font-size: 20px;
    font-weight: 700;

    @media all and (max-width:981px){
        width: 350px;
    }
    @media all and (max-width:771px){
        width: 250px;
        font-size: 18px;
    }
    @media all and (max-width:481px){
        width: 200px;
        font-size: 18px;
        font-weight: 400;
    }
    @media all and (max-width:361px){
        width: 150px;
        font-size: 14px;
        font-weight: 400;
    }
`

export default StyledAbout;