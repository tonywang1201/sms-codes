import { NextRequest, NextResponse } from "next/server";
import { pushMessage, getMessages } from "@/lib/kv";
import { extractCode } from "@/lib/extract-code";
import { SmsMessage } from "@/lib/types";

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");

  if (!token || token !== process.env.API_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { body, sender } = await request.json();

  if (!body || typeof body !== "string") {
    return NextResponse.json({ error: "Missing body" }, { status: 400 });
  }

  const id = `msg_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const message: SmsMessage = {
    id,
    body,
    sender: sender || "Unknown",
    code: extractCode(body),
    receivedAt: new Date().toISOString(),
  };

  await pushMessage(message);

  return NextResponse.json({ ok: true, id });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token || token !== process.env.VIEW_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const limit = Math.min(Number(searchParams.get("limit")) || 20, 100);
  const messages = await getMessages(limit);

  return NextResponse.json({ messages });
}
