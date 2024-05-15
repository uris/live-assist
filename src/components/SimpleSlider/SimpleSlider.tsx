import { useEffect, useRef } from 'react';
import * as Styled from './Styles';
import useResizeObserver from '@hook/useResizeObserver';

interface Props {
  initial?: number;
  scaleMin?: number;
  scaleMax?: number;
  width?: number | string;
  height?: number | string;
  touchHeight?: number | string;
  trackHeadSize?: number | null;
  rounding?: number;
  cursor?: 'default' | 'garb' | 'grabbing' | 'pointer';
  reInitialize?: boolean | null;
  dragDisabled?: boolean;
  onChange?: (value: number, percent: number) => void;
  onDragChange?: (value: number, percent: number) => void;
}

export function SimpleSlider(props: Props) {
  const {
    initial = 25,
    scaleMin = 0,
    scaleMax = 100,
    width = 100,
    height = 2,
    touchHeight = 24,
    trackHeadSize = 10,
    rounding = 2,
    cursor = 'default',
    reInitialize = false,
    dragDisabled = false,
    onChange = () => null,
    onDragChange = () => null,
  } = props;

  const ref = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLDivElement>(null);
  const currentProgress = useRef<number>(initial);
  const size = useResizeObserver(ref);

  // if we want to reinitalize the slider to the current prop
  // we can toggle the re-initialize prop between true/false
  useEffect(() => {
    currentProgress.current = initial;
  }, [reInitialize]);

  // set event listners on mount and set the initial progress point
  // of the slider
  useEffect(() => {
    const el = ref?.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      initialProgress(rect.width, currentProgress.current);
    }
    if (dragDisabled === true) return;
    el?.addEventListener('mousedown', handleMouseDown, false);
    return () => {
      el?.removeEventListener('mousedown', handleMouseDown, false);
    };
  }, [currentProgress.current, ref, dragDisabled]);

  // Adjust slider display position when the current pop value changes.
  // Avoid feedback effect when slider on change value is fed back in
  // as the current prop value.
  useEffect(() => {
    const el = ref?.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      initialProgress(rect.width, currentProgress.current, true);
    }
  }, [currentProgress.current, ref, track, head, size]);

  // On mouse down push the progress of slider to the mouse down point
  // and trigger events - add the drag and mouse up window listners
  function handleMouseDown(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    window.addEventListener('mousemove', handleMouseMove, false);
    window.addEventListener('mouseup', handleMouseUp, false);
  }

  // on mouse move, push slider to updated mouse position and trigger the update events
  function handleMouseMove(e: MouseEvent) {
    e.preventDefault();
    const el = ref?.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      let currentWidth: number = e.clientX - rect.x;
      if (currentWidth > rect.width) currentWidth = rect.width;
      else if (currentWidth < 0) currentWidth = 0;
      const newPos = setPos(currentWidth, rect);
      onChange(newPos.value, newPos.percent);
    }
  }

  // on mouse move, push slider to updated mouse up position and trigger the update events
  // also cleaning up the mouse move and mouse up listnsers attached to the window
  function handleMouseUp(e: MouseEvent) {
    e.preventDefault();
    window.removeEventListener('mousemove', handleMouseMove, false);
    window.removeEventListener('mouseup', handleMouseUp, false);
    const el = ref?.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      let currentWidth: number = e.clientX - rect.x;
      if (currentWidth > rect.width) currentWidth = rect.width;
      else if (currentWidth < 0) currentWidth = 0;
      const newPos = setPos(currentWidth, rect);
      onDragChange(newPos.value, newPos.percent);
    }
  }

  // sets the current position of the slider and returns the scaled value and percent
  function setPos(currentWidth: number, rect: DOMRect) {
    if (currentWidth > rect.width) currentWidth = rect.width;
    else if (currentWidth < 0) currentWidth = 0;
    const tr = track.current;
    const hd = head.current;
    if (tr && hd) {
      tr.style.width = currentWidth + 'px';
      hd.style.left = currentWidth + 'px';
    }
    return progress(rect.width, currentWidth);
  }

  // set the initital state of the slider based on the current prop value
  // updates the state of the slider when the value prop changes and is
  // different to the current value of the slider
  function initialProgress(
    width: number,
    current: number,
    update: boolean = false,
  ): void {
    let initial = current;
    if (current > scaleMax || current < scaleMin) {
      console.warn(
        'Invalid slider values. Adjust scale min/max and current value. Auto adjusting to mid point.',
      );
      initial = (scaleMax - scaleMin) / 2;
    }
    const ratio = width / scaleMax;
    let pos = initial * ratio;
    let percent: number = pos / width;
    let value: number = (scaleMax - scaleMin) * percent;
    const tr = track.current;
    const hd = head.current;
    if (hd && tr) {
      if ((update && initial !== value) || !update) {
        tr.style.width = pos + 'px';
        hd.style.left = pos + 'px';
      }
    }
  }

  // based on mouse X position, get the percent and value of the slider
  // based on the slider scale;
  function progress(
    width: number,
    x: number,
  ): { value: number; percent: number } {
    const percent: number = x / width;
    const value: number = (scaleMax - scaleMin) * percent;
    return {
      value: parseFloat(value.toFixed(rounding)),
      percent: parseFloat(percent.toFixed(rounding)),
    };
  }

  return (
    <Styled.Wrapper
      ref={ref}
      $width={width}
      $height={height}
      $touchHeight={touchHeight}
      $cursor={cursor}
    >
      <Styled.TrackBG $width={width} $height={height}>
        <Styled.Track ref={track}>
          <Styled.TrackHead ref={head} $size={trackHeadSize} />
        </Styled.Track>
      </Styled.TrackBG>
    </Styled.Wrapper>
  );
}
