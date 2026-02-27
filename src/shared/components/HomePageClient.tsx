'use client';

import { useState, useMemo } from 'react';
import IntroLoader from '@/shared/components/IntroLoader';
import Navbar from '@/shared/widgets/Navbar';
import Footer from '@/shared/widgets/Footer';
import Hero from '@/shared/components/main-components/Hero';
import Announcements from '@/shared/components/main-components/Announcements';
import StoreVibe from '@/shared/components/main-components/StoreVibe';
import Services from '@/shared/components/main-components/Services';
import Products from '@/shared/components/main-components/Products';
import ExplodedView from '@/shared/components/main-components/ExplodedView';
import TechNews from '@/shared/components/main-components/TechNews';
import UserGuide from '@/shared/components/main-components/UserGuide';
import TrustPillars from '@/shared/components/main-components/TrustPillars';
import GradientBridge from '@/shared/components/ui/GradientBridge';

/**
 * HomePageClient — Client wrapper for the home page.
 * Shows an IntroLoader splash while critical assets preload,
 * then reveals the full page with a smooth transition.
 */
const HomePageClient = () => {
  const [introComplete, setIntroComplete] = useState(false);

  // Preload the first few Hero frame sequence images (critical for first impression)
  const criticalImages = useMemo(() => {
    const images: string[] = [];
    // Preload first 10 frames of the Hero sequence for instant display after intro
    for (let i = 0; i < 10; i++) {
      const idx = String(26 + i).padStart(3, '0');
      images.push(`/assets/3d-frame/ezgif-frame-${idx}.png`);
    }
    // Also preload the logo
    images.push('/assets/logo.png');
    return images;
  }, []);

  return (
    <>
      {!introComplete && (
        <IntroLoader
          onComplete={() => setIntroComplete(true)}
          imagesToPreload={criticalImages}
        />
      )}

      <div
        className="min-h-screen font-sans"
        style={{
          opacity: introComplete ? 1 : 0,
          transition: 'opacity 0.5s ease-out',
          ...(introComplete ? {} : { overflow: 'hidden', height: '100vh' }),
        }}
      >
        <Navbar transparent />

        {/* ── Conversion funnel order ──────────────────────────────
          1. Hero          — Brand statement, cinematic iPhone intro
          2. Products      — What we sell (capitalize on hero engagement)
          3. ExplodedView  — Why this iPhone? (build product trust & depth)
          4. TrustPillars  — Dark trust zone: kill objections right after tech story
          5. Services      — What we can do for you (repair, trade-in, warranty)
          5. StoreVibe     — The Jon Táo difference (emotional close, flower story)
          6. UserGuide     — How to buy (lower friction before committing)
          7. TechNews      — Blog / SEO authority content
          8. Announcements — Promotions strip (timely info, near footer)
        ─────────────────────────────────────────────────────────── */}
        <Hero />
        {/* #1a0b2e → #fff — via desaturated mid to avoid purple band */}
        <GradientBridge from="#1a0b2e" via="#e8e4ee" to="#ffffff" />
        <Products />
        {/* #fff → #0a0710 */}
        <GradientBridge from="#ffffff" to="#0a0710" />
        <ExplodedView />
        {/* #0a0710 → #0d0720: same dark zone, seamless — no bridge */}
        <TrustPillars />
        {/* #0d0720 → #FCFAFF */}
        <GradientBridge from="#0d0720" to="#FCFAFF" />
        <Services />
        <StoreVibe />
        <UserGuide />
        <TechNews />
        {/* #FCFAFF → #A875D2 */}
        <GradientBridge from="#FCFAFF" to="#A875D2" height="h-16 sm:h-24" />
        <Announcements />
        <div className="bg-dark">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePageClient;
