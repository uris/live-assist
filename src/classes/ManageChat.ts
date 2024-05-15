import { Message } from '@comp/ChatMessage/ChatMessage';

class ManageAI {
  private static BASE_URL = `${import.meta.env.VITE_TYPEUP_API}/gpassistant`;
  private static CHAT = `/chat`;

  /** send a message and get the repsponse from chat openAI. Also saves the messages to the chat history
   * @param {Message} message - the chat message to send
   * @param {Message[]} messageHistory - tthe message history
   * @return {boolean, Message|null} - success of the exchange as well as the message back
   */
  static async getChatResponse(
    message: Message,
    messageHistory: Message[],
  ): Promise<{
    success: boolean;
    reply: Message | null;
  }> {
    let success = false;
    let reply: Message | null = null;
    try {
      const response = await fetch(this.BASE_URL + this.CHAT, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ message, messageHistory }),
      });
      if (response.status === 200) {
        ({ success, reply } = await response.json());
      } else {
        const { replyMessage } = await response.json();
        console.log(replyMessage);
      }
    } catch (error) {
      console.log(error);
    }
    return { success, reply };
  }
}

export { ManageAI };
