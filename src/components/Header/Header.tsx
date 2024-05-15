import { Image } from '@asset/images/Logo';
import * as Styled from './Styles';
import { themeColors } from '@ref/colors';
import { Icon } from '@asset/Icons/Icon';

export function Header() {
  return (
    <Styled.Wrapper>
      <div className="button-group">
        <Image height={24} color={themeColors.graysWhite} />
      </div>
      <div className="title">
        <div className="status">Live Assist</div>
      </div>
      <div className="button-group-right">
        <Icon name={'x'} strokeColor={themeColors.graysWhite} />
      </div>
    </Styled.Wrapper>
  );
}
