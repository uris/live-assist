import { Image } from '@asset/images/Logo';
import * as Styled from './Styles';
import { themeColors } from '@ref/colors';
import { Switch } from '@comp/Switch/Switch';

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
        Take Control
        <Switch state={false} bgColorOff={'rgba(0,0,0,0.25)'} />
      </div>
    </Styled.Wrapper>
  );
}
