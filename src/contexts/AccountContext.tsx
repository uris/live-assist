import { createContext, useContext, useState } from 'react';
import CamilaAvatar from '@asset/images/camila@2x.png';
import UserAvatar from '@asset/images/Jenn.jpg';

const AccountContext = createContext<AccountContextType>(
  {} as AccountContextType,
);

export type AccountContextType = {
  userInfo: Partial<UserInfo> | null;
  customerInfo: Partial<CustomerInfo> | null;
  handleSetUserInfo: (info: Partial<UserInfo>) => void;
  handleSetCustomerInfo: (info: Partial<UserInfo>) => void;
};

export type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  avatar: any;
  company: string;
  role: string;
};

export type CustomerInfo = {
  firstName: string;
  lastName: string;
  email: string;
  avatar: any;
  company: string;
  role: string;
  account: boolean;
};

const defaultUser: UserInfo = {
  firstName: 'Camila',
  lastName: 'Martinez',
  email: 'camila@g-p.com',
  avatar: CamilaAvatar,
  company: 'G-P',
  role: 'BDR Specialist',
};

const defaultCustomer: CustomerInfo = {
  firstName: 'Jenn',
  lastName: 'Huang',
  email: 'jhuang@g-p.com',
  avatar: UserAvatar,
  company: 'Dog Baby',
  role: 'Owner',
  account: false,
};

interface Props {
  children?: any;
}

function AccountProvider(props: Props) {
  const { children } = props;
  const [userInfo, setUserInfo] = useState<Partial<UserInfo> | null>(
    defaultUser,
  );
  const [customerInfo, setCustomerInfo] =
    useState<Partial<CustomerInfo> | null>(defaultCustomer);

  function handleSetUserInfo(info: Partial<UserInfo>) {
    if (info) {
      const newUserInfo = userInfo ? { ...userInfo, ...info } : { ...info };
      setUserInfo(newUserInfo);
    }
  }

  function handleSetCustomerInfo(info: Partial<CustomerInfo>) {
    if (info) {
      const newUserInfo = customerInfo
        ? { ...customerInfo, ...info }
        : { ...info };
      setCustomerInfo(newUserInfo);
    }
  }

  return (
    <AccountContext.Provider
      value={{
        userInfo,
        customerInfo,
        handleSetUserInfo,
        handleSetCustomerInfo,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

function useAccount() {
  const context = useContext(AccountContext);
  return context;
}

export { AccountProvider, useAccount };
