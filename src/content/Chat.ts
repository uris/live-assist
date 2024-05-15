import { Message } from '@comp/ChatMessage/ChatMessage';

export const noCredits = (
  currentCredits: any,
  messageCredits: any,
): Message => {
  return {
    content: `I'm sorry - it seems like you you've run out of credits for today (you have ${currentCredits} left and need at least ${messageCredits}). We can pick this thread back up tomorrow or you can always upgrade your plan to a monthly subscription (giving you unlimited chat).`,
    role: 'assistant',
    id: '',
    actions: [
      {
        label: 'Upgrade plan',
        done: false,
        id: 'upgrade',
        icon: 'cart',
      },
      {
        label: 'Pick back up tomorrow',
        done: false,
        id: 'save',
        icon: 'timer',
      },
      {
        label: 'Learn more about credits',
        done: false,
        id: 'credits',
        icon: 'share arrow',
        iconPos: 'right',
      },
    ],
  };
};
