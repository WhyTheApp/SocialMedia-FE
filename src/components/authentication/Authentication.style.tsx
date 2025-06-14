import styles from "./Authentication.module.css";
import {Dispatch, ReactNode, SetStateAction, useState} from "react";
import LogoSVG from "../../../public/whylogo.svg";
import EyeOn from "../../../public/eye-on.svg";
import EyeOff from "../../../public/eye-off.svg";
import {
  AGREE_TO_GDPR_1_TEXT,
  AGREE_TO_GDPR_2_TEXT,
  AGREE_TO_TC_TEXT,
  FORGOT_PASSWORD_TEXT,
  GDPR_TEXT,
  LOGIN_DIVIDER_TEXT,
  OAUTH_METHODS,
  REMEMBER_ME_TEXT,
  TC_TEXT,
} from "@/CONSTANTS/login.constants";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface TextProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

interface ConsentsProps {
  navigateToTerms: () => void;
  navigateToPrivacy: () => void;
  consentToTC: boolean;
  setConsentToTC: Dispatch<SetStateAction<boolean>>;
  consentToPrivacy: boolean;
  setConsentToPrivacy: Dispatch<SetStateAction<boolean>>;
}

export function LoginContainer({ children }: Props) {
  return <div className={styles.loginContainer}>{children}</div>;
}

export function LoginTitle({ children }: Props) {
  return <p className={styles.loginTitle}>{children}</p>;
}

export function StyledLogo() {
  return <LogoSVG className={styles.styledLogo} />;
}

export function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <div className={styles.inputWrapper}>
      <input className={styles.customInput} {...props} />
    </div>
  );
}

export function CustomPasswordInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.customInput}
        type={visible ? "text" : "password"}
        {...props}
      />
      <span
        className={styles.togglePassword}
        onClick={() => setVisible(!visible)}
      >
        {visible ? <EyeOn /> : <EyeOff />}
      </span>
    </div>
  );
}

export function StyledCheckbox(
  props?: React.InputHTMLAttributes<HTMLInputElement>
) {
  return <input className={styles.styledCheckbox} type="checkbox" {...props} />;
}

export function BottomText({ children }: TextProps) {
  return <p className={styles.bottomText}>{children}</p>;
}

export function ColoredLink({ children, onClick }: TextProps) {
  return (
    <a className={styles.coloredLink} onClick={onClick}>
      {children}
    </a>
  );
}

export function RememberMe(
  props?: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <div className={styles.rememberMeContainer}>
      <div className={styles.checkboxContainer}>
        <StyledCheckbox {...props} />
        <BottomText>{REMEMBER_ME_TEXT}</BottomText>
      </div>
      <BottomText>
        <ColoredLink
          onClick={() => {
            toast.error(
              "Not yet implemented. Stay tuned for the full rollout!"
            );
          }}
        >
          {FORGOT_PASSWORD_TEXT}
        </ColoredLink>
      </BottomText>
    </div>
  );
}

export function GreyText({ children }: TextProps) {
  return <p className={styles.dividerText}>{children}</p>;
}

export function LoginDivider() {
  return (
    <div className={styles.dividerContainer}>
      <hr className={styles.dividerLine} />
      <GreyText>{LOGIN_DIVIDER_TEXT}</GreyText>
      <hr className={styles.dividerLine} />
    </div>
  );
}

export function OauthSection() {
  return (
      <div className={styles.oauthSectionContainer}>
          {OAUTH_METHODS.map((item, index) => (
              <button
                  className={styles.oauthButton}
                  key={item.name}
                  id={`oauth-btn-${index}`}
                  onClick={item.action}
              >
                  <img src={item.icon} alt={`${item.name} Logo`}/>
                  {item.name}
              </button>
          ))}
      </div>
  );
}

export function Consents({
                             navigateToTerms,
                             navigateToPrivacy,
                             consentToTC,
                             setConsentToTC,
                             consentToPrivacy,
                             setConsentToPrivacy,
                         }: ConsentsProps) {
    return (
        <div className={styles.consentsContainer}>
            <div className={styles.checkboxContainer}>
                <StyledCheckbox
                    checked={consentToTC}
                    onChange={(e) => {
                        setConsentToTC(e.target.checked);
          }}
        />
        <BottomText>
          {AGREE_TO_TC_TEXT}
          <ColoredLink onClick={navigateToTerms}>{TC_TEXT}</ColoredLink>
        </BottomText>
      </div>
      <div className={styles.checkboxContainer}>
        <StyledCheckbox
          checked={consentToPrivacy}
          onChange={(e) => {
            setConsentToPrivacy(e.target.checked);
          }}
        />
        <BottomText>
          {AGREE_TO_GDPR_1_TEXT}
          <ColoredLink onClick={navigateToPrivacy}>{GDPR_TEXT}</ColoredLink>
          {AGREE_TO_GDPR_2_TEXT}
        </BottomText>
      </div>
    </div>
  );
}

export function StyledToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          backgroundColor: "#0a0c16",
          borderColor: "#660033",
          borderStyle: "solid",
          borderWidth: "2px",
          color: "#FFFFFF",
          padding: "20px",
          fontFamily: '"Outfit", sans-serif',
          fontWeight: 500,
        },
      }}
    />
  );
}
