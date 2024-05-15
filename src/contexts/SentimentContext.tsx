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
  summary: string;
  setSummary: any;
  suggestions: Suggestion[] | null;
  setSuggestions: any;
};

export type Suggestion = {
  message?: string;
  files?: string[];
};

const defaultSummary =
  'Jenn has an overall possitive and engaged attitude but could become frustrated if unable to understand details related to pricing of the Meridian Core quote that was provided.';

const defaultSuggestions: Suggestion[] = [
  {
    message:
      'Approach: reassure Jenn that pricing can seem complicated but when explained it becomes much simpler and easier to understand',
  },
  {
    message:
      'Honesty: provide clarity around pricing in a direct and honest manner',
  },
  {
    message:
      'G-P Deffrentiators: Always reinforce G-Ps deffrentiators in addition to core features and services',
  },
];

interface Props {
  children?: any;
}

function InsightProvider(props: Props) {
  const { children } = props;
  const [sentiment, setSentiment] = useState<number>(50);
  const [frustration, setFrustration] = useState<number>(10);
  const [engagement, setEnagement] = useState<number>(75);
  const [summary, setSummary] = useState<string>(defaultSummary);
  const [suggestions, setSuggestions] = useState<Suggestion[] | null>(
    defaultSuggestions,
  );

  return (
    <InsightContext.Provider
      value={{
        sentiment,
        frustration,
        engagement,
        summary,
        suggestions,
        setEnagement,
        setFrustration,
        setSentiment,
        setSummary,
        setSuggestions,
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
