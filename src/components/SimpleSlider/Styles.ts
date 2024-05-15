import { themeColors } from '@ref/colors';
import { flexBox } from '@ref/styles';
import styled from 'styled-components';

const getWidth = (value: number | string) => {
  if (typeof value === 'string') return value;
  return value + 'px';
};

export const Wrapper = styled.div<{
  $width: number | string;
  $height: number | string;
  $touchHeight: number | string;
  $cursor: string;
}>`
  ${flexBox.rowStart};
  width: ${({ $width }) => getWidth($width)};
  height: ${({ $height }) => getWidth($height)};
  min-height: ${({ $touchHeight }) => getWidth($touchHeight)};
  cursor: ${({ $cursor }) => $cursor};
`;

export const TrackBG = styled.div<{
  $width: number | string;
  $height: number | string;
}>`
  ${flexBox.rowStart};
  width: 100%;
  height: ${({ $height }) => getWidth($height)};
  background-color: ${themeColors.grays100};
  pointer-events: none;
  border-radius: 100px;
`;

export const Track = styled.div`
  ${flexBox.rowStart};
  position: relative;
  width: 0px;
  height: 100%;
  background-color: ${themeColors.grays400};
  overflow: visible;
  pointer-events: none;
  border-radius: 100px;
`;

export const TrackHead = styled.div<{ $size: number | null }>`
  position: absolute;
  display: ${({ $size }) => ($size ? 'block' : 'none')};
  background-color: ${themeColors.grays400};
  pointer-events: none;
  border-radius: 100%;
  max-width: ${({ $size }) => $size || 0}px;
  max-height: ${({ $size }) => $size || 0}px;
  min-width: ${({ $size }) => $size || 0}px;
  min-height: ${({ $size }) => $size || 0}px;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
`;
