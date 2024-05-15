import { flexBox } from '@ref/styles';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $size: number }>`
  ${flexBox.row};
  height: ${({ $size }) => $size}px;
  width: ${({ $size }) => $size}px;
  border-radius: 100%;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
`;
