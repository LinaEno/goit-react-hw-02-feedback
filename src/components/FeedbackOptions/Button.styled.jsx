import styled from "@emotion/styled"
import theme from "components/utils";

console.log(theme);

const ButtonStyled = styled.button`
    cursor: pointer;
    padding: 10px 16px;
    background-color: #c9dbb8;
    outline: none;
    border-color: #e8e8e8;
    margin-right: 20px;
    &:hover, &:focus {
        background-color: #607949;
        color: #fff;
    }
    
`

export default ButtonStyled;