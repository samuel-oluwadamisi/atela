import axios from "axios";

// ──────────────────────────────────────────────
// 1. The instance
// ──────────────────────────────────────────────
// Instead of calling axios.get("http://localhost:4000/API/...") everywhere,
// we create ONE configured instance and reuse it everywhere.
// If your backend URL ever changes, you change it in ONE place.

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ──────────────────────────────────────────────
// 2. Request interceptor — attach the token
// ──────────────────────────────────────────────
// This function runs on EVERY request made through `API`, right before
// it's sent. We read the token from localStorage and attach it as a
// Bearer header — so you never have to manually do this in every call.

API.interceptors.request.use((config) => {
  // localStorage only exists in the browser, not during server rendering.
  // This guard prevents a crash if this code ever runs server-side.
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// ──────────────────────────────────────────────
// 3. Response interceptor — handle 401s globally
// ──────────────────────────────────────────────
// This runs on every response. If the backend ever says "401 Unauthorized",
// it means the token is invalid or expired. Instead of writing
// "if 401, log out" in every single component that calls the API,
// we handle it ONCE, here.

API.interceptors.response.use(
  (response) => response, // success: just pass it through untouched
  (error) => {

    const isAuthEndpoint =
      error.config?.url?.includes("/auth/login") ||
      error.config?.url?.includes("/auth/signup") || 
      error.config?.url.includes("auth/confirm");
      
    if (error.response?.status === 401 && !isAuthEndpoint) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("access_token");
        // We redirect with a hard navigation (not router.push) because
        // this code runs outside React's render tree — there's no router
        // instance available here. window.location is the reliable option.
        window.location.href = "/login";
      }
    }
    // IMPORTANT: always re-throw the error. If we swallow it here,
    // React Query won't know the request failed.
    return Promise.reject(error);
  }
);