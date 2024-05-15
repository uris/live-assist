import { flexBox } from '@ref/styles';
import styled from 'styled-components';

const setflexDirection = (icon: string | null, iconPos: 'left' | 'right') => {
  if (!icon) return 'row';
  if (iconPos === 'right') return 'row-reverse';
  return 'row';
};

const setBorder = (border: number, borderColor: string) => {
  if (border === 0) return '0';
  return `${border}px solid ${borderColor}`;
};

const setPaddingSides = (
  icon: string | null,
  iconPos: 'left' | 'right',
  paddingSides: number,
  label: string | null,
  side: 'left' | 'right',
) => {
  if (!icon || !label) return paddingSides;
  if (
    (iconPos === 'left' && side === 'left') ||
    (iconPos === 'right' && side === 'right')
  )
    return paddingSides - 6;
  return paddingSides;
};

export const ButtonWrapper = styled.div<{ $styles: any }>`
  ${flexBox.row};
  flex-direction: ${({ $styles }) =>
    setflexDirection($styles.icon, $styles.iconPos)};
  ${({ $styles }) => $styles.labelSize};
  color: ${({ $styles }) => $styles.labelColor};
  gap: ${({ $styles }) => $styles.gap}px;
  border-radius: ${({ $styles }) => $styles.borderRadius}px;
  border: ${({ $styles }) => setBorder($styles.border, $styles.borderColor)};
  padding-top: ${({ $styles }) => $styles.paddingTops}px;
  padding-bottom: ${({ $styles }) => $styles.paddingTops}px;
  padding-right: ${({ $styles }) =>
    setPaddingSides(
      $styles.icon,
      $styles.iconPos,
      $styles.paddingSides,
      $styles.label,
      'right',
    )}px;
  padding-left: ${({ $styles }) =>
    setPaddingSides(
      $styles.icon,
      $styles.iconPos,
      $styles.paddingSides,
      $styles.label,
      'left',
    )}px;
  width: ${({ $styles }) => $styles.width};
  min-width: ${({ $styles }) =>
    $styles.minWidth ? $styles.minWidth + 'px' : 'none'};
  height: ${({ $styles }) => $styles.height};
  min-height: ${({ $styles }) => $styles.minHeight}px;
  background-color: ${({ $styles }) => $styles.bgColor};
  white-space: nowrap;
  -webkit-app-region: no-drag;
  -webkit-user-select: none;
  transition: all 0.25s ease-in-out 0s;
  &:hover {
    background-color: ${({ $styles }) => $styles.bgColorHover};
  }
`;
