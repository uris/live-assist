import { themeColors } from '@ref/colors';
import { flexBox } from '@ref/styles';
import styled from 'styled-components';

export const Viewport = styled.div`
  ${flexBox.columnStart};
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.div`
  ${flexBox.rowStart};
  width: 100%;
  height: auto;
`;

export const Account = styled.div`
  ${flexBox.rowStart};
  width: 100%;
  height: auto;
`;

export const ContentWrapper = styled.div`
  ${flexBox.rowStart};
  overflow: hidden;
  width: 100%;
  flex: 1;
  border-top: 1px solid ${themeColors.grays200};
`;

export const SharePanel = styled.div`
  ${flexBox.columnStart};
  width: 100%;
  height: 100%;
  border-right: 1px solid ${themeColors.grays200};
`;

export const ChatPanel = styled.div`
  ${flexBox.columnStart};
  min-width: 300px;
  height: 100%;
  border-right: 1px solid ${themeColors.grays200};
`;

export const InsightsPanel = styled.div`
  ${flexBox.columnStart};
  min-width: 300px;
  max-width: 300px;
  height: 100%;
`;

export const MessagePanel = styled.div`
  ${flexBox.rowStart};
  width: 100%;
  height: auto;
`;
