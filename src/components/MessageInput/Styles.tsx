import { themeColors } from '@ref/colors';
import { flexBox, type } from '@ref/styles';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexBox.columnEnd};
  width: 100%;
  padding: 24px 24px 24px 24px;
  overflow-y: hidden;
  border-top: 1px solid ${themeColors.grays200};
  outline: none;
  overflow: visible;
  background: rgba(0, 0, 0, 0.02);
`;

export const TextArea = styled.textarea`
  ${type.desktop.textRegular};
  font-family: -apple-system, BlinkMacSystemFont, 'HKGrotesk-Regular',
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5em;
  padding: 0;
  width: 100%;
  overflow-y: hidden;
  resize: none;
  border: 0;
  outline: none;
  color: ${themeColors.graysTextPrimary};
  padding-bottom: 4px;
`;

export const ButtonGroup = styled.div`
  ${flexBox.row};
`;

export const AnimatedButton = styled(motion.div)`
  ${flexBox.row};
  width: 32px;
  height: 32px;
`;

export const File = styled(motion.div)`
  ${flexBox.row};
  padding: 8px;
  border-radius: 8px;
  background-color: ${themeColors.grays100};
  ${type.desktop.textMedium};
`;

export const InputArea = styled(motion.div)`
  ${flexBox.rowBetween};
  align-items: flex-end;
  padding: 20px 16px 20px 20px;
  gap: 8px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${themeColors.grays200};
  background: ${themeColors.graysWhite};
`;
