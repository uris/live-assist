import { ManageAI } from '@class/ManageChat';
import { Message } from '@comp/ChatMessage/ChatMessage';
import { createContext, useContext, useState } from 'react';
import { FunctionResponse } from '@class/ManageFunctionResposnes';

const ChatContext = createContext<ChatContextType>({} as ChatContextType);

export type ChatContextType = {
  messages: Message[];
  processing: boolean;
  handleUpdateMessages: (messages: Message[] | Message) => void;
  handleSendUserMessage: (userMessage: Message) => void;
  handleUserMessage: (userMessage: Message) => void;
  handleClearChat: () => void;
};

interface Props {
  children?: any;
}

function ChatProvider(props: Props) {
  const { children } = props;
  const [messages, setMessages] = useState<Message[]>([]);
  const [processing, setProcessing] = useState<boolean>(false);
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
      timer = setTimeout(() => {
        const response = FunctionResponse.setResponse('contractReview');
        setMessages([...updates, response]);
        setProcessing(false);
      }, 3000);
    } else handleSendUserMessage(userMessage);
  }

  async function handleSendUserMessage(userMessage: Message) {
    let updates: Message[] = [...messages, userMessage];
    setMessages(updates);
    setProcessing(true);
    const { success, reply } = await ManageAI.getChatResponse(
      userMessage,
      messages,
    );
    if (success && reply) {
      handleReply(updates, reply);
    }
    setProcessing(false);
  }

  function handleReply(messages: Message[], reply: any) {
    if (reply.role === 'function') {
      const newMessage: Message = FunctionResponse.setResponse(
        reply.function.name,
      );
      setMessages([...messages, newMessage]);
    } else {
      setMessages([...messages, reply]);
    }
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        processing,
        handleUpdateMessages,
        handleSendUserMessage,
        handleClearChat,
        handleUserMessage,
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
