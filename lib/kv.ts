import { kv } from "@vercel/kv";
import { SmsMessage } from "./types";

const KEY = "sms:messages";
const MAX_MESSAGES = 100;

export async function pushMessage(message: SmsMessage): Promise<void> {
  await kv.lpush(KEY, JSON.stringify(message));
  await kv.ltrim(KEY, 0, MAX_MESSAGES - 1);
}

export async function getMessages(limit: number = 20): Promise<SmsMessage[]> {
  const raw = await kv.lrange<string>(KEY, 0, limit - 1);
  return raw.map((item) =>
    typeof item === "string" ? JSON.parse(item) : (item as unknown as SmsMessage)
  );
}
