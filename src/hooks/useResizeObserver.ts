import { useState, useEffect } from 'react';

type ElementSize = {
  height: number | null;
  width: number | null;
};

export default function useResizeObserver(refElement: any) {
  // create state
  const [size, setSize] = useState<ElementSize>({ height: null, width: null });

  useEffect(() => {
    const el = refElement.current;
    if (!el) return;
    // create the new observer object
    const observer = new ResizeObserver(() => {
      setSize({
        height: el.offsetHeight,
        width: el.offsetWidth,
      });
    });
    // set observer to the element
    observer.observe(el);
    // clean up observer on return
    return () => {
      if (observer) observer.disconnect();
    };
  }, [refElement]);

  return { ...size };
}
