import { useChat } from '@context/ChatThread';
import * as Styled from './Styles';
import { ChatMessage, Message } from '@comp/ChatMessage/ChatMessage';

export function ChatMessageList() {
  const { messages } = useChat();
  function renderMessages() {
    return messages.map((message: Message, i: number) => {
      return <ChatMessage key={message.id + '_' + i} message={message} />;
    });
  }
  if (!messages) return null;
  else return <Styled.Wrapper>{renderMessages()}</Styled.Wrapper>;
}
