import * as Styled from './Styles';
import { AnimatePresence } from 'framer-motion';
import { Icon } from '@asset/Icons/Icon';
import { themeColors } from '@ref/colors';

interface Props {
  size?: number;
  secondsPerSpin?: number;
  show?: boolean;
  color?: string;
  stroke?: number;
  displayInline?: boolean;
}

export function ProgressIndicator(props: Props) {
  const {
    size = 32,
    secondsPerSpin = 1,
    show = false,
    color = themeColors.graysTextPrimary,
    stroke = 1.5,
  } = props;
  return (
    <AnimatePresence initial={true}>
      {show && (
        <Styled.Container
          $size={size}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Styled.IconWrapper
            $size={size}
            transition={{
              ease: 'linear',
              repeatType: 'loop',
              repeat: Infinity,
              duration: secondsPerSpin,
            }}
            animate={{ rotate: 360 }}
          >
            <Icon
              name={'circle open'}
              size={size}
              stroke={stroke}
              strokeColor={color}
            />
          </Styled.IconWrapper>
        </Styled.Container>
      )}
    </AnimatePresence>
  );
}
