import { SmsMessage } from "@/lib/types";
import CopyButton from "./CopyButton";

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) return "刚刚";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} 分钟前`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} 小时前`;
  const days = Math.floor(hours / 24);
  return `${days} 天前`;
}

export default function MessageCard({ message }: { message: SmsMessage }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm">
      {message.code && (
        <div className="flex items-center justify-between mb-3">
          <span className="text-3xl font-bold tracking-wider text-gray-900 dark:text-gray-100">
            {message.code}
          </span>
          <CopyButton text={message.code} />
        </div>
      )}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 break-words">
        {message.body}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
        <span>{message.sender}</span>
        <span>{relativeTime(message.receivedAt)}</span>
      </div>
    </div>
  );
}
