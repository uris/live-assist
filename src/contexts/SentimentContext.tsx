import { createContext, useContext, useState } from 'react';

const InsightContext = createContext<InsightContextType>(
  {} as InsightContextType,
);

export type InsightContextType = {
  sentiment: number;
  frustration: number;
  engagement: number;
  setSentiment: any;
  setFrustration: any;
  setEnagement: any;
};

interface Props {
  children?: any;
}

function InsightProvider(props: Props) {
  const { children } = props;
  const [sentiment, setSentiment] = useState<number>(50);
  const [frustration, setFrustration] = useState<number>(10);
  const [engagement, setEnagement] = useState<number>(75);

  return (
    <InsightContext.Provider
      value={{
        sentiment,
        frustration,
        engagement,
        setEnagement,
        setFrustration,
        setSentiment,
      }}
    >
      {children}
    </InsightContext.Provider>
  );
}

function userInsight() {
  const context = useContext(InsightContext);
  return context;
}

export { InsightProvider, userInsight };
