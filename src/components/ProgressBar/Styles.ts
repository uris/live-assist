import { themeColors } from '@ref/colors';
import styled from 'styled-components';

function getBGColor(width: number) {
  if (width < 10) return themeColors.error;
  if (width < 50) return themeColors.warning200;
  return themeColors.green500;
}

export const Wrapper = styled.div<{ $height: number }>`
  height: ${({ $height }) => $height}px;
  background-color: ${themeColors.grays200};
  width: 100%;
`;

export const Progress = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width}%;
  height: 100%;
  background-color: ${({ $width }) => getBGColor($width)};
  transition: all 1s ease-in-out 0.1s;
`;
