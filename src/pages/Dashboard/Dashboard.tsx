import { Header } from '@comp/Header/Header';
import * as Styled from './Styles';
import { UserBar } from '@comp/UserBar/UserBar';
import { MessageInput } from '@comp/MessageInput/MessageInput';
import { MessageThread } from '@comp/MessageThread/MessageThread';
import { ChatMessageList } from '@comp/ChatMessageList/ChatMessageList';
import { PanelHeader } from '@comp/PanelHeader/PanelHeader';
import { Insights } from '@comp/Insights/Insights';
import { Share } from '@comp/Share/Share';
import { ShareControls } from '@comp/ShareControls/ShareControls';
import { useAccount } from '@context/AccountContext';
import { useLayout } from '@context/LayoutContext';

export function Dashboard() {
  const { customerInfo } = useAccount();
  const { connected } = useLayout();
  return (
    <Styled.Viewport>
      <Styled.Header>
        <Header />
      </Styled.Header>
      <Styled.Account>
        <UserBar />
      </Styled.Account>
      <Styled.ContentWrapper>
        <Styled.SharePanel>
          <PanelHeader title={'Screen & Audio Share'} />
          <Share />
          <ShareControls />
        </Styled.SharePanel>
        <Styled.ChatPanel>
          <PanelHeader
            title={`${customerInfo?.firstName}'s Chat: ${
              connected ? 'Live with You' : 'Live with GIA'
            }`}
          />
          <MessageThread>
            <ChatMessageList />
          </MessageThread>
        </Styled.ChatPanel>
        <Styled.InsightsPanel>
          <PanelHeader title={'Live Insights'} />
          <Insights />
        </Styled.InsightsPanel>
      </Styled.ContentWrapper>
      <Styled.MessagePanel>
        <MessageInput />
      </Styled.MessagePanel>
    </Styled.Viewport>
  );
}
