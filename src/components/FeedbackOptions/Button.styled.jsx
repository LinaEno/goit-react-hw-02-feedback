import styled from '@emotion/styled';

const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 10px 16px;
  background-color: #c9dbb8;
  outline: none;
  border-color: #e8e8e8;
  margin-right: 20px;
  &:hover,
  &:focus {
    background-color: #607949;
    color: ${p => p.theme.colors.white};
  }
`;

export default ButtonStyled;
