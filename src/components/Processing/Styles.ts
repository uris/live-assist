import { themeColors } from '@ref/colors';
import { flexBox } from '@ref/styles';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexBox.row};
  margin-left: 24px;
  margin-bottom: 16px;
`;

export const TypingWrapper = styled(motion.div)<{
  $size: number;
}>`
  ${flexBox.column};
  min-width: ${({ $size }) => $size}px;
  min-height: ${({ $size }) => $size}px;
  max-width: ${({ $size }) => $size}px;
  max-height: ${({ $size }) => $size}px;
`;

export const Typing = styled.div<{ $size: number; $width: number }>`
  width: ${({ $width }) => $width}px;
  height: ${({ $size }) => $size}px;
  background-color: ${themeColors.graysTextPrimary};
`;
