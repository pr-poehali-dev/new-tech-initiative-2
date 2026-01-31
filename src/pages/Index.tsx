import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FeaturesSection } from "@/components/features-section"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Index() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero3D />
        <section id="technology">
          <FeaturesSection />
        </section>
        <ProductsSection />
        <AboutSection />
        <TestimonialsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  )
}