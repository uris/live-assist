import { themeColors } from '@ref/colors';
import { flexBox, type } from '@ref/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexBox.rowStart};
  ${type.desktop.textMedium};
  padding: 10px 16px;
  width: 100%;
  background-color: ${themeColors.primaryGPBlue};
  color: ${themeColors.graysWhite};
  div.button-group {
    ${flexBox.rowStart}
    width:100%;
    flex: 1;
    gap: 8px;
  }
  div.button-group-right {
    ${flexBox.rowEnd}
    width:100%;
    flex: 1;
    gap: 8px;
  }
  div.title {
    ${flexBox.row};
    ${type.desktop.textSmall};
    gap: 8px;
    font-weight: 600;
  }
  div.status {
    border-radius: 100px;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 8px 16px;
    color: ;
  }
`;
