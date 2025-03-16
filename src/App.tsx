import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { PainPoints } from './components/sections/PainPoints';
import { AISolutions } from './components/sections/AISolutions';
import { IndustrySpecific } from './components/sections/IndustrySpecific';
import { Features } from './components/sections/Features';
import { CTA } from './components/sections/CTA';

export default function App() {
  return (
    <Layout>
      <Hero />
      <PainPoints />
      <AISolutions />
      <IndustrySpecific />
      <Features />
      <CTA />
    </Layout>
  );
}