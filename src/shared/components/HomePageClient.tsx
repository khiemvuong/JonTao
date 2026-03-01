'use client';

import { useState, useMemo, useEffect } from 'react';
import IntroLoader from '@/shared/components/IntroLoader';
import Navbar from '@/shared/widgets/Navbar';
import Footer from '@/shared/widgets/Footer';
import Hero from '@/shared/components/main-components/Hero';
import PainPoint from '@/shared/components/main-components/PainPoint';
import Announcements from '@/shared/components/main-components/Announcements';
import ExplodedView from '@/shared/components/main-components/ExplodedView';
import JonTaoCertified from '@/shared/components/main-components/JonTaoCertified';
import TrustPillars from '@/shared/components/main-components/TrustPillars';
import TheNudge from '@/shared/components/main-components/TheNudge';
import Products from '@/shared/components/main-components/Products';
import TechNews from '@/shared/components/main-components/TechNews';
import GradientBridge from '@/shared/components/ui/GradientBridge';

/**
 * HomePageClient — Client wrapper for the home page.
 * Shows an IntroLoader splash while critical assets preload,
 * then reveals the full page with a smooth transition.
 */
const HomePageClient = () => {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const played = window.localStorage.getItem('introPlayed') === 'true';
      if (played) {
        setIntroComplete(true);
      }
    }
  }, []);

  const handleIntroComplete = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('introPlayed', 'true');
      window.scrollTo(0, 0); // Force scroll to top when entering
    }
    setIntroComplete(true);
  };

  // Ensure scroll is at top if skipping intro
  useEffect(() => {
    if (typeof window !== 'undefined' && introComplete) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [introComplete]);

  // Preload critical assets (Logo and Videos)
  const criticalAssets = useMemo(() => {
    return [
      '/assets/logo.png',
      '/assets/video/hero-video.mp4',
      '/assets/video/exploded-video.mp4'
    ];
  }, []);

  return (
    <>
      {!introComplete && (
        <IntroLoader
          onComplete={handleIntroComplete}
          assetsToPreload={criticalAssets}
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
          1. Hero            — Brand statement, cinematic iPhone intro (Section 1)
          2. PainPoint       — Chạm vào nỗi đau của khách hàng (Section 2)
          3. ExplodedView    — Nguồn gốc minh bạch, soi từng con ốc (Section 3 - part 1)
          4. JonTaoCertified — Lời khẳng định 3D Badge (Section 3 - part 2)
          5. TrustPillars    — Tiêu chuẩn kiểm định (Section 3 - part 3)
          6. TheNudge        — Cú hích chốt sale, tạo đặc quyền & FOMO (Section 4)
          7. Products        — Seamless Product Showcase (Section 5)
          8. TechNews        — Blog / SEO authority content
          9. Announcements   — Promotions strip (timely info, near footer)
        ─────────────────────────────────────────────────────────── */}
        <Hero />
        {/* PainPoint has dark bg #0a0710, bridge from Hero #1a0b2e */}
        <GradientBridge from="#1a0b2e" to="#0a0710" />
        <PainPoint />
        {/* PainPoint (#0a0710) → ExplodedView (#0a0710) — NO BRIDGE */}
        <ExplodedView />
        <JonTaoCertified />
        <TrustPillars />

        {/* TheNudge (#050308) */}
        <TheNudge />

        {/* Nudge (#050308) → Products (#ffffff) */}
        <GradientBridge from="#050308" via="#e8e4ee" to="#ffffff" />
        <Products />

        <GradientBridge from="#ffffff" to="#FCFAFF" />
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
