import { PageLayout } from "@/components/layout";
import { ContactLinks } from "@/components/sections";

export const metadata = {
  title: "Contact",
  description: "Get in touch",
};

const ContactPage = () => (
  <PageLayout titleKey="contact" descriptionKey="contact">
    <div className="max-w-md">
      <ContactLinks />
    </div>
  </PageLayout>
);

export default ContactPage;
