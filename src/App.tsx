import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { PainPoints } from './components/sections/PainPoints';
import { AISolutions } from './components/sections/AISolutions';
import { IndustrySpecific } from './components/sections/IndustrySpecific';
import { HowItWorks } from './components/sections/HowItWorks';
import { FAQ } from './components/sections/FAQ';
import { Pricing } from "./components/sections/Pricing";
import { About } from './components/sections/About';

export default function App() {
  return (
    <Layout>
      <Hero />
      <PainPoints />
      <AISolutions />
      <IndustrySpecific />
      <HowItWorks />
      <FAQ />
      <Pricing />
      <About />
    </Layout>
  );
}