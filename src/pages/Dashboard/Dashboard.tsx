import { Header } from '@comp/Header/Header';
import * as Styled from './Styles';
import { UserBar } from '@comp/UserBar/UserBar';
import { MessageInput } from '@comp/MessageInput/MessageInput';
import { MessageThread } from '@comp/MessageThread/MessageThread';
import { ChatMessageList } from '@comp/ChatMessageList/ChatMessageList';
import { PanelHeader } from '@comp/PanelHeader/PanelHeader';
import { ProgressBar } from '@comp/ProgressBar/ProgressBar';

export function Dashboard() {
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
        </Styled.SharePanel>
        <Styled.ChatPanel>
          <PanelHeader title={'Chat'} />
          <MessageThread>
            <ChatMessageList />
          </MessageThread>
        </Styled.ChatPanel>
        <Styled.InsightsPanel>
          <PanelHeader title={'Insights'} />
          Sentiment:
          <ProgressBar type={'engagement'} />
          Engagement:
          <ProgressBar type={'engagement'} />
          Frustration:
          <ProgressBar type={'frustration'} />
        </Styled.InsightsPanel>
      </Styled.ContentWrapper>
      <Styled.MessagePanel>
        <MessageInput />
      </Styled.MessagePanel>
    </Styled.Viewport>
  );
}
