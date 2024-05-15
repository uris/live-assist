import { useAccount } from '@context/AccountContext';
import * as Styled from './Styles';
import { Avatar } from '@comp/Avatar/Avatar';
import { Transition, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { Icon, OSIcons } from '@asset/Icons/Icon';
import { Image } from '@asset/images/Logo';
import { Button } from '@comp/Button/Button';
import { themeColors } from '@ref/colors';

export function UserBar() {
  const { customerInfo } = useAccount();
  const [blink, blinkAnimation] = useAnimate();
  const transition: Transition = {
    ease: 'linear',
    repeatType: 'loop',
    repeat: Infinity,
    duration: 1,
  };
  useEffect(() => {
    async function animate() {
      await blinkAnimation(blink.current, { opacity: 1 });
      blinkAnimation(blink.current, { opacity: 0 }, transition as any);
    }
    if (blink) animate();
  });
  return (
    <Styled.Wrapper>
      <div>
        <div>
          <div ref={blink} className="connected" />
          <Avatar avatar={customerInfo?.avatar} />
          {`${customerInfo?.firstName} ${customerInfo?.lastName}`} •{' '}
          {customerInfo?.company} • {customerInfo?.role}
        </div>
        <Icon name={'arrow right'} size={16} />
        Prospect
        <Icon name={'arrow right'} size={16} />
        <div className="quote">
          <Image image="pdf" height={24} />
          DES Quote
        </div>
      </div>
      <div>
        <Button
          variant={'link'}
          label={`${customerInfo?.firstName}'s activity history`}
        />
        <Icon
          name={OSIcons.chevronDown}
          size={16}
          strokeColor={themeColors.primaryGPBlue}
        />
      </div>
    </Styled.Wrapper>
  );
}
