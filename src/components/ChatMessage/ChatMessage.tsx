import { useAccount } from '@context/AccountContext';
import * as Styled from './Styles';
import { Image } from '@asset/images/Logo';

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
  file?: string;
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

  function setFiles() {
    if (!message.file) return;
    return (
      <div className="file">
        <Image image={'pdf'} height={24} />
        {message.file}
      </div>
    );
  }

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
        <div className="assistant">
          {`You: ${message.content}`}
          {setFiles()}
        </div>
      </Styled.Wrapper>
    );
  }

  return message.role === 'user' ? userMessage() : assistantMessage();
}
