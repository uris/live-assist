import * as Styled from './Styles';

interface Props {
  avatar?: any;
  size?: number;
}

export function Avatar(props: Props) {
  const { avatar = null, size = 24 } = props;
  if (!avatar) return null;
  return (
    <Styled.Wrapper $size={size}>
      <img src={avatar} />
    </Styled.Wrapper>
  );
}
