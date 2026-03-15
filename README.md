# Cafe Dafino`s (React + Tailwind)

A motion-heavy, responsive Cafe Dafino`s website built with **React.js + Tailwind CSS**.

## Stack

- React 18
- Vite 6
- Tailwind CSS 3
- Framer Motion
- React Router
- Sonner

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build

## Project Structure

- `src/app` - App bootstrap and router
- `src/features` - Page features (`home`, `menu`, `gallery`, `contact`, `auth`)
- `src/components/layout` - Shared layout (`Header`, `Footer`)
- `src/components/ui` - Reusable UI primitives
- `src/services` - Data service layer
- `src/styles` - Global and font styles

## Auth API Configuration

Auth forms on `/login` call backend endpoints from Vite env variables.
Create a local `.env` file (or copy `.env.example`) and set:

- `VITE_AUTH_API_BASE_URL` - Base URL such as `https://api.example.com` (leave empty for same origin)
- `VITE_AUTH_LOGIN_PATH` - Login endpoint path (default: `/api/auth/login`)
- `VITE_AUTH_REGISTER_PATH` - Register endpoint path (default: `/api/auth/register`)
- `VITE_AUTH_FORGOT_PATH` - Forgot password endpoint path (default: `/api/auth/forgot-password`)

Requests are sent as `POST` JSON with `credentials: include`.

## Notes

- Active app is JavaScript-only React.
