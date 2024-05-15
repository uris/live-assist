import { useState } from 'react';
import * as Styled from './Styles';
import { themeColors } from '@ref/colors';
import { Transition } from 'framer-motion';

interface Props {
  state?: boolean;
  height?: number;
  width?: number;
  bgColorOff?: string;
  bgColorOn?: string;
  knobColor?: string;
  padding?: number;
  onChange?: (state: boolean) => void;
}

export function Switch(props: Props) {
  const {
    state = false,
    height = 22,
    width = 44,
    padding = 3,
    bgColorOn = themeColors.green500,
    bgColorOff = themeColors.grays400,
    knobColor = themeColors.graysWhite,
    onChange = () => null,
  } = props;
  const [on, setOn] = useState<boolean>(state);

  const transition: Transition = { ease: 'easeInOut', duration: 0.3 };

  return (
    <Styled.Wrapper
      $height={height}
      $width={width}
      $padding={padding}
      transition={transition}
      initial={state ? bgColorOn : bgColorOff}
      animate={{ backgroundColor: on ? bgColorOn : bgColorOff }}
      style={{ justifyContent: on ? 'flex-end' : 'flex-start' }}
      onClick={() => {
        setOn(!on);
        onChange(!on);
      }}
    >
      <Styled.Knob
        layout={true}
        transition={transition}
        $size={height - padding * 2 || 0}
        style={{ backgroundColor: knobColor }}
      />
    </Styled.Wrapper>
  );
}
