import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const Benefits = lazy(() => import('./components/Benefits'));
const Gallery = lazy(() => import('./components/Gallery'));
const Bonus = lazy(() => import('./components/Bonus'));
const OfferVSL = lazy(() => import('./components/OfferVSL'));
const Pricing = lazy(() => import('./components/Pricing'));
const SocialProof = lazy(() => import('./components/SocialProof'));
const FAQ = lazy(() => import('./components/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));

const LoadingFallback = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="text-white">Carregando...</div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-black-matte">
      <Header />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Benefits />
        <Gallery />
        <Bonus />
        <OfferVSL />
        <Pricing />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </Suspense>
    </div>
  );
}

export default App;
