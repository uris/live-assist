import { themeColors } from '@ref/colors';
import { flexBox, type } from '@ref/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexBox.rowBetween};
  ${type.desktop.textMedium};
  text-transform: uppercase;
  padding: 8px 16px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.01);
  border-bottom: 1px solid ${themeColors.grays200};
`;
