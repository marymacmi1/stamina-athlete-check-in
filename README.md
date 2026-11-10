# Stamina Athlete Check-in

Independent product concept: a React + TypeScript athlete wellbeing feature for endurance athletes. **All demo athlete and wearable data is fictional.**

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL Vite prints (normally http://localhost:5173).

## Test and build

```bash
npm test
npm run build
npm run preview
```

## Features — all four remaining steps

1. **Persistence:** check-ins are saved to browser `localStorage` and restored after refresh. Saving another check-in on the same date replaces the earlier one. The Connections page includes a reset control.
2. **Personalised insights:** transparent rules compare today's self-reported energy and soreness against recent personal baselines (up to 14 check-ins), and mock sleep duration against recent sleep data. Rules require sufficient history before identifying deviations. Insights explain the evidence and give conservative, non-medical suggestions.
3. **Interactive scenarios:** select Poor recovery, Feeling strong or Cycle context. Scenarios replace the current demo dataset, including check-ins, illustrative wearable metrics and workouts. Switching scenarios also saves the selected dataset locally.
4. **Polish, tests and documentation:** responsive desktop/mobile interface, history, seven-day energy chart, unit tests and deployment instructions.

## Structure

- `src/types.ts`: typed data model
- `src/data.ts`: fictional demo data and scenario generator
- `src/storage.ts`: persistence and upsert logic
- `src/insights.ts`: explainable insight rules and baselines
- `src/insights.test.ts`: automated logic tests
- `src/App.tsx`: complete responsive UI
- `src/styles.css`: styles

## Limitations and privacy

- Garmin and WHOOP are **not connected**. Their metrics are fictional illustrative data.
- Cycle context is optional; no cycle phase or medical inference is made.
- Data is stored **only in this browser**, with no backend, account or cloud sync.
- No real training plan adjustments are made; suggestions are advisory only.
- Health-related data requires proper legal/privacy review before production use.
- Production should use a deliberate athlete-local timezone strategy and explicit data deletion/export controls.
- This prototype is not medical advice and its rules are not clinically validated.

## Deploy

Import the project into Vercel or Netlify. Use `npm run build` as the build command and `dist` as the output directory. No environment variables are required.
