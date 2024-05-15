import { AccountProvider } from '@context/AccountContext';
import { ChatProvider } from '@context/ChatThread';
import { LayoutProvider } from '@context/LayoutContext';
import { InsightProvider } from '@context/SentimentContext';
import { Dashboard } from '@page/Dashboard/Dashboard';
import { GlobalStyles } from '@ref/global';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// routing paths
const paths = [{ path: '/', Component: Dashboard }];

// RouterProvider added
export default function App() {
  return (
    <LayoutProvider>
      <AccountProvider>
        <InsightProvider>
          <ChatProvider>
            <GlobalStyles />
            <RouterProvider router={createBrowserRouter(paths)} />
          </ChatProvider>
        </InsightProvider>
      </AccountProvider>
    </LayoutProvider>
  );
}
