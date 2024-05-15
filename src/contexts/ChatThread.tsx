import { Message } from '@comp/ChatMessage/ChatMessage';
import { createContext, useContext, useState } from 'react';
import { Suggestion } from './SentimentContext';

const ChatContext = createContext<ChatContextType>({} as ChatContextType);

export type ChatContextType = {
  messages: Message[];
  processing: boolean;
  input: Suggestion | null;
  handleUpdateMessages: (messages: Message[] | Message) => void;
  handleSendUserMessage: (userMessage: Message) => void;
  handleUserMessage: (userMessage: Message) => void;
  handleClearChat: () => void;
  handleSetInput: (suggestion: Suggestion | null) => void;
};

const defaultChatThread: Message[] = [
  {
    role: 'user',
    content:
      'Please explain the One-Time Transition Administration Fee. Why is this necessary?',
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
  },
];

interface Props {
  children?: any;
}

function ChatProvider(props: Props) {
  const { children } = props;
  const [messages, setMessages] = useState<Message[]>(defaultChatThread);
  const [processing, setProcessing] = useState<boolean>(false);
  const [input, setInput] = useState<Suggestion | null>(null);
  let timer: any = null;

  function handleUpdateMessages(newMessages: Message[] | Message) {
    let updates: Message[];
    if (Array.isArray(newMessages)) {
      updates = [...messages, ...newMessages];
    } else {
      updates = [...messages, newMessages];
    }
    setMessages(updates);
  }

  function handleSetInput(suggestion: Suggestion | null) {
    setInput(suggestion);
  }

  function handleClearChat() {
    setMessages([]);
  }

  function handleUserMessage(userMessage: Message) {
    if (userMessage.attachments) {
      const newMessage: Message = {
        ...userMessage,
        content:
          userMessage.content !== ''
            ? userMessage.content
            : `Review file: ${
                userMessage.attachments[0].name.split('.')[0]
              } ...`,
      };
      // post the user message
      let updates: Message[] = [...messages, newMessage];
      setMessages(updates);
      setProcessing(true);
      // time out to then render the assitant response
      if (timer) clearTimeout(timer);
    } else handleSendUserMessage(userMessage);
  }

  async function handleSendUserMessage(userMessage: Message) {
    let updates: Message[] = [...messages, userMessage];
    setMessages(updates);
    setProcessing(true);
    setProcessing(false);
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        processing,
        input,
        handleUpdateMessages,
        handleSendUserMessage,
        handleClearChat,
        handleUserMessage,
        handleSetInput,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

function useChat() {
  const context = useContext(ChatContext);
  return context;
}

export { ChatProvider, useChat };
