'use client';

import SoulIntro from '../components/SoulIntro';
import DailyThought from '../components/DailyThought';
import Menu from '@/components/Menu';
import WallCoffee from '@/components/WallCoffee';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <SoulIntro />
      
      <div id="daily">
        <DailyThought />
      </div>

      <div id="wall">
        <WallCoffee />
      </div>

      <div id="menu">
        <Menu />
      </div>

      <div id="about">
        <About />
      </div>

      <Footer />
    </>
  );
}
