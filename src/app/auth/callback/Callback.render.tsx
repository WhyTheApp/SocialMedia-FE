import { useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/Requests.service";
import PageContainer from "@/components/page-container/PageContainer.style";
import { PageHeader } from "@/components/page-header";
import { BasicText } from "./Callback.style";

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    const verifier = sessionStorage.getItem("pkce_verifier");
    const redirectUri = window.location.origin + "/auth/callback";

    if (code && verifier) {
      const loginWithGoogle = async () => {
        try {
          const response = await api.post("authentication/google-login", {
            code,
            verifier,
            redirectUri,
          });

          if (response.status === 200 || response.status === 201) {
            router.push("/home");
          } else {
            router.push("/login");
          }
        } catch (error) {
          console.error("Google login error:", error);
          router.push("/login");
        }
      };

      loginWithGoogle();
    }
  }, []);

  return (
    <PageContainer>
      <PageHeader>Oauth2</PageHeader>
      <BasicText>We are logging you in...</BasicText>
    </PageContainer>
  );
};

export default Callback;
