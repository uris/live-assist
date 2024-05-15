import { themeColors } from '@ref/colors';
import { flexBox, type } from '@ref/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexBox.rowBetween};
  ${type.desktop.textRegular};
  padding: 16px 16px;
  background-color: rgba(0, 0, 0, 0.02);
  width: 100%;
  gap: 16px;
  div {
    ${flexBox.row};
    gap: 8px;
  }
  span.label {
    display: inline-block;
    padding: 4px 10px;
    background-color: ${themeColors.grays400};
    border-radius: 4px;
  }
  div.type {
    border-radius: 100%;
    background-color: ${themeColors.green500};
    width: 8px;
    height: 8px;
    min-width: 8px;
    min-height: 8px;
  }
  div.connected {
    border-radius: 100%;
    background-color: ${themeColors.green500};
    width: 8px;
    height: 8px;
    min-width: 8px;
    min-height: 8px;
  }
  div.quote {
    ${flexBox.row}
    gap:6px;
    color: ${themeColors.primaryGPBlue};
    cursor: pointer;
  }
`;
