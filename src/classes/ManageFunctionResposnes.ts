import { Action } from '@comp/ActionButtonList/ActionButtonList';
import { Message } from '@comp/ChatMessage/ChatMessage';

class FunctionResponse {
  static setResponse(functionName: string): Message {
    const date = new Date();
    let replyMessage: Message = {
      role: 'assistant',
      content: cannedResponse(functionName),
      id: date.getTime().toString(),
      function: functionName,
      date: date.toISOString(),
      actions: cannedActions(functionName),
    };
    return replyMessage;
  }
}

export { FunctionResponse };

function cannedResponse(functionName: string): string {
  if (functionName === 'setupInSpain') return setupInSpain;
  if (functionName === 'learnMoreEOR') return learnMoreEOR;
  if (functionName === 'contractReview') return contractReview;
  return '';
}

function cannedActions(functionName: string): Action[] | undefined {
  if (functionName === 'learnMoreEOR') return eorActions;
  if (functionName === 'contractReview') return contractReviewActions;
  return;
}

const setupInSpain =
  "At Globalization Partners, we offer three main options to help you establish your business in Spain:\n1. Employer of Record (EOR): We hire your team in Spain on your behalf, handling all local employment compliance, payroll, and benefits. This is the fastest and most compliant way to get up and running in a matter of days.\n2. Contractors: You can engage individuals or entities as independent contractors, but this comes with significant compliance risks and is not recommended for long-term solutions.\n3. Setting up a legal entity: This involves establishing your own subsidiary in Spain. It's the most complex and time-consuming option, but it gives you full control over your operations.\nEach option has its own advantages, depending on your specific needs and circumstances. Would you like to lear more about any of these ?";

const learnMoreEOR =
  "Sure. The top three benefits of an EOR approach are:\n1. Speed: With G-P's EOR, you can start operations Spain in a matter of days, without the need to set up a legal entity.\n2. Compliance: We handle all local employment laws, regulations, and compliance, reducing your cost and risk.\n3. Simplicity: We take care of payroll, benefits, and HR services, allowing you to focus on your business operations.\nBasically, we become the legal employer of your team in Spain, while you maintain full operational control. This allows you to reduce cost and complexity as well as move fast.";

const contractReview =
  'This seems to be an employment contract for Manual Sierra, Senior Sales Manager, in Barcelona, Spain.\nGenerally, key items and provisions required for a compliant employemnt agreement are part of the document.\nHowever, a few items appear ambiguous and may need to be more clearly articulated.\nWhat specifically would you like me to review and provide feedback on (feel free to use any of the options below or ask specific questions)?';

const eorActions: Action[] = [
  {
    label: 'EOR instant online quote',
    done: false,
    id: 'eor online quote',
    icon: 'share arrow',
    iconPos: 'right',
  },
  {
    label: 'Talk to an EOR specialist',
    done: false,
    id: 'eor talk to sales',
    icon: 'share arrow',
    iconPos: 'right',
  },
];

const contractReviewActions: Action[] = [
  {
    label: 'Gaps & missing provisions',
    done: false,
    id: 'gaps',
  },
  {
    label: 'Completeness and clarity',
    done: false,
    id: 'clarity',
  },
  {
    label: 'Compliance issues',
    done: false,
    id: 'clarity',
  },
  {
    label: 'Employer protections',
    done: false,
    id: 'clarity',
  },
];
