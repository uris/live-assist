import { Icon } from '@asset/Icons/Icon';
import * as Styled from './Styles';
import { SimpleSlider } from '@comp/SimpleSlider/SimpleSlider';
import { themeColors } from '@ref/colors';

export function ShareControls() {
  return (
    <Styled.Wrapper $disabled={true}>
      <div className="control">
        <Icon name={'mic'} strokeColor={themeColors.grays500} />
        <SimpleSlider width={150} initial={50} />
      </div>
      <div className="control">
        <Icon name={'speaker'} strokeColor={themeColors.grays500} />
        <SimpleSlider width={150} initial={50} />
      </div>
    </Styled.Wrapper>
  );
}
