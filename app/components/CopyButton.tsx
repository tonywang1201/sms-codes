"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer
        bg-blue-500 text-white hover:bg-blue-600
        dark:bg-blue-600 dark:hover:bg-blue-700"
    >
      {copied ? "已复制" : "复制"}
    </button>
  );
}
