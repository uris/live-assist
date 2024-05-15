import { useAccount } from '@context/AccountContext';
import * as Styled from './Styles';

export type ChatFile = {
  name?: string;
  type?: 'doc' | 'pdf' | 'txt' | 'rtf';
  size?: number;
};

export type Message = {
  role: 'user' | 'system' | 'assistant' | 'function';
  content: string;
  title?: string;
  function?: string;
  files?: ChatFile[];
  attachments?: any[];
  date?: string;
  id: string;
};

const defaultMessage: Message = {
  role: 'user',
  content: 'How quickly can I hire in spain?',
  id: crypto.randomUUID(),
};

interface Props {
  message?: Message;
}

export function ChatMessage(props: Props) {
  const { message = defaultMessage } = props;
  const { customerInfo } = useAccount();

  function userMessage() {
    return (
      <Styled.Wrapper $isUser={true}>
        <div className="user">
          {`${customerInfo?.firstName}: ${message.content}`}
        </div>
      </Styled.Wrapper>
    );
  }

  function assistantMessage() {
    return (
      <Styled.Wrapper $isUser={false}>
        <div className="assistant">{`You: ${message.content}`}</div>
      </Styled.Wrapper>
    );
  }

  return message.role === 'user' ? userMessage() : assistantMessage();
}
