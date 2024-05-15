import { useLayoutEffect, useRef, useState } from 'react';
import * as Styled from './Styles';
import { useChat } from '@context/ChatThread';

interface Props {
  children?: any;
}

export function MessageThread(props: Props) {
  const { children = null } = props;
  const { messages } = useChat();
  const [loaded, setLoaded] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref && ref.current) {
      ref.current.style.scrollBehavior = 'auto';
      ref.current.scrollTo(0, ref.current.scrollHeight);
      setLoaded(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (loaded && ref && ref.current) {
      ref.current.style.scrollBehavior = 'smooth';
      const timer = setTimeout(() => scrollToBottom(), 150);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  const scrollToBottom = () => {
    if (ref && ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  };

  return <Styled.Wrapper ref={ref}>{children}</Styled.Wrapper>;
}
