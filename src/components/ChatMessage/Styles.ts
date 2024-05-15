import { themeColors } from '@ref/colors';
import { flexBox } from '@ref/styles';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $isUser: boolean }>`
  ${flexBox.columnStart};
  h2 {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2em;
    margin-left: 24px;
    margin-bottom: 6px;
    max-width: 70ch;
    max-width: 70ch;
  }
  .assistant {
    color: ${themeColors.graysTextTertiary};
    font-weight: 400;
    margin: 0;
    padding: 0;
    font-size: 14px;
    margin-bottom: 24px;
    line-height: 1.5em;
    margin-left: 24px;
    max-width: 70ch;
    max-width: 70ch;
    white-space: pre-wrap;
  }
  p {
    margin: 0;
    padding: 0;
    margin-bottom: 8px;
  }
`;
