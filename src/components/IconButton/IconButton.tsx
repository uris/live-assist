import { useEffect, useState } from 'react';
import * as Styled from './Styles';
import {
  DynamicAnimationOptions,
  Transition,
  Variants,
  useAnimate,
} from 'framer-motion';
import { themeColors } from '@ref/colors';
import { Icon, OSIcons } from '@asset/Icons/Icon';

interface Props {
  size?: number;
  stroke?: number;
  strokeColor?: string;
  accentColor?: string;
  fillColor?: string;
  bgColor?: string;
  bgColorHover?: string;
  label?: string | null;
  labelPosition?: 'left' | 'right' | 'none';
  labelSize?: number;
  name?: string | OSIcons;
  type?: 'line' | 'dualtone';
  pointer?: boolean;
  borderRadius?: number;
  paddingTops?: number;
  paddingSides?: number;
  toggle?: boolean;
  gap?: number;
  disabled?: boolean;
  border?: boolean;
  borderColor?: string;
  transition?: Transition | null;
  animate?: any;
  variants?: Variants | null;
  initial?: any | null;
  loopAnimate?: any | null;
  togglePlay?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export function IconButton(props: Props) {
  const {
    size = 26,
    stroke = 1.5,
    strokeColor = themeColors.graysTextPrimary,
    accentColor = themeColors.graysTextPrimary,
    fillColor = themeColors.graysTextDisabled,
    bgColor = themeColors.transparent,
    bgColorHover = themeColors.grays100,
    borderColor = themeColors.grays100,
    label = null,
    labelSize = 16,
    pointer = true,
    name = 'filter',
    borderRadius = 4,
    paddingTops = 2,
    paddingSides = 4,
    toggle = false,
    border = false,
    gap = 8,
    type = 'line',
    disabled = false,
    transition = null,
    variants = null,
    initial = null,
    animate = null,
    loopAnimate = null,
    togglePlay = false,
    onClick = () => null,
  } = props;
  const [iconRef, iconAnimate] = useAnimate();
  const [isToggled, setIsToggled] = useState<boolean>(toggle);
  const [loopValues, setLoopValues] = useState<any>(null);
  const [increment, setIncrement] = useState<any>(null);

  useEffect(() => {
    initialAnimate();
    initialIncrement();
  }, [initial, loopAnimate]);
  useEffect(() => setIsToggled(toggle), [toggle]);
  useEffect(() => {
    playAnimation();
  }, [togglePlay]);

  const styles = {
    bgColor,
    bgColorHover,
    label,
    labelSize,
    pointer,
    border,
    borderColor,
    borderRadius,
    paddingTops,
    paddingSides,
    gap,
    disabled,
  };

  function initialAnimate() {
    let values: any = {};
    if (initial) {
      for (let key in initial) {
        if (initial.hasOwnProperty(key)) {
          values[key] = initial[key];
        }
      }
    }
    setLoopValues(values);
  }

  function initialIncrement() {
    let values: any = {};
    if (loopAnimate) {
      for (let key in loopAnimate) {
        if (loopAnimate.hasOwnProperty(key)) {
          values[key] = loopAnimate[key];
        }
      }
    }
    setIncrement(values);
  }

  function incrementAnimateValues() {
    let values: any = {};
    if (increment && loopValues) {
      for (let key in loopValues) {
        if (loopValues.hasOwnProperty(key) && increment.hasOwnProperty(key)) {
          const value = loopValues[key];
          const add = increment[key];
          values[key] = value + add;
        } else values[key] = loopValues[key];
      }
    }
    console.log(values);
    return values;
  }

  function playAnimation() {
    if (initial && loopAnimate) {
      const animateTo = incrementAnimateValues();
      iconAnimate(
        iconRef.current,
        { ...animateTo },
        transition ? (transition as DynamicAnimationOptions) : undefined,
      );
      setLoopValues(animateTo);
    }
  }

  return (
    <Styled.Wrapper
      $styles={styles}
      onClick={(e) => {
        if (!disabled) {
          onClick(e);
          playAnimation();
        }
      }}
    >
      <Styled.Icon
        ref={iconRef}
        $size={size}
        transition={transition ? transition : undefined}
        variants={variants ? variants : undefined}
        animate={
          initial || loopAnimate ? undefined : animate ? animate : undefined
        }
      >
        <Icon
          name={name}
          size={size}
          stroke={stroke}
          fillColor={fillColor}
          strokeColor={strokeColor}
          accentColor={accentColor}
          pointer={pointer}
          toggle={isToggled}
          type={type}
          disabled={disabled}
        />
      </Styled.Icon>
    </Styled.Wrapper>
  );
}
