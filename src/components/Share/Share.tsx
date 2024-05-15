import { Icon } from '@asset/Icons/Icon';
import * as Styled from './Styles';
import { themeColors } from '@ref/colors';
import { Button } from '@comp/Button/Button';

export function Share() {
  return (
    <Styled.Wrapper>
      <Icon name={'image'} size={150} strokeColor={themeColors.grays300} />
      <Button
        label={'Request Screen and Audio Share'}
        variant={'primary'}
        icon={'share arrow'}
        iconPos={'right'}
        iconSize={20}
      />
    </Styled.Wrapper>
  );
}
