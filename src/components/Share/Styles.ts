import { themeColors } from '@ref/colors';
import { flexBox } from '@ref/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexBox.columnStartCenter};
  justify-content: center;
  padding: 24px;
  width: 100%;
  flex: 1;
  gap: 24px;
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
`;
