import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { PainPoints } from './components/sections/PainPoints';
import { AISolutions } from './components/sections/AISolutions';
import { IndustrySpecific } from './components/sections/IndustrySpecific';
import { HowItWorks } from './components/sections/HowItWorks';
import { FAQ } from './components/sections/FAQ';
import { Pricing } from "./components/sections/Pricing";
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { PageTransition } from "./components/ui/PageTransition";
import { AnimatedSection } from "./components/ui/AnimatedSection";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { BackToTop } from "./components/ui/BackToTop";

function App() {
  return (
    <PageTransition>
      <ScrollProgress />
      <BackToTop />
      <Layout>
        <AnimatedSection delay={0.1}>
          <Hero />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <PainPoints />
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <AISolutions />
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <IndustrySpecific />
        </AnimatedSection>
        
        <AnimatedSection delay={0.5}>
          <HowItWorks />
        </AnimatedSection>
        
        <AnimatedSection delay={0.6}>
          <FAQ />
        </AnimatedSection>
        
        <AnimatedSection delay={0.7}>
          <Pricing />
        </AnimatedSection>
        
        <AnimatedSection delay={0.8}>
          <About />
        </AnimatedSection>
        
        <AnimatedSection delay={0.9}>
          <Contact />
        </AnimatedSection>
      </Layout>
    </PageTransition>
  );
}

export default App;