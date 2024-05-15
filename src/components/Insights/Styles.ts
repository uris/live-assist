import { themeColors } from '@ref/colors';
import { flexBox, type } from '@ref/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexBox.columnStart};
  padding: 24px;
  width: 100%;
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
  div.block-values {
    ${flexBox.columnStart};
    gap: 24px;
    padding: 0px 0px 32px 0px;
    width: 100%;
  }
  div.block {
    ${flexBox.columnStart};
    gap: 16px;
    padding: 24px 0px 24px 0px;
    border-top: 1px solid ${themeColors.grays200};
    width: 100%;
  }
  h1 {
    ${type.desktop.textMedium};
    padding: 0;
    margin: 0;
    text-transform: uppercase;
  }
  p.summary,
  p.action {
    ${type.desktop.textMedium};
    color: ${themeColors.graysTextPrimary};
    line-height: 1.5em;
    box-sizing: border-box;
    margin: 0;
  }
  p.action {
    border: 1px solid ${themeColors.primaryGPBlue};
    background-color: ${themeColors.graysWhite};
    border-radius: 8px;
    cursor: pointer;
    padding: 16px;
  }
`;
