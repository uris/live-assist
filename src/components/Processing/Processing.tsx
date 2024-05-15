import { Transition } from 'framer-motion';
import * as Styled from './Styles';
import { useChat } from '@context/ChatThread';

interface Props {
  size?: number;
  width?: number;
}

export function Processing(props: Props) {
  const { size = 16, width = 2 } = props;
  const { processing } = useChat();
  const transition: Transition = {
    ease: 'linear',
    duration: 1.2,
    repeat: Infinity,
    repeatType: 'loop',
  };
  if (!processing) return null;
  return (
    <Styled.Wrapper>
      <Styled.TypingWrapper
        $size={16}
        initial={{ rotate: 0 }}
        transition={transition}
        animate={{ rotate: 360 }}
      >
        <Styled.Typing $size={size} $width={width} />
      </Styled.TypingWrapper>
    </Styled.Wrapper>
  );
}
