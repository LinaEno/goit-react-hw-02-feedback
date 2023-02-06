import styled from '@emotion/styled';

const ButtonStyled = styled.button`
  cursor: pointer;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.btnBg};
  outline: none;
  border-color: ${p => p.theme.colors.borderBtn};
  margin-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.borders.borderRadius}px;
  font-size: ${p => p.theme.fontSizes.m};
  text-transform: uppercase;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverBgColor};
    color: ${p => p.theme.colors.white};
  }
`;

export default ButtonStyled;
