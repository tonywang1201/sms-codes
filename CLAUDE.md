# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SMS verification code dashboard — a Next.js app that receives SMS messages via API, extracts verification codes, and displays them in a real-time web interface. UI is in Chinese (zh-CN).

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run start` — Start production server

## Architecture

**Next.js App Router** with Vercel KV (Redis) for storage.

- `app/api/sms/route.ts` — POST (receive SMS, requires Bearer API_TOKEN) and GET (fetch messages, requires VIEW_TOKEN query param)
- `app/page.tsx` — Server component, validates VIEW_TOKEN before rendering
- `app/components/` — Client components: MessageList (polls GET /api/sms every 5s with visibility detection), MessageCard, CopyButton
- `lib/kv.ts` — Vercel KV wrapper (pushMessage, getMessages; max 100 messages)
- `lib/extract-code.ts` — Verification code extraction with priority: 6-digit → 4-digit → 8-digit → alphanumeric mixed
- `lib/types.ts` — SmsMessage interface

## Key Patterns

- **Auth**: Two tokens via env vars — `API_TOKEN` (POST endpoint, Bearer header) and `VIEW_TOKEN` (page access + GET endpoint, query param)
- **Polling**: Client polls every 5s, pauses when page hidden (visibility API)
- **Path alias**: `@/*` maps to project root
- **Styling**: Tailwind CSS 4, dark theme by default

## Environment Variables

Required in `.env.local`:
- `KV_REST_API_URL` — Vercel KV endpoint
- `KV_REST_API_TOKEN` — Vercel KV auth token
- `API_TOKEN` — Auth token for POST /api/sms
- `VIEW_TOKEN` — Auth token for viewing messages
