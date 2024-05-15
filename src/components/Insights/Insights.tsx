import { ProgressBar } from '@comp/ProgressBar/ProgressBar';
import * as Styled from './Styles';
import { Suggestion, userInsight } from '@context/SentimentContext';
import { useChat } from '@context/ChatThread';

export function Insights() {
  const { summary, suggestions } = userInsight();
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
        <h1>Summary</h1>
        <p className="summary">{summary}</p>
      </div>

      <div className="block">
        <h1>Suggestions</h1>
        {suggestions?.map((suggesiton: Suggestion, i: number) => {
          return (
            <p
              key={'insight_' + i}
              className={suggesiton.actionable ? 'action' : 'summary'}
              onClick={() => {
                if (suggesiton.actionable) {
                  handleSetInput(suggesiton.message || '');
                }
              }}
            >
              {suggesiton.message}
            </p>
          );
        })}
      </div>
    </Styled.Wrapper>
  );
}
