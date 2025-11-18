import React from 'react';
import Hero from './components/Hero.jsx';
import WedsBanner from './components/WedsBanner.jsx';
import Collage from './components/Collage.jsx';
import Details from './components/Details.jsx';
import MapSection from './components/MapSection.jsx';

export default function App() {
  return (
    <main>
      <Hero />
      <WedsBanner />
      <Collage />
      <Details />
      <MapSection />
    </main>
  );
}
