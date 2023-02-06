import styled from '@emotion/styled';

const NotificationStyle = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.hoverBgColor};
  margin-top: ${p => p.theme.space[5]}px;
`;

export default NotificationStyle;
