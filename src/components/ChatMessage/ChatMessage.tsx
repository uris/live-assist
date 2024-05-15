import * as Styled from './Styles';
import { FileButtonList } from '@comp/FileButtonList.tsx/FileButtonList';

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

  function formatMessage() {
    const paragraphs = message.content
      .replace(/\r\n/g, '\r')
      .replace(/\n/g, '\r')
      .split(/\r/);
    if (paragraphs) {
      return paragraphs.map((paragraph: string, i: number) => {
        return <p key={message.id + '_' + i}>{paragraph}</p>;
      });
    } else {
      return message.content;
    }
  }

  function renderAttachments() {
    if (!message.attachments) return null;
    return <FileButtonList type={'inline'} files={message.attachments} />;
  }

  function userMessage() {
    return (
      <Styled.Wrapper $isUser={true}>
        <h2 className="user">{formatMessage()}</h2>
        {renderAttachments()}
      </Styled.Wrapper>
    );
  }

  function assistantMessage() {
    return (
      <Styled.Wrapper $isUser={false}>
        <h2 className="assistant">{formatMessage()}</h2>
      </Styled.Wrapper>
    );
  }
  return message.role === 'user' ? userMessage() : assistantMessage();
}
