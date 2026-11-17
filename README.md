# SupaMenu Mobile Application

SupaMenu is a food-ordering mobile app. Customers can browse restaurants and their menus, add items to a cart, check out, and track their orders and notifications.

It is built with **Expo (SDK 58)**, **React Native 0.88**, **React 19**, **Expo Router** (file-based routing), **NativeWind v4** (Tailwind CSS for React Native) and **AsyncStorage** for on-device data. It runs fully offline, with no backend.

## Features

- Landing screen with a **Get Started** button
- Authentication: **Login** and **Register** (full name, phone, email, password)
- Bottom tabs:
  - **Home**: featured restaurants and products
  - **Notifications**: sample notifications
  - **Restaurants**: list of restaurants
  - **Orders**: order history
  - **Cart**: items selected for ordering
- **Restaurant details** (`/restaurant/[id]`) with its menu
- **Checkout** with an order-success screen
- **Light and dark mode:** the round button next to the search bar on **Home** cycles ☀️ Light → 🌙 Dark → 📱 Phone setting. Light (white and orange) is the default, and the choice is saved on the device. See `src/contexts/ThemeProvider.tsx`.
- Auth token is stored with AsyncStorage, and unauthenticated users are redirected to `/login`

## Project structure

```
supamenu-main/
└── mobile-app/
    ├── app.json               # Expo config
    ├── package.json           # scripts & dependencies
    ├── pnpm-lock.yaml         # lockfile (use pnpm)
    ├── tailwind.config.js     # NativeWind / Tailwind theme
    └── src/
        ├── app/               # screens (Expo Router)
        │   ├── index.tsx      # landing page
        │   ├── (auth)/        # login, register
        │   ├── (tabs)/        # home, notifications, restaurants, orders, cart
        │   ├── restaurant/[id].tsx
        │   └── checkout/
        ├── assets/            # fonts, images, mock data (data.ts)
        ├── components/        # core, in_screens, icons, navigation, shared
        ├── constants/         # colors
        ├── contexts/          # AuthProvider (token / user state)
        ├── hooks/             # useStorage, useColorScheme, useThemeColor
        ├── services/          # localAuth.ts (on-device register/login)
        └── utils/             # cn.ts
```

## Prerequisites

- [Node.js](https://nodejs.org/) **22.13 or later** (required by Expo SDK 58; use the current LTS)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`). The repo ships a `pnpm-lock.yaml` and an `.npmrc` with `node-linker=hoisted`.
- At least one of the following:
  - The latest **Expo Go** app (SDK 58) from the Play Store / App Store
  - An Android emulator (Android Studio)
  - An iOS simulator (macOS with Xcode)

## Getting started

```bash
# 1. Go to the app folder
cd mobile-app

# 2. Install dependencies
pnpm install

# 3. Start the Expo dev server
pnpm start
```

When the dev server is running, a QR code appears in the terminal. From there:

- **Phone:** scan the QR code with Expo Go on Android, or with the Camera app on iOS. The phone and the computer must be on the same Wi-Fi network. If they can't connect, run `pnpm start --tunnel`.
- **Android emulator:** press `a`, or run `pnpm android`.
- **iOS simulator:** press `i`, or run `pnpm ios` (macOS only).
- **Web:** press `w`, or run `pnpm web`.

Press `r` to reload the app, and `Ctrl+C` to stop the server.

### Available scripts

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `pnpm start`         | Start the Expo dev server                |
| `pnpm android`       | Start and open on an Android device/emulator |
| `pnpm ios`           | Start and open on an iOS simulator       |
| `pnpm web`           | Start and open in the browser            |
| `pnpm test`          | Run Jest tests in watch mode             |
| `pnpm lint`          | Run Expo lint                            |

## Offline / mobile-only mode

The app has **no backend**. Everything runs on the device:

- **Accounts:** **Register** saves the account on the device with AsyncStorage, and **Login** checks against those saved accounts. The code is in `src/services/localAuth.ts`. This is for demo use only: passwords are stored unhashed, and accounts exist only on that device or browser.
- **Session:** the login token and user are saved with AsyncStorage, so you stay signed in after restarting the app.
- **Content:** restaurants, products and notifications come from `src/assets/data.ts`. Edit that file to change what the app shows.

To try it: open the app, tap **Get Started → Sign up**, create an account (password of 6+ characters, phone number of 10+ digits), then sign in with it.

## Troubleshooting

- **"Invalid email or password":** accounts are saved per device. Register first on the same device or browser where you're signing in.
- **Metro error about a missing file in `node_modules`:** stop the server and run `pnpm start --clear`.
- **Expo Go says the project is incompatible:** update Expo Go from the store. This project targets SDK 58.
- **The phone cannot connect (`Failed to download remote update`):** the phone and PC must be on the same Wi-Fi, the Wi-Fi must be set to **Private** in Windows, and Expo must advertise your LAN IP: run `$env:REACT_NATIVE_PACKAGER_HOSTNAME="<your-PC-IP>"` before `pnpm start`. Running `pnpm start --tunnel` is an alternative.
- **Stale cache or strange bundling errors:** run `pnpm start --clear`.
- **You use npm instead of pnpm:** `npm install` works too, but npm prints a warning about the unknown `node-linker` setting in `.npmrc`. pnpm is recommended so you get the locked dependency versions.
