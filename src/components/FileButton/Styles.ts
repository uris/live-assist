import { themeColors } from '@ref/colors';
import { flexBox, type } from '@ref/styles';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $allowDelete: boolean }>`
  ${flexBox.rowStart};
  gap: 8px;
  padding: 8px ${({ $allowDelete }) => ($allowDelete ? 8 : 20)}px 8px 16px;
  ${type.desktop.textMedium};
  color: ${themeColors.graysTextTertiary};
  background-color: ${({ $allowDelete }) =>
    $allowDelete ? themeColors.grays100 : themeColors.graysWhite};
  border: 1px solid
    ${({ $allowDelete }) =>
      $allowDelete ? themeColors.graysWhite : themeColors.grays200};
  border-radius: 4px;
  max-width: 1000px;
  div.file {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
