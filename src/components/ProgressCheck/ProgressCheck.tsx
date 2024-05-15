import { themeColors } from '@ref/colors';
import * as Styled from './Styles';
import { useAnimate } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Props {
  status?: { working?: string; done?: string };
  type?: 'default' | 'check';
  playing?: boolean;
  size?: number;
  showGP?: boolean;
  GPSize?: number;
  stroke?: number;
  checkcolor?: string;
  duration?: number;
  loops?: number;
  delay?: number;
  progresscolor?: string;
  gpcolor?: string;
  fill?: boolean;
  nocaption?: boolean;
  progressEndDelay?: 'none' | number;
  progressStart?: () => void;
  progressStop?: () => void;
  progressEnd?: () => void;
}

export default function ProgressCheck(props: Props) {
  const {
    status = { working: 'working', done: 'done' },
    type = 'default',
    playing = false,
    size = 64,
    stroke = 1.5,
    loops = 4,
    duration = 0.65,
    delay = 0.5,
    checkcolor = themeColors.green500,
    progresscolor = themeColors.grays500,
    gpcolor = themeColors.graysTextPrimary,
    showGP = false,
    GPSize = 32,
    fill = true,
    nocaption = false,
    progressEndDelay = 'none',
    progressStart = () => null,
    progressStop = () => null,
    progressEnd = () => null,
  } = props;
  const [check, animateCheck] = useAnimate();
  const [circle, animateCircle] = useAnimate();
  const [caption, setCaption] = useState(status.working);
  const [working, setWorking] = useState(playing);
  let timer: any = null;
  useEffect(() => setWorking(playing), [playing]);

  useEffect(() => {
    if (!playing) return;
    const animation = async () => {
      const transLoop = {
        ease: 'linear',
        repeatType: 'loop',
        repeat: loops,
        duration: duration,
        delay: delay,
      } as any;
      const transSpring = {
        type: 'spring',
        stiffness: 400,
        damping: 15,
        mass: 1,
      } as any;
      const transFade = { ease: 'easeInOut' } as any;
      progressStart();
      await animateCircle(circle.current, { rotate: 360 }, transLoop);
      progressStop();
      setCaption(status.done);
      setWorking(false);
      if (type === 'check') {
        animateCircle(circle.current, { opacity: 0 }, transFade);
        await animateCheck(
          check.current,
          { scale: [0, 1], opacity: [1, 1] },
          transSpring,
        );
      }
      if (progressEndDelay !== 'none') {
        timer = setTimeout(() => {
          progressEnd();
        }, progressEndDelay);
      } else {
        progressEnd();
      }
    };
    animation();
    return () => {
      timer ? clearTimeout(timer) : null;
    };
    // eslint-disable-next-line
  }, [playing]);

  const captionVariants = {
    playing: { color: progresscolor },
    done: { color: gpcolor },
  };

  return (
    <Styled.Wrapper $fill={fill}>
      <Styled.Progress $size={size}>
        <Styled.CheckWrapper ref={check} $size={size}>
          <Check color={checkcolor} size={size} stroke={stroke} />
        </Styled.CheckWrapper>
        <Styled.CircleWrapper ref={circle} $size={size}>
          <Circle color={progresscolor} size={size} stroke={stroke} />
        </Styled.CircleWrapper>
        <GPType size={GPSize} color={gpcolor} visible={showGP} />
      </Styled.Progress>
      {!nocaption && (
        <Styled.Caption
          variants={captionVariants}
          initial={'playing'}
          animate={working ? 'playing' : 'done'}
          $size={size}
        >
          {caption}
        </Styled.Caption>
      )}
    </Styled.Wrapper>
  );
}

const Check = (props: { size: any; stroke: any; color: any }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0, 0, 24, 24"
    >
      <path
        d="M 8.44 12.339 L 10.607 14.506 L 10.587 14.486 L 15.467 9.596"
        fill="transparent"
        strokeWidth={props.stroke}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
      <path
        d="M 12 3 C 7.029 3 3 7.029 3 12 C 3 16.971 7.029 21 12 21 C 16.971 21 21 16.971 21 12 C 21 7.029 16.971 3 12 3 Z"
        fill="transparent"
        strokeWidth={props.stroke}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
      <path d="M 0 0 L 24 0 L 24 24 L 0 24 Z" fill="transparent"></path>
    </svg>
  );
};

const Circle = (props: { size: number; stroke: number; color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0, 0, 24, 24"
    >
      <path
        d="M 12 3 C 7.029 3 3 7.029 3 12 C 3 16.971 7.029 21 12 21 C 16.971 21 21 16.971 21 12 C 21 10.757 20.748 9.574 20.293 8.497"
        fill="transparent"
        strokeWidth={props.stroke}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
      <path d="M 0 0 L 24 0 L 24 24 L 0 24 Z" fill="transparent"></path>
    </svg>
  );
};

const GPType = (props: { size: number; color: string; visible: boolean }) => {
  if (!props.visible) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      viewBox="0 0 80 44"
    >
      <path
        d="M 62.421 4.456 L 48.128 4.456 L 48.128 21.256 L 40.056 21.256 L 40.056 26.853 L 48.128 26.853 L 48.128 39.656 L 54.925 39.656 L 54.925 10.456 L 63.17 10.456 C 67.018 10.456 69.318 12.456 69.318 15.855 C 69.318 18.904 67.018 21.254 63.17 21.254 L 59.397 21.254 L 59.397 26.853 L 63.221 26.853 C 71.517 26.853 76.114 21.654 76.114 15.653 C 76.114 9.651 72.317 4.452 62.421 4.452 Z M 22.048 4.056 C 31.993 4.056 36.841 10.307 37.94 16.455 L 31.193 16.455 C 30.093 13.005 27.545 10.055 22.148 10.055 C 14.951 10.055 11.152 15.406 11.152 22.054 C 11.152 28.703 14.751 34.053 21.897 34.053 C 26.994 34.053 29.842 30.752 30.893 26.853 L 22.348 26.853 L 22.348 21.254 L 37.94 21.254 L 37.94 39.654 L 30.944 39.654 L 30.944 37.353 C 30.944 36.204 31.144 35.153 31.844 33.453 L 32.193 32.603 L 30.993 32.603 L 30.693 33.204 C 29.244 36.104 26.445 40.054 20.548 40.054 C 10.403 40.054 4.355 32.005 4.355 22.054 C 4.355 12.103 10.552 4.054 22.048 4.054 Z"
        fill={props.color}
      ></path>
      <path d="M 0 0 L 80 0 L 80 44 L 0 44 Z" fill="transparent"></path>
    </svg>
  );
};
