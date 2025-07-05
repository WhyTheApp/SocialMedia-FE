import toast from "react-hot-toast";
import api from "./Requests.service";
import { Dispatch, SetStateAction } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { generateCodeChallenge, generateCodeVerifier } from "./PKCE.helper";

type AuthenticationProps = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  username?: string;
  name?: string;
  email?: string;
  userId?: string;
  code?: string;
  password?: string;
  keppLoggedIn?: boolean;
  router: AppRouterInstance;
};

interface ErrorResponseData {
  errors?: Record<string, string[]>;
}

interface ErrorResponse {
  data?: ErrorResponseData;
}

interface ErrorWithResponse {
  response?: ErrorResponse;
}

export const AuthWithGoogle = async () => {
  const verifier = generateCodeVerifier();
  const challenge = await generateCodeChallenge(verifier);

  sessionStorage.setItem("pkce_verifier", verifier);

  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    redirect_uri: "http://localhost:3000/auth/callback",
    response_type: "code",
    scope: "openid profile email",
    code_challenge_method: "S256",
    code_challenge: challenge,
  });

  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
};

export const AuthWithApple = async () => {
  toast.error("Not yet available");
};

export const localLogin = async ({
  isLoading,
  setIsLoading,
  username,
  password,
  keppLoggedIn,
  router,
}: AuthenticationProps) => {
  if (isLoading) return;

  setIsLoading(true);

  const url = "authentication/login";

  const data = {
    emailOrUsername: username,
    password: password,
    keepMeLoggedIn: keppLoggedIn,
  };

  try {
    const response = await api.post(url, data);
    if (response.status === 200 || response.status === 201) {
      toast.success("Logging you in...");
      router.push("/home");
    }
  } catch {
    toast.error("Incorrect username/email or password");
  }

  setIsLoading(false);
};

export const localRegister = async ({
  isLoading,
  setIsLoading,
  username,
  name,
  email,
  password,
  router,
}: AuthenticationProps) => {
  if (isLoading) return;

  if (!isValidEmail(email!)) {
    toast.error("Invalid email format!");
    return;
  }

  if (!isValidPassword(password!)) {
    toast.error(
      "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
    );
    return;
  }

  if (!isValidUsername(username!)) {
    toast.error(
      "Username must start with a letter, contain only letters, numbers, underscores and be between 3 and 30 characters.."
    );
    return;
  }

  setIsLoading(true);

  const url = "authentication/register";

  const data = {
    email: email,
    username: username,
    name: name,
    password: password,
  };

  try {
    const response = await api.post(url, data);
    if (response.status === 200 || response.status === 201) {
      toast.success("Account created! Logging you in...");
      router.push("/verify-email");
    }
  } catch (error: unknown) {
    if (isErrorWithResponse(error)) {
      const response = error.response;
      if (response && isErrorResponseData(response.data)) {
        const errors = response.data.errors;

        if (errors?.Username?.length) {
          toast.error(errors.Username[0]);
          return;
        }

        if (errors?.Email?.length) {
          toast.error("Email is invalid or already used.");
          return;
        }
      }
    }

    toast.error("Please try again.");
  }
};

export const verifyEmail = async ({
  userId,
  code,
  isLoading,
  setIsLoading,
  router,
}: AuthenticationProps) => {
  if (isLoading) return;

  setIsLoading(true);

  const url = "authentication/verify-email";

  const data = {
    userId: userId,
    Code: code,
  };

  try {
    const response = await api.post(url, data);
    if (response.status === 200 || response.status === 201) {
      toast.success("Great! Verified your account");
      router.push("/home");
    }
  } catch {
    toast.error("Not really, try again");
  }

  setIsLoading(false);
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password: string) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(password);
}

function isValidUsername(username: string) {
  return /^[a-zA-Z][a-zA-Z0-9_]{2,29}$/.test(username);
}

function isErrorWithResponse(error: unknown): error is ErrorWithResponse {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error as Record<string, unknown>).response === "object" &&
    (error as Record<string, unknown>).response !== null
  );
}

function isErrorResponseData(data: unknown): data is ErrorResponseData {
  if (typeof data !== "object" || data === null) return false;

  if ("errors" in data) {
    const errors = (data as { errors: unknown }).errors;
    return typeof errors === "object" && errors !== null;
  }

  return true;
}
