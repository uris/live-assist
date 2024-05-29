import { Image } from '@asset/images/Logo';
import * as Styled from './Styles';
import { themeColors } from '@ref/colors';
import { Switch } from '@comp/Switch/Switch';
import { useLayout } from '@context/LayoutContext';
import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export function Header() {
  const { connected, handleSetConnected } = useLayout();
  const [scope, animateLive] = useAnimate();
  useEffect(() => {
    async function animateOn() {
      animateLive(
        scope.current,
        { backgroundColor: themeColors.green500 },
        { ease: 'easeInOut', duration: 0.75 },
      );
    }
    async function animateOff() {
      await animateLive(
        scope.current,
        { backgroundColor: 'rgba(255,255,255,0.2)' },
        { ease: 'easeInOut', duration: 0.75 },
      );
    }
    if (connected) animateOn();
    else animateOff();
  }, [connected]);
  return (
    <Styled.Wrapper>
      <div className="button-group">
        <Image height={24} color={themeColors.graysWhite} />
      </div>
      <div className="title">
        <div ref={scope} className="status">
          Live Assist
        </div>
      </div>
      <div className="button-group-right">
        Take Control
        <Switch
          state={connected}
          bgColorOff={'rgba(0,0,0,0.25)'}
          onChange={(state: boolean) => handleSetConnected(state)}
        />
      </div>
    </Styled.Wrapper>
  );
}
