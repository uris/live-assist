import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flexBox, type } from '@ref/styles';
import { themeColors } from '@ref/colors';

export const InputWrapper = styled(motion.div)`
  ${flexBox.rowStart};
  position: relative;
  background-color: ${themeColors.grays100};
  border: 1px solid ${themeColors.grays100};
  overflow: visible;
`;

export const InputContainer = styled.div<{ $padding: string }>`
  ${flexBox.rowStart};
  width: 100%;
  height: 100%;
  gap: 4px;
  padding: ${(p) => p.$padding};
`;

export const Label = styled.div`
  ${flexBox.rowStart};
  ${type.desktop.textMedium};
  color: ${themeColors.graysTextPrimary};
  height: auto;
  overflow: hidden;
  min-width: min-content;
  white-space: nowrap;
`;

export const Input = styled.input`
  ${type.desktop.textMedium};
  color: ${themeColors.graysTextPrimary};
  background-color: transparent;
  box-sizing: border-box;
  outline: none;
  border: 0;
  height: 100%;
  width: 100%;
  &::placeholder {
    color: ${themeColors.graysTextDisabled};
  }
  &:focus::placeholder {
    color: ${themeColors.graysTextTertiary};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 50px ${themeColors.grays200}; inset !important;
    -webkit-text-fill-color: ${themeColors.graysTextPrimary};
  }
`;
