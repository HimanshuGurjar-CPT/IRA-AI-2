<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=1aff6e&height=200&section=header&text=IRIS-X&fontSize=80&fontColor=ffffff&fontAlignY=38&desc=Agentic%20Mobile%20OS%20for%20Android&descAlignY=60&descSize=18&descColor=a0ffc0" width="100%"/>

<br/>

[![Platform](https://img.shields.io/badge/Platform-Android-1aff6e?style=for-the-badge&logo=android&logoColor=white&labelColor=050a05)](https://android.com)
[![Built With](https://img.shields.io/badge/Built%20With-React%20Native%20%2B%20Expo-1aff6e?style=for-the-badge&logo=expo&logoColor=white&labelColor=050a05)](https://expo.dev)
[![AI Engine](https://img.shields.io/badge/AI%20Engine-Gemini%202.5%20Flash-1aff6e?style=for-the-badge&logo=google&logoColor=white&labelColor=050a05)](https://deepmind.google/technologies/gemini/)
[![License](https://img.shields.io/badge/License-Proprietary-1aff6e?style=for-the-badge&logoColor=white&labelColor=050a05)](./LICENSE)
[![Status](https://img.shields.io/badge/Status-In%20Development-1aff6e?style=for-the-badge&labelColor=050a05)](https://github.com/201Harsh/IRIS-X)

<br/>

> **IRIS-X is not an app. It is a neural extension of your Android device.**
>
> Speak. It executes. No taps. No menus. Just intent.

<br/>

---

</div>

## What is IRIS-X?

IRIS-X is the mobile evolution of the [IRIS AI Desktop OS](https://github.com/201Harsh/IRIS-AI). Where IRIS gave you an agentic layer over Windows, IRIS-X does the same for Android — but goes further. It physically controls your device, reads your notifications, runs background automations while the screen is off, and communicates through a zero-latency full-duplex voice interface powered by Gemini Live.

It is a closed-source, subscription-based product built for people who want their phone to work **for** them — not the other way around.

```
User:  "Hey IRIS, I'm heading to the office."

IRIS:  Silencing phone... ✓
       Opening Notion... ✓
       Pulling your 9am calendar brief... ✓
       Done. You have 3 meetings today. First one in 22 minutes.
```

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT — React Native (Expo)          │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────────┐ │
│  │  Voice Core  │ │  OS Control  │ │ Background Tasks │ │
│  │  Wake word   │ │  Intents &   │ │  Cron jobs &     │ │
│  │  STT / TTS   │ │  A11y APIs   │ │  Geofence watch  │ │
│  └──────────────┘ └──────────────┘ └──────────────────┘ │
└───────────────────────┬─────────────────────────────────┘
                        │ HTTPS + JWT
┌───────────────────────▼─────────────────────────────────┐
│              MIDDLEWARE — Express.js on Vercel            │
│   Auth Validator → Bandwidth Guard → API Key Injector    │
└───────────┬──────────────────────────┬───────────────────┘
            │                          │
┌───────────▼──────────┐  ┌────────────▼────────────────┐
│   NEURAL ENGINE       │  │   DATABASE — Supabase        │
│   Gemini 2.5 Flash    │  │   users + subscriptions      │
│   Gemini Live API     │  │   daily_usage (quota)        │
└───────────────────────┘  └─────────────────────────────┘

         ┌─────────────────────────────────────┐
         │      EDGE — On-Device (Zero Cost)    │
         │  Native TTS · Wake word · Geofence  │
         └─────────────────────────────────────┘
```

---

## Core Features

### 🎙️ Zero-Latency Neural Voice
Powered by the **Gemini Live WebRTC API** — real-time, full-duplex voice that lets you interrupt mid-sentence. No loading spinners. No waiting. The conversation flows like talking to a person.

- Always-on wake word detection (`Hey IRIS`) running fully on-device
- Custom voice shortcuts mapped to full action sequences
- Whisper mode — detects quiet speech and adjusts TTS volume automatically
- Native TTS for all responses (zero Gemini audio cost)

---

### 📱 Deep Android Control
IRIS-X has full dominion over the Android ecosystem via Intents and Accessibility Services.

| Capability | What it does |
|---|---|
| App lifecycle | Open, close, switch any app by voice |
| Notification commander | Read, reply, dismiss notifications hands-free |
| Hardware control | Brightness, volume, flashlight, Wi-Fi, Bluetooth, DND |
| App locker | Lock any app behind biometric or PIN via voice |
| Clipboard intelligence | Monitors clipboard, auto-suggests actions |

---

### ⚡ Automation Flows
A visual no-code trigger-action builder. Build sequences like:

```
IF  battery < 20%
→   enable low power mode
→   send WhatsApp to Mom: "my phone is dying"
```

```
IF  I arrive at [office location]
→   silence phone
→   open Notion
→   read today's calendar brief aloud
```

Flows run entirely in the background. You build them once, IRIS-X runs them forever.

---

### 🌅 Morning Neural Briefing
Every morning at your chosen time, IRIS-X auto-runs a full briefing — spoken aloud:

- Today's weather
- Calendar events for the day
- Unread priority notifications
- Your saved notes and tasks

Built using cheap text API calls + native TTS. Cost to you: near zero.

---

### 🔐 Security Vault
- **Face App Locker** — lock any app behind facial recognition
- **Intruder Selfie** — wrong PIN triggers a silent front-camera photo + alert to you
- **Privacy Screen** — detects shoulder surfers via front camera and blurs the display

---

### 📍 Context-Aware Intelligence
- **GPS Geofencing** — trigger automation flows based on location zones
- **Calendar Consciousness** — reads your calendar and auto-preps context before meetings
- **Smart Reminders** — context-based, not just time-based: *"remind me when I open WhatsApp"*

---

## Tech Stack

| Layer | Technology |
|---|---|
| Mobile client | React Native (Expo) + NativeWind |
| OS control | Android Intents + Accessibility Services |
| Background jobs | `expo-task-manager` + `expo-background-fetch` |
| Voice (STT) | `react-native-voice` |
| Voice (TTS) | Native Android TTS engine (free) |
| Wake word | On-device detection |
| Vision | `expo-camera` + Gemini multimodal |
| Location | `expo-location` + geofencing |
| Security middleware | Express.js on Vercel |
| Neural engine | Google Gemini 2.5 Flash + Live API |
| Database & Auth | Supabase (PostgreSQL) |
| Payments | Stripe + UPI gateway |

---

## Monetization — Neural Bandwidth System

IRIS-X is a **subscription-first** product designed for profitability from day one.

```
₹399 – ₹499 / month
```

To protect margins against API costs, every user receives a daily **Neural Bandwidth** allocation — a cap on voice minutes and command volume per day. The Vercel middleware enforces this on every request before the Gemini key is injected.

**Why this works:**
- Average user won't hit the cap in normal daily usage
- Power users who want more become upsell targets
- Server costs stay near zero using the edge architecture below

**Cost-saving edge architecture:**
- Background briefings fetch cheap text from Gemini (`$4.50 / 1M tokens`)
- Audio is rendered locally using the phone's native TTS engine (completely free)
- Gemini Live audio output (`$0.018/min`) is used only for real-time conversation

---

## Subscription Tiers

| Feature | Free Preview | IRIS-X Pro (₹399/mo) |
|---|---|---|
| Basic voice commands | ✓ | ✓ |
| Manual app control | ✓ | ✓ |
| 10 commands/day | ✓ | — |
| Full Neural Bandwidth | — | ✓ |
| Wake word always-on | — | ✓ |
| Background automation | — | ✓ |
| Automation flow builder | — | ✓ |
| Notification commander | — | ✓ |
| Morning briefing | — | ✓ |
| Intruder Selfie | — | ✓ |
| Geofence triggers | — | ✓ |
| Priority support | — | ✓ |

---

## Security

IRIS-X is built around a zero-trust architecture. Your API keys are never stored on-device or exposed in the client bundle.

```
Client  →  sends JWT token + prompt text
           (no API keys ever leave the server)

Middleware  →  validates subscription
            →  checks daily quota
            →  injects Gemini key server-side
            →  forwards to Gemini

Gemini  →  returns response
        →  middleware strips key before forwarding
        →  client receives clean response
```

All authentication is handled via Supabase with Row Level Security enforced at the database layer.

---

## Roadmap

- [x] Core architecture designed
- [x] UI design system (dark neon green theme)
- [ ] Voice core — wake word + STT integration
- [ ] Gemini Live WebRTC streaming
- [ ] Middleware — auth + bandwidth guard on Vercel
- [ ] Supabase schema — users, subscriptions, daily_usage
- [ ] Android Intents — app control layer
- [ ] Accessibility Services — notification reader
- [ ] Automation flow builder UI
- [ ] Geofence trigger system
- [ ] Morning briefing background worker
- [ ] Security vault — face locker + intruder selfie
- [ ] Stripe + UPI payment integration
- [ ] Beta launch (closed)
- [ ] Public launch on Play Store

---

## The IRIS Ecosystem

IRIS-X is part of a broader ecosystem:

| Product | Platform | Status |
|---|---|---|
| [IRIS AI](https://github.com/201Harsh/IRIS-AI) | Windows Desktop | ✅ Live — Open Source |
| IRIS-X | Android Mobile | 🔨 In Development |
| IRIS Cloud | Web | 🔮 Planned |

---

## About the Architect

**Harsh Pandey** — AI Systems Engineer

Building agentic OS layers that turn intent into real-world execution. IRIS Desktop crossed 5,000 Instagram followers and 70 GitHub stars in 3 months. IRIS-X is the next chapter.

[![Instagram](https://img.shields.io/badge/@201Harshs-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/201Harshs)
[![GitHub](https://img.shields.io/badge/@201Harsh-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/201Harsh)

---

## License

IRIS-X is proprietary software. All rights reserved.

The source code is not open for distribution, modification, or reuse without explicit written permission from the author.

> IRIS-X is not an app. It is a neural extension of your Android device.
>
> **System initializing.**

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=1aff6e&height=120&section=footer&fontColor=ffffff" width="100%"/>

*Made with intent by Harsh Pandey*
</div>