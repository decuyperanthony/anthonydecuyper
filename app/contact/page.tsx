import { Footer, Header, PageContainer } from "@/components/layout";
import { ContactCard } from "@/components/sections";

export const metadata = {
  title: "Contact | Anthony de Cuyper",
  description: "Get in touch with Anthony de Cuyper",
};

const ContactPage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <PageContainer>
        <div className="py-12">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact
          </h1>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
          <div className="max-w-md">
            <ContactCard />
          </div>
        </div>
      </PageContainer>
    </main>
    <Footer />
  </div>
);

export default ContactPage;
