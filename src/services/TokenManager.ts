import { jwtDecode } from "jwt-decode";

let inMemoryToken: string | null = null;
let inMemoryDecoded: JwtPayload | null = null;

const TOKEN_KEY = "jwt_token";

function isBrowser() {
  return (
    typeof window !== "undefined" && typeof window.localStorage !== "undefined"
  );
}

export function getToken(): string | null {
  if (inMemoryToken) return inMemoryToken;

  if (isBrowser()) {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      inMemoryToken = token;
      try {
        inMemoryDecoded = jwtDecode<JwtPayload>(token);
      } catch {
        inMemoryDecoded = null;
      }
      return token;
    }
  }
  return null;
}

export function getDecodedToken(): JwtPayload | null {
  if (inMemoryDecoded) return inMemoryDecoded;

  const token = getToken();
  if (token) {
    try {
      inMemoryDecoded = jwtDecode<JwtPayload>(token);
      return inMemoryDecoded;
    } catch {
      inMemoryDecoded = null;
      return null;
    }
  }
  return null;
}

export function getUsername(): string | null {
  const decoded = getDecodedToken();
  return decoded && decoded.name ? decoded.name : null;
}

export function getUserId(): string | null {
  const decoded = getDecodedToken();
  return decoded && decoded.sub ? decoded.sub : null;
}

export function setToken(token: string | null) {
  inMemoryToken = token;
  if (token) {
    try {
      inMemoryDecoded = jwtDecode<JwtPayload>(token);
    } catch {
      inMemoryDecoded = null;
    }
  } else {
    inMemoryDecoded = null;
  }

  if (isBrowser()) {
    if (token) {
      window.localStorage.setItem(TOKEN_KEY, token);
    } else {
      window.localStorage.removeItem(TOKEN_KEY);
    }
  }
}

export function removeToken() {
  inMemoryToken = null;
  inMemoryDecoded = null;
  if (isBrowser()) {
    window.localStorage.removeItem(TOKEN_KEY);
  }
}

interface JwtPayload {
  sub: string; // User ID (from JwtRegisteredClaimNames.Sub)
  name: string; // Username
  role: string; // User role
  iss: string; // Issuer
  aud: string; // Audience
  exp: number; // Expiration time
  iat?: number ; // Issued at time
  [key: string]: string | number | undefined;
}
