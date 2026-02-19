"use client";

import { useEffect, useState } from "react";
import { SmsMessage } from "@/lib/types";
import MessageCard from "./MessageCard";

export default function MessageList({ token }: { token: string }) {
  const [messages, setMessages] = useState<SmsMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    const fetchMessages = async () => {
      try {
        const res = await fetch(`/api/sms?token=${encodeURIComponent(token)}`);
        if (res.ok) {
          const data = await res.json();
          setMessages(data.messages);
        }
      } catch {
        // silently retry on next interval
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();

    const startPolling = () => {
      timer = setInterval(fetchMessages, 5000);
    };

    const stopPolling = () => {
      clearInterval(timer);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stopPolling();
      } else {
        fetchMessages();
        startPolling();
      }
    };

    startPolling();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stopPolling();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [token]);

  if (loading) {
    return (
      <div className="text-center text-gray-400 dark:text-gray-500 py-12">
        加载中...
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="text-center text-gray-400 dark:text-gray-500 py-12">
        <p className="text-lg">暂无消息</p>
        <p className="text-sm mt-2">收到短信后会自动显示在这里</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {messages.map((msg) => (
        <MessageCard key={msg.id} message={msg} />
      ))}
    </div>
  );
}
