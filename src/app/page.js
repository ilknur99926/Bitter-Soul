'use client';

import Head from 'next/head';
import SoulIntro from '../components/SoulIntro';
import DailyThought from '../components/DailyThought';
import Menu from '@/components/Menu';
import WallCoffee from '@/components/WallCoffee';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Bitter Soul ☕ | Qəhvənin Fəlsəfəsi</title>
        <meta name="description" content="Qəhvə, fəlsəfə və ruhun harmoniyası – Bitter Soul ilə tanış olun." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Bitter Soul" />
        <meta property="og:description" content="Qəhvə içərək fəlsəfəyə toxun." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#733900" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
