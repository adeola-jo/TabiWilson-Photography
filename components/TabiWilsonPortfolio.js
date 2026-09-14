import Image from "next/image";
import { ArrowRight, ArrowUpRight, ArrowUp, Instagram } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import PhotoGallery from "@/components/PhotoGallery";
import { assetPath, instagramHandle, instagramUrl } from "@/lib/portfolio";

function InstagramLink({ children, className }) {
  return <a className={className} href={instagramUrl} target="_blank" rel="noopener noreferrer">{children}<span className="sr-only"> (opens in a new tab)</span></a>;
}

export default function TabiWilsonPortfolio() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="hero container" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Photography / Visual Stories</p>
            <h1 id="hero-title">A feeling. A moment. <em>A story.</em></h1>
            <p className="hero-description">Documenting the quiet spaces and defining moments with an honest, editorial approach to visual storytelling.</p>
            <a href="#work" className="text-link">View the work <ArrowRight size={19} aria-hidden="true" /></a>
          </div>
          <div className="hero-images">
            <div className="hero-main-image"><picture><source media="(max-width: 767px)" srcSet={assetPath("/images/hero-small.webp")} /><Image src={assetPath("/images/hero.webp")} alt="Vintage camera and printed photographs on a map — sample image" width={1600} height={1200} loading="eager" fetchPriority="high" sizes="(max-width: 767px) 100vw, 80vw" /></picture></div>
            <div className="hero-detail-image"><Image src={assetPath("/images/hero-portrait.webp")} alt="Portrait in soft light — sample image" width={640} height={850} sizes="30vw" /></div>
          </div>
          <p className="sample-note">Sample imagery for layout preview. Photographs shown do not represent client commissions.</p>
        </section>
        <PhotoGallery />
        <section className="section approach-section" id="approach" aria-labelledby="approach-title">
          <div className="container approach-grid"><h2 className="eyebrow" id="approach-title">Our Approach</h2><p>Natural interactions. Subtle light. The quiet spaces between defining moments. Photography that makes room for the unexpected, and feels entirely honest.</p></div>
        </section>
        <section className="section commissions-section" id="commissions" aria-labelledby="commissions-title">
          <div className="container"><h2 className="eyebrow commissions-title" id="commissions-title">Commissions</h2><div className="commission-list">
            {["Portraits", "Weddings and events", "Brand stories"].map((service, index) => <a className="commission-row" href="#contact" key={service} aria-label={`Enquire about ${service.toLowerCase()}`}><span className="commission-number">0{index + 1}</span><h3>{service}</h3><span className="commission-action">Enquire <ArrowUpRight size={20} aria-hidden="true" /></span></a>)}
          </div></div>
        </section>
        <section className="instagram-section" aria-labelledby="instagram-title">
          <div className="container"><Instagram size={48} strokeWidth={1} aria-hidden="true" /><h2 id="instagram-title">More stories on Instagram</h2><InstagramLink className="instagram-handle">{instagramHandle}<ArrowUpRight size={20} aria-hidden="true" /></InstagramLink></div>
        </section>
        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container"><p className="eyebrow">Start a conversation</p><h2 id="contact-title">Let us make something <em>worth keeping.</em></h2><p className="contact-copy">Have a person, a place, or a story in mind? Share your idea, location, and preferred dates on Instagram.</p><InstagramLink className="button button-solid">Message on Instagram <ArrowUpRight size={19} aria-hidden="true" /></InstagramLink></div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-content"><p>© {new Date().getFullYear()} TabiWilson Photography</p><div><InstagramLink>Instagram</InstagramLink><a href="#home">Back to top <ArrowUp size={16} aria-hidden="true" /></a></div></div></footer>
    </>
  );
}
