import { flexBox } from '@ref/styles';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $styles: any }>`
  ${flexBox.row};
  -webkit-app-region: no-drag;
  -webkit-user-select: none;
  width: auto;
  height: auto;
  background-color: ${({ $styles }) => $styles.bgColor};
  color: ${({ $styles }) => $styles.color};
  border: ${({ $styles }) =>
    $styles.border ? '1px solid ' + $styles.borderColor : 0};
  border-radius: ${({ $styles }) => $styles.borderRadius}px;
  padding-left: ${({ $styles }) => $styles.paddingSides}px;
  padding-right: ${({ $styles }) => $styles.paddingSides}px;
  padding-top: ${({ $styles }) => $styles.paddingTops}px;
  padding-bottom: ${({ $styles }) => $styles.paddingTops}px;
  gap: ${({ $styles }) => $styles.gap}px;
  box-sizing: border-box;
  cursor: ${({ $styles }) =>
    $styles.disabled ? 'default' : $styles.pointer ? 'pointer' : 'default'};
  transition: all 0.25s ease-in-out 0s;
  &: hover {
    background-color: ${({ $styles }) =>
      !$styles.disabled ? $styles.bgColorHover : $styles.transparent};
  }
`;

export const Icon = styled(motion.div)<{ $size: number }>`
  ${flexBox.row};
  min-height: ${({ $size }) => $size}px;
  min-width: ${({ $size }) => $size}px;
  max-height: ${({ $size }) => $size}px;
  max-width: ${({ $size }) => $size}px;
`;
