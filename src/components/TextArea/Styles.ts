import { themeColors } from '@ref/colors';
import { flexBox, type } from '@ref/styles';
import styled from 'styled-components';

function setWidth(width: number | string) {
  if (typeof width === 'string') return width;
  return width + 'px';
}

export const Wrapper = styled.div<{
  $width: number | string;
  $variant: 'light' | 'dark';
}>`
  ${flexBox.row};

  padding: 16px;
  width: ${({ $width }) => setWidth($width)};
  background-color: ${({ $variant }) =>
    $variant === 'light' ? themeColors.graysWhite : themeColors.grays100};
  border: 1px solid
    ${({ $variant }) =>
      $variant === 'light' ? themeColors.grays100 : themeColors.grays200};
  transition: all 0.25s ease-in-out 0s;
  overflow: hidden;
  border-radius: 8px;
  &:focus {
    border: 1px solid ${themeColors.grays300};
  }
  textarea {
    color: ${themeColors.graysTextPrimary};
    ${type.desktop.textRegular};
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
    min-height: 64px;
    line-height: 1.5em;
  }
  textarea::placeholder {
    color: ${themeColors.graysTextDisabled};
  }
`;
