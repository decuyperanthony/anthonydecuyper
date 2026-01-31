import { Footer, Header, PageContainer } from "@/components/layout";
import { ContactCard, PageTitle } from "@/components/sections";

export const metadata = {
  title: "Contact",
  description: "Get in touch",
};

const ContactPage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <PageContainer>
        <PageTitle titleKey="contact" descriptionKey="contact" />
        <div className="max-w-md">
          <ContactCard />
        </div>
      </PageContainer>
    </main>
    <Footer />
  </div>
);

export default ContactPage;
