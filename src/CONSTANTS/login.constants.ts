import { AuthWithApple, AuthWithGoogle } from "@/services/Authentication.service";

export const REMEMBER_ME_TEXT = "Remember me";
export const FORGOT_PASSWORD_TEXT = "Forgot Passowrd?";
export const LOGIN_BUTTON_TEXT = "Login";
export const REGISTER_BUTTON_TEXT = "Register";
export const VERIFY_MAIL_TEXT = "Verify";
export const LOGIN_DIVIDER_TEXT = "Or login with";
export const REGISTER_DIVIDER_TEXT = "Or register with";
export const NO_ACCOUNT_TEXT = "Don't have an account? ";
export const VERIFY_LIMIT_TEXT = "Accounts that are not verified in a timespan of 30 minutes will be deleted";
export const EXISTING_ACCOUNT_TEXT = "Already have an account? ";
export const REGISTER_TEXT = "Get Started";
export const LOGIN_TEXT = "Login";

export const AGREE_TO_TC_TEXT = "I have read and agree to the ";
export const AGREE_TO_GDPR_1_TEXT = "I have read and agree to the ";
export const AGREE_TO_GDPR_2_TEXT =
  ", and I consent to the processing of my personal data as described.";

export const GDPR_TEXT = "Privacy Policy";
export const TC_TEXT = "Terms and Conditions";

type OAuthMethod = {
  name: string;
  icon: string;
  action: () => void;
};

export const OAUTH_METHODS: OAuthMethod[] = [
  { name: "Google", icon: "/google.svg", action: AuthWithGoogle },
  { name: "Apple", icon: "/apple.svg", action: AuthWithApple },
];
