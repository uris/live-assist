import { userInsight } from '@context/SentimentContext';
import * as Styled from './Styles';

interface Props {
  height?: number;
  type?: 'sentiment' | 'engagement' | 'frustration';
}

export function ProgressBar(props: Props) {
  const { height = 5, type = 'sentiment' } = props;
  const { sentiment, engagement, frustration } = userInsight();
  function setValue() {
    if (type === 'engagement') return engagement;
    if (type === 'frustration') return frustration;
    if (type === 'sentiment') return sentiment;
    return sentiment;
  }

  return (
    <Styled.Wrapper $height={height}>
      <Styled.Progress $width={setValue()} />
    </Styled.Wrapper>
  );
}
