import { Icon } from '@asset/Icons/Icon';
import * as Styled from './Styles';

interface Props {
  title?: string;
}

export function PanelHeader(props: Props) {
  const { title } = props;
  return (
    <Styled.Wrapper>
      {title}
      <Icon name={'ellipsis'} size={18} />
    </Styled.Wrapper>
  );
}
