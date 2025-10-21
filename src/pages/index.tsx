import {
  Navbar,
  Hero,
  Features,
  Features2,
  Partners,
  SocialGallery,
  CTABanner,
  ContactForm,
  SiteFooter,
  AffiliateBanner,
} from "../lib/imports";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <AffiliateBanner />
        <Features />
        <Features2 />
        <Partners />
        <SocialGallery />
        <CTABanner />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
