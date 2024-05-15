import { AnimatePresence } from 'framer-motion';
import * as Styled from './Styles';
import { useLayout } from '@context/LayoutContext';
import { useEffect } from 'react';
import { ProgressIndicator } from '@comp/ProgressIndicator/ProgressIndicator';
import { Icon } from '@asset/Icons/Icon';

export type Notification = {
  show?: boolean;
  type?: 'static' | 'timed';
  progress?: boolean;
  duration?: number;
  message?: string;
  icon?: string;
  iconPos?: 'left' | 'right';
};

export function TrayNotificaton() {
  const { notification, handleNotification } = useLayout();
  let timer: any = null;

  useEffect(() => {
    if (notification?.show === true && notification.type === 'timed') {
      timer = setTimeout(() => {
        handleNotification({ show: false });
      }, notification.duration || 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [notification?.show]);

  return (
    <AnimatePresence initial={false}>
      {notification?.show && (
        <Styled.Wrapper
          initial={{ top: -50 }}
          animate={{ top: 24 }}
          exit={{ top: -50 }}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
          {notification.progress && (
            <ProgressIndicator
              show={notification.progress || false}
              size={24}
            />
          )}
          {!notification.progress && notification.icon && (
            <Icon size={24} name={notification.icon} />
          )}
          {notification?.message || 'Message'}
        </Styled.Wrapper>
      )}
    </AnimatePresence>
  );
}
