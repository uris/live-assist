import { ProgressBar } from '@comp/ProgressBar/ProgressBar';
import * as Styled from './Styles';
import { Suggestion, userInsight } from '@context/SentimentContext';

export function Insights() {
  const { summary, suggestions } = userInsight();
  return (
    <Styled.Wrapper>
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
      <div className="block">
        <h1>Summary</h1>
        <p className="summary">{summary}</p>
      </div>
      <div className="block">
        <h1>Suggestions</h1>
        {suggestions?.map((suggesiton: Suggestion) => {
          return <p className="summary">{suggesiton.message}</p>;
        })}
      </div>
    </Styled.Wrapper>
  );
}
