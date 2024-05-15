import { themeColors } from '@ref/colors';
import { flexBox } from '@ref/styles';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $disabled: boolean }>`
  ${flexBox.row};
  justify-content: center;
  padding: 8px 16px;
  width: 100%;
  gap: 24px;
  border-top: 1px solid ${themeColors.grays200};
  div.control {
    opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
    ${flexBox.rowStart};
    gap: 8px;
  }
`;
