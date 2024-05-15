import { themeColors } from '@ref/colors';
import { flexBox, type } from '@ref/styles';
import styled from 'styled-components';

const setWidth = (width: number | string) => {
  if (typeof width === 'string') return width;
  return width + 'px';
};

const setPadding = (padding: number | string) => {
  if (typeof padding === 'string') return padding;
  return padding + 'px';
};

export const Wrapper = styled.div<{
  $height: number | string;
  $width: number | string;
}>`
  ${flexBox.rowStart};
  border-bottom: 1px solid ${themeColors.grays200};
  width: ${({ $width }) => setWidth($width)};
  cursor: pointer;
  div.spacer {
    flex: 1;
  }
`;

export const Option = styled.div<{
  $padding: number | string;
  $selected: boolean;
  $textStyle: any;
  $tabWidth: number | string;
}>`
  ${flexBox.rowBetween};
  ${type.desktop.textSmall};
  color: ${({ $selected }) =>
    $selected ? themeColors.graysTextPrimary : themeColors.graysTextDisabled};
  padding: ${({ $padding }) => setPadding($padding)};
  height: 100%;
  min-width: ${({ $tabWidth }) => setWidth($tabWidth)};
  box-shadow: 0px 1px 0px 0px
    ${({ $selected }) =>
      $selected ? themeColors.lightBG : themeColors.grays200};
  cursor: pointer;
  background-color: ${({ $selected }) =>
    $selected ? themeColors.lightBG : themeColors.graysWhite};
  border-right: 1px solid ${themeColors.grays200};
`;
