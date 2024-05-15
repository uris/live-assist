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
  coaching: Suggestion[] | null;
  setSuggestions: any;
  setCoaching: any;
};

export type Suggestion = {
  message?: string;
  actionable?: boolean;
  file?: string;
};

const defaultSummary =
  'Jenn is overall positive and engaged but could become frustrated if unable to understand details related to adminstration fee (see chat history).';

const defaultSuggestions: Suggestion[] = [
  {
    actionable: true,
    message:
      "Response: This is an important and very common question. There is a legal and administrative cost associated with getting each Professional started in a new country. It pays for our administrative, legal and operational costs. Consider this a one-time start up fee. I've also sent you a link where you can read about it in more detail.",
  },
];

const defaultCoaching: Suggestion[] = [
  {
    message:
      'G-P Deffrentiators: Always reinforce G-Ps deffrentiators in addition to core features and services.',
  },
  {
    message:
      'Approach: reassure Jenn that pricing can seem complicated but when explained it becomes much simpler and easier to understand',
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
  const [coaching, setCoaching] = useState<Suggestion[] | null>(
    defaultCoaching,
  );

  return (
    <InsightContext.Provider
      value={{
        sentiment,
        frustration,
        engagement,
        summary,
        suggestions,
        coaching,
        setEnagement,
        setFrustration,
        setSentiment,
        setSummary,
        setSuggestions,
        setCoaching,
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
