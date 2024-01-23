import styled from 'styled-components'

const StyledButton = styled.button`
border-radius: 5px;
    color: white;
    font-weight: 700;
    background-color: transparent;
    outline: none;
    border: 1px solid black;
    height: 40px;
    cursor: pointer; 
    margin: auto;
    margin-right: 10px;
    text-align: center;
    padding: 8px 16px;
    padding-bottom: 10px;
    &:hover {
    color: black;
    background-color: white; 
}
`

export default StyledButton;