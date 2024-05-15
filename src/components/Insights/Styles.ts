import { themeColors } from '@ref/colors';
import { flexBox, type } from '@ref/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexBox.columnStart};
  padding: 24px;
  width: 100%;
  gap: 24px;
  div.value {
    ${flexBox.columnStart};
    ${type.desktop.textMedium};
    gap: 4px;
    width: 100%;
  }
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 14px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${themeColors.grays300};
    border-radius: 20px;
    border: 4px solid ${themeColors.graysWhite};
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${themeColors.grays500};
    border-radius: 20px;
    border: 4px solid ${themeColors.graysWhite};
    cursor: default;
  }
  div.block {
    ${flexBox.columnStart};
    gap: 6px;
    margin-top: 16px;
  }
  h1 {
    ${type.desktop.textMedium};
    padding: 0;
    margin: 0;
    margin-left: 16px;
    text-transform: uppercase;
  }
  p.summary,
  p.action {
    ${type.desktop.textMedium};
    color: ${themeColors.graysTextPrimary};
    line-height: 1.5em;
    box-sizing: border-box;
    padding: 16px;
    margin: 0;
    background-color: ${themeColors.grays100};
    border-radius: 8px;
  }
  p.action {
    border: 1px solid ${themeColors.primaryGPBlue};
    background-color: ${themeColors.graysWhite};
    cursor: pointer;
  }
`;
