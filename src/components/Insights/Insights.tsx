import { ProgressBar } from '@comp/ProgressBar/ProgressBar';
import * as Styled from './Styles';
import { Suggestion, userInsight } from '@context/SentimentContext';
import { useChat } from '@context/ChatThread';
import { Icon } from '@asset/Icons/Icon';

export function Insights() {
  const { summary, suggestions, coaching } = userInsight();
  const { handleSetInput } = useChat();
  return (
    <Styled.Wrapper>
      <div className="block-values">
        <div className="value">
          Sentiment:
          <ProgressBar type={'engagement'} />
        </div>
        <div className="value">
          Engagement:
          <ProgressBar type={'engagement'} />
        </div>
        <div className="value">
          Frustration:
          <ProgressBar type={'frustration'} />
        </div>
      </div>
      <div className="block">
        <h1>
          Summary <Icon name={'chevron down'} size={16} />
        </h1>
        <p className="summary">{summary}</p>
      </div>

      <div className="block">
        <h1>
          Suggested Responses <Icon name={'chevron down'} size={16} />
        </h1>
        {suggestions?.map((suggesiton: Suggestion, i: number) => {
          return (
            <p
              key={'suggestion_' + i}
              className={'action'}
              onClick={() => handleSetInput(suggesiton)}
            >
              {suggesiton.message}
            </p>
          );
        })}
      </div>

      <div className="block">
        <h1>
          Coaching <Icon name={'chevron down'} size={16} />
        </h1>
        {coaching?.map((suggesiton: Suggestion, i: number) => {
          return (
            <p key={'suggestion_' + i} className={'summary'}>
              {suggesiton.message}
            </p>
          );
        })}
      </div>
    </Styled.Wrapper>
  );
}
