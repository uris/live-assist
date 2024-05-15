import { Icon } from '@asset/Icons/Icon';
import * as Styled from './Styles';
import { themeColors } from '@ref/colors';
import { Button } from '@comp/Button/Button';
import { useAccount } from '@context/AccountContext';
import { Message } from '@comp/ChatMessage/ChatMessage';
import { useChat } from '@context/ChatThread';
import { useState } from 'react';

export function Share() {
  const { customerInfo } = useAccount();
  const { handleUserMessage } = useChat();
  const [didRequest, setDidRequest] = useState<boolean>(false);
  function sendRequest() {
    if (didRequest) return;
    const message: Message = {
      role: 'assistant',
      content: `${customerInfo?.firstName}, click the button below to start a live screen share`,
      title: 'Start Screen Share',
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    };
    handleUserMessage(message);
    setDidRequest(true);
  }
  return (
    <Styled.Wrapper>
      <Icon name={'image'} size={150} strokeColor={themeColors.grays300} />
      <Button
        label={`Ask ${customerInfo?.firstName} to share screen and audio`}
        variant={'primary'}
        icon={'share arrow'}
        iconPos={'right'}
        iconSize={20}
        onClick={() => sendRequest()}
      />
    </Styled.Wrapper>
  );
}
