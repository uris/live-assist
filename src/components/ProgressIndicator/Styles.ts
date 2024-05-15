import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flexBox } from '@ref/styles';

export const Container = styled(motion.div)<{ $size: number }>`
  ${flexBox.row};
  height: ${(p) => p.$size}px;
  width: ${(p) => p.$size}px;
`;

export const IconWrapper = styled(motion.div)<{ $size: number }>`
  ${flexBox.row};
  height: ${(p) => p.$size}px;
  width: ${(p) => p.$size}px;
`;
