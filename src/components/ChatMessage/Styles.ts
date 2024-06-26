import { themeColors } from '@ref/colors';
import { flexBox, type } from '@ref/styles';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $isUser: boolean }>`
  ${flexBox.columnStart};
  div.user {
    ${flexBox.row};
    ${type.desktop.textMedium};
    padding: 16px;
    font-weight: 500;
    line-height: 1.5em;
    background-color: ${themeColors.grays700};
    border-radius: 8px;
    color: ${themeColors.graysWhite};
  }
  div.assistant {
    ${flexBox.columnStart};
    ${type.desktop.textMedium};
    gap: 16px;
    padding: 16px;
    font-weight: 400;
    line-height: 1.5em;
    background-color: ${themeColors.graysWhite};
    border: 1px solid ${themeColors.grays200};
    border-radius: 8px;
    color: ${themeColors.graysTextPrimary};
  }
  p {
    margin: 0;
    padding: 0;
    margin-bottom: 8px;
  }
  div.file {
    ${flexBox.row};
    gap: 8px;
    ${type.desktop.textMedium};
    background-color: ${themeColors.grays200};
    color: ${themeColors.primaryGPBlue};
    border-radius: 6px;
    padding: 8px 16px;
  }
`;
