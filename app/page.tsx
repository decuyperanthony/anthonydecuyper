import { Footer, Header, PageContainer } from "@/components/layout";
import { About, Hero, Skills } from "@/components/sections";

const HomePage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <PageContainer>
        <Hero />
        <About />
        <Skills />
      </PageContainer>
    </main>
    <Footer />
  </div>
);

export default HomePage;
