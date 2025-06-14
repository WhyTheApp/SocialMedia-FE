import toast from "react-hot-toast";
import api from "./Requests.service";
import {Dispatch, SetStateAction} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

type AuthenticationProps = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  username?: string;
  email?: string;
  userId?: string;
  code?: string;
  password?: string;
  keppLoggedIn?: boolean;
  router: AppRouterInstance;
};

export const AuthWithGoogle = async () => {
  toast.error("Not yet available");
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

  setIsLoading(true);

  const url = "authentication/register";

  const data = {
    email: email,
    username: username,
    password: password,
  };

  try {
    const response = await api.post(url, data);
    if (response.status === 200 || response.status === 201) {
      toast.success("Account created! Logging you in...");
      router.push("/verify-email");
    }
  } catch {}

  setIsLoading(false);
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
