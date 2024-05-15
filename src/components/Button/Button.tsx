import * as Styled from './Styles';
import { type } from '@ref/styles';
import { Icon } from '@asset/Icons/Icon';
import { themeColors } from '@ref/colors';

interface Props {
  icon?: string | null;
  iconPos?: 'left' | 'right';
  iconSize?: number | null;
  iconColor?: string | null;
  label?: string | null;
  labelSize?:
    | 'textXLarge'
    | 'textLarge'
    | 'textRegular'
    | 'textMedium'
    | 'textSmall'
    | 'textXSmall'
    | null;
  labelColor?: string | null;
  gap?: number;
  borderRadius?: number;
  border?: number | null;
  borderColor?: string | null;
  paddingTops?: number | null;
  paddingSides?: number | null;
  width?: number | string;
  minWidth?: number | null;
  height?: number | string;
  minHeight?: number | null;
  bgColor?: string | null;
  bgColorHover?: string | null;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  destructive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export function Button(props: Props) {
  const {
    icon = null,
    iconPos = 'left',
    iconSize = null,
    iconColor = null,
    label = 'Button Label',
    labelSize = null,
    labelColor = null,
    gap = 6,
    borderRadius = 4,
    border = null,
    borderColor = null,
    paddingTops = null,
    paddingSides = null,
    width = 'auto',
    minWidth = null,
    height = 'auto',
    minHeight = null,
    bgColor = null,
    bgColorHover = null,
    disabled = false,
    variant = 'tertiary',
    destructive = false,
    onClick = () => null,
  } = props;

  const variants = {
    primary: {
      labelSize: labelSize ? labelSize : type.desktop['textMedium'],
      labelColor: labelColor ? labelColor : themeColors.graysWhite,
      bgColor: bgColor ? bgColor : themeColors.primaryGPBlue,
      bgColorHover: bgColorHover ? bgColorHover : themeColors.primaryGPBlue,
      borderColor: borderColor ? borderColor : themeColors.primaryGPBlue,
      iconSize: iconSize ? iconSize : 24,
      iconColor: iconColor ? iconColor : themeColors.graysWhite,
      minHeight: !minHeight ? 40 : minHeight,
      paddingTops: paddingTops ? paddingTops : 6,
      paddingSides: paddingSides ? paddingSides : 16,
      border: border ? border : 1,
    },
    secondary: {
      labelSize: labelSize ? labelSize : type.desktop['textMedium'],
      labelColor: labelColor ? labelColor : themeColors.graysTextPrimary,
      bgColor: bgColor ? bgColor : themeColors.graysWhite,
      bgColorHover: bgColorHover ? bgColorHover : themeColors.graysWhite,
      borderColor: borderColor ? borderColor : themeColors.grays200,
      iconSize: iconSize ? iconSize : 24,
      iconColor: iconColor ? iconColor : themeColors.grayTextSecondary,
      minHeight: !minHeight ? 40 : minHeight,
      paddingTops: paddingTops ? paddingTops : 6,
      paddingSides: paddingSides ? paddingSides : 16,
      border: border ? border : 1,
    },
    tertiary: {
      labelSize: labelSize ? labelSize : type.desktop['textSmall'],
      labelColor: labelColor ? labelColor : themeColors.graysTextPrimary,
      bgColor: bgColor ? bgColor : themeColors.transparent,
      bgColorHover: bgColorHover ? bgColorHover : themeColors.grays100,
      borderColor: borderColor ? borderColor : themeColors.grays100,
      iconSize: iconSize ? iconSize : 18,
      iconColor: iconColor ? iconColor : themeColors.graysTextPrimary,
      minHeight: !minHeight ? 32 : minHeight,
      paddingTops: paddingTops ? paddingTops : 4,
      paddingSides: paddingSides ? paddingSides : 10,
      border: border ? border : 1,
    },
    link: {
      labelSize: labelSize ? labelSize : type.desktop['textRegular'],
      labelColor: labelColor ? labelColor : themeColors.primaryGPBlue,
      bgColor: bgColor ? bgColor : themeColors.transparent,
      bgColorHover: bgColorHover ? bgColorHover : themeColors.transparent,
      borderColor: borderColor ? borderColor : themeColors.transparent,
      iconSize: iconSize ? iconSize : 16,
      iconColor: iconColor ? iconColor : themeColors.primaryGPBlue,
      paddingTops: paddingTops ? paddingTops : 4,
      paddingSides: paddingSides ? paddingSides : 4,
      border: border ? border : 0,
    },
  };

  const isDestructive = {
    primary: {
      borderColor: themeColors.error,
      bgColor: themeColors.error,
      bgColorHover: themeColors.error,
      iconColor: themeColors.graysWhite,
    },
    secondary: {
      labelColor: themeColors.error,
      borderColor: themeColors.error,
      bgColor: themeColors.error,
      iconColor: themeColors.graysWhite,
    },
    tertiary: {
      labelColor: themeColors.error,
      borderColor: themeColors.error,
      bgColor: themeColors.transparent,
      iconColor: themeColors.graysWhite,
    },
    link: { labelColor: themeColors.error },
  };

  const isDisabled = {
    primary: {
      iconColor: themeColors.graysTextDisabled,
      labelColor: themeColors.graysTextDisabled,
      borderColor: themeColors.grays300,
      bgColor: themeColors.grays300,
      bgColorHover: themeColors.grays300,
    },
    secondary: {
      iconColor: themeColors.graysTextDisabled,
      labelColor: themeColors.graysTextDisabled,
      bgColorHover: themeColors.transparent,
      borderColor: themeColors.grays100,
    },
    tertiary: {
      iconColor: themeColors.graysTextDisabled,
      labelColor: themeColors.graysTextDisabled,
      bgColorHover: themeColors.transparent,
      borderColor: themeColors.grays100,
    },
    link: {
      iconColor: themeColors.graysTextDisabled,
      labelColor: themeColors.graysTextDisabled,
    },
  };

  const styles = {
    icon,
    iconPos,
    gap,
    label,
    borderRadius,
    width,
    height,
    minWidth,
    minHeight,
    disabled,
    variant,
    destructive,
    ...variants[variant],
    ...(destructive ? isDestructive[variant] : {}),
    ...(disabled ? isDisabled[variant] : {}),
  };

  return (
    <Styled.ButtonWrapper
      $styles={styles}
      style={{ cursor: disabled ? 'default' : 'pointer' }}
      onClick={(e) => {
        if (!disabled) onClick(e);
      }}
    >
      {icon && (
        <Icon
          name={icon}
          size={variants[variant].iconSize}
          strokeColor={
            disabled
              ? isDisabled[variant].iconColor
              : destructive
              ? themeColors.graysWhite
              : variants[variant].iconColor
          }
        />
      )}
      {label ? label : null}
    </Styled.ButtonWrapper>
  );
}
