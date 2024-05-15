import { themeColors } from '@ref/colors';
import { flexBox, type } from '@ref/styles';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  ${flexBox.rowStart};
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  gap: 8px;
  padding: 10px 16px;
  border-radius: 8px;
  background-color: ${themeColors.graysWhite};
  border: 1px solid ${themeColors.grays200};
  color: ${themeColors.graysTextPrimary};
  font-weight: 500;
  ${type.desktop.textRegular};
`;
