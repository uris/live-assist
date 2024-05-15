import styled from 'styled-components';
import { type } from '@ref/styles';
import { motion } from 'framer-motion';

export const Wrapper = styled.div<{ $fill: boolean }>`
  display: flex;
  flex-direction: column;
  ${(p) => (p.$fill ? 'flex: 1 0 0' : null)};
  justify-content: center;
  align-items: center;
`;

export const Progress = styled.div<{ $size: number }>`
  position: relative;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 0px;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
`;

export const CheckWrapper = styled.div<{ $size: number }>`
  position: absolute;
  opacity: 0;
  top: 0px;
  left: 0px;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  scale: 1;
`;

export const CircleWrapper = styled.div<{ $size: number }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
`;

export const Caption = styled(motion.div)<{ $size: number }>`
  ${type.desktop.textMedium};
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 125px;
`;
