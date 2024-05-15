import * as Styled from './Styles';
import { useRef, useState, useEffect } from 'react';
import { Icon } from '@asset/Icons/Icon';
import { Message } from '@comp/ChatMessage/ChatMessage';
import { useChat } from '@context/ChatThread';
import { FileButton } from '@comp/FileButton/FileButton';
import { themeColors } from '@ref/colors';
import { useAccount } from '@context/AccountContext';

interface Props {
  maxHeight?: number;
  focused?: boolean;
  height?: string;
  placeholder?: string;
  onSendMessage?: (message: Message) => void;
}

export function MessageInput(props: Props) {
  const { customerInfo } = useAccount();
  const {
    maxHeight = 300,
    focused = false,
    height = '23px',
    onSendMessage = () => null,
    placeholder = `Message ${customerInfo?.firstName} or attach files ...`,
  } = props;
  const { handleUserMessage, input, handleSetInput } = useChat();
  const ref = useRef<HTMLTextAreaElement>(null);
  const addFile = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>('');
  const [fileOver, setFileOver] = useState<boolean>(false);
  const [file, setFile] = useState<any>(null);

  useEffect(() => {
    if (input === '') return;
    setMessage(input || '');
    setTimeout(() => {
      adjustHeight();
    }, 150);
  }, [input]);

  // reset the height of the input on mount to initial height
  useEffect(() => resetHeight(), []);

  // enable setting focus byt changing the focus prop
  useEffect(() => {
    if (focused && ref && ref.current) {
      ref.current.focus();
    }
  }, [focused]);

  // adjuts the height of the input based on the contentwohout the need
  // to present scrollbar overflow inside the text area (until max height)
  const adjustHeight = () => {
    if (ref && ref.current) {
      ref.current.style.height = '0px';
      ref.current.style.height =
        Math.min(ref.current.scrollHeight, maxHeight) + 'px';
    }
  };

  // performs a height reset to initial height
  const resetHeight = () => {
    if (ref && ref.current) {
      ref.current.style.height = height;
    }
  };

  const doSubmit = () => {
    if ((message !== '' || file) && ref.current) {
      const date = new Date();
      const newMessage: Message = {
        role: 'assistant',
        content: message,
        id: date.getTime().toString(),
        function: undefined,
        date: date.toISOString(),
        attachments: file ? [file] : undefined,
      };
      onSendMessage(newMessage);
      handleUserMessage(newMessage);
      ref.current.value = '';
      setMessage('');
      handleSetInput('');
      setFile(null);
      resetHeight();
      ref.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!e.shiftKey && e.key === 'Enter') {
      if (message !== '') {
        doSubmit();
        if (ref && ref.current) {
          ref.current.value = '';
        }
      }
      e.preventDefault();
    }
  };

  const fileBtnClick = () => {
    if (addFile.current) addFile.current.click();
  };

  const fileUpload = () => {
    if (addFile.current && addFile.current.files) {
      setFile(addFile.current.files[0]);
    }
  };

  const deleteFile = () => {
    setFile(null);
  };

  const handleDragOver = (e: React.DragEvent<any>) => {
    e.preventDefault();
    setFileOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<any>) => {
    e.preventDefault();
    setFileOver(false);
  };

  const handleDrop = (e: React.DragEvent<any>) => {
    e.preventDefault();
    setFileOver(false);
    const item = e.dataTransfer.items[0];
    if (item.kind === 'file') {
      const file = item.getAsFile();
      setFile(file);
    }
  };

  return (
    <Styled.Wrapper
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleDrop(e)}
    >
      <Styled.InputArea
        animate={{
          borderColor: fileOver
            ? themeColors.primaryGPBlue
            : themeColors.grays200,
        }}
      >
        <Styled.ButtonGroup>
          <Icon name={'plus circle'} size={32} onClick={() => fileBtnClick()} />
          <Icon name={'microphone'} size={32} />
        </Styled.ButtonGroup>
        <FileButton file={file} onDelete={() => deleteFile()} />
        <Styled.TextArea
          id={'messageInput'}
          name={'messageInput'}
          ref={ref}
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          onInput={() => adjustHeight()}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder={placeholder}
          disabled={false}
          rows={1}
        />
        <Styled.ButtonGroup>
          <Icon
            name={'arrow circle up'}
            disabled={message === '' && !file}
            size={32}
            onClick={() => doSubmit()}
          />
        </Styled.ButtonGroup>
      </Styled.InputArea>
      <input
        ref={addFile}
        type="file"
        hidden={true}
        multiple={false}
        onChange={() => fileUpload()}
        accept={'.docx, .pdf, .txt, .rtf, .ppt, .pptx, .doc, .html'}
      />
    </Styled.Wrapper>
  );
}
