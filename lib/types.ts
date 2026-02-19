export interface SmsMessage {
  id: string;
  body: string;
  sender: string;
  code: string | null;
  receivedAt: string;
}
