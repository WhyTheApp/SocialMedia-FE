import { CenterContainer, SidebarContainer, MainContainer } from "./Home.style";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar";
import { TabComponents, TabKey } from "@/CONSTANTS/navigation.constants";

const DEFAULT_TAB: TabKey = "waitlist";

const Home = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [tab, setTab] = useState<TabKey>(DEFAULT_TAB);

  const ActiveTab = TabComponents[tab];

  useEffect(() => {
    const pathParts = pathname?.split("/") || [];
    const lastSegment = pathParts[pathParts.length - 1];

    if (
      lastSegment &&
      (Object.keys(TabComponents) as TabKey[]).includes(lastSegment as TabKey)
    ) {
      setTab(lastSegment as TabKey);
    }
  }, []);

  useEffect(() => {
    const currentTabInUrl = pathname?.split("/").pop();
    if (tab !== currentTabInUrl) {
      router.push(`/home/${tab}`, { scroll: false });
    }
  }, [tab]);

  return (
    <CenterContainer>
      <SidebarContainer>
        <Sidebar setTab={setTab} />
      </SidebarContainer>
      <MainContainer>
        <ActiveTab setTab={setTab} />
      </MainContainer>
    </CenterContainer>
  );
};

export default Home;
