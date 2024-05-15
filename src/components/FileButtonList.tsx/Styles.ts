import { flexBox } from '@ref/styles';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $type: 'inline' | 'general' }>`
  ${flexBox.row};
  gap: 6px;
  margin-left: ${({ $type }) => ($type === 'inline' ? 24 : 0)}px;
  margin-bottom: ${({ $type }) => ($type === 'inline' ? 24 : 0)}px;
`;
