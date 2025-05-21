import {
  CenterContainer,
  SidebarContainer,
  MainContainer,
  Container,
} from "./Home.style";
import Sidebar from "@/components/sidebar";
import Background from "@/components/background";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Container>
      <Background>
        <CenterContainer>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <MainContainer>{children}</MainContainer>
        </CenterContainer>
      </Background>
    </Container>
  );
};

export default HomeLayout;
