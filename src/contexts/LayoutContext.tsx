import { Notification } from '@comp/TrayNotification/TrayNotification';
import { createContext, useContext, useState } from 'react';

const LayoutContext = createContext<LayoutContextType>({} as LayoutContextType);

export type LayoutContextType = {
  menuItem: number;
  showActionMenu: boolean;
  showDemoOptions: boolean;
  showConfirmPanel: Confirmation | null;
  notification: Notification | null;
  popUp: PopUp | null;
  handleSetMenuItem: (value: number) => void;
  handleSetShowActionMenu: (value: boolean) => void;
  handleShowDemoOptions: (value: boolean) => void;
  handleConfirmationPanel: (show: boolean, type?: ConfirmationType) => void;
  handleNotification: (notificationInfo: Partial<Notification>) => void;
  handlePopUp: (popUpInfo: Partial<PopUp>) => void;
};

export enum ConfirmationType {
  save = 'save',
  saveUpgrade = 'save upgrade',
  clear = 'clear',
  invite = 'invite',
}

export type Confirmation = {
  show?: boolean;
  type?: ConfirmationType;
};

export enum PopUpType {
  subscribe = 'subscribe',
}

export type PopUp = {
  show?: boolean;
  type?: PopUpType;
};

interface Props {
  children?: any;
}

function LayoutProvider(props: Props) {
  const { children } = props;
  const [menuItem, setMenuItem] = useState<number>(1);
  const [showActionMenu, setShowActionMenu] = useState<boolean>(false);
  const [showDemoOptions, setShowDemoOptions] = useState<boolean>(false);
  const [popUp, setPopUp] = useState<PopUp | null>(null);
  const [notification, setNotification] = useState<Notification | null>(null);
  const [showConfirmPanel, setShowConfirmPanel] = useState<Confirmation | null>(
    null,
  );

  function handleSetMenuItem(value: number) {
    setMenuItem(value);
  }

  function handleSetShowActionMenu(value: boolean) {
    setShowActionMenu(value);
  }

  function handleShowDemoOptions(value: boolean) {
    setShowDemoOptions(value);
  }

  function handleConfirmationPanel(show: boolean, type?: ConfirmationType) {
    setShowConfirmPanel({ show, type: type ? type : showConfirmPanel?.type });
  }

  function handleNotification(notificationInfo: Partial<Notification>) {
    if (!notificationInfo) return;
    const updated: Notification = notification
      ? { ...notification, ...notificationInfo }
      : { ...notificationInfo };
    setNotification(updated);
  }

  function handlePopUp(popUpInfo: Partial<PopUp>) {
    if (!popUpInfo) return;
    const updated: PopUp = popUp
      ? { ...popUp, ...popUpInfo }
      : { ...popUpInfo };
    setPopUp(updated);
  }

  return (
    <LayoutContext.Provider
      value={{
        menuItem,
        showActionMenu,
        showDemoOptions,
        showConfirmPanel,
        notification,
        popUp,
        handleSetMenuItem,
        handleSetShowActionMenu,
        handleShowDemoOptions,
        handleConfirmationPanel,
        handleNotification,
        handlePopUp,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

function useLayout() {
  const context = useContext(LayoutContext);
  return context;
}

export { LayoutProvider, useLayout };
