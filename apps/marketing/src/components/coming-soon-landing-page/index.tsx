import React from "react";
import { CTASection, CTASectionProps } from "./cTASection";
import { FeaturesSection, FeaturesSectionProps } from "./featuresSection";
import { Footer } from "./footer";
import { Header } from "./header";
import { HeroSection, HeroSectionProps } from "./heroSection";
import { TeamSection, TeamSectionProps } from "./teamSection";

export interface ComingSoonLandingPageProps {
  heroSection: HeroSectionProps;
  featuresSection: FeaturesSectionProps;
  ctaSection: CTASectionProps;
  teamSection: TeamSectionProps;
}

export function ComingSoonLandingPage({
  heroSection,
  featuresSection,
  ctaSection,
  teamSection,
}: ComingSoonLandingPageProps) {
  return (
    <>
      <Header />

      <HeroSection
        announcementText={heroSection.announcementText}
        title={heroSection.title}
        description={heroSection.description}
        ctaText={heroSection.ctaText}
        ctaButtonText={heroSection.ctaButtonText}
        introVideoLink={heroSection.introVideoLink}
        introVideoPlaceholderImgSrc={heroSection.introVideoPlaceholderImgSrc}
        onInterestSubmission={heroSection.onInterestSubmission}
      />

      <FeaturesSection features={featuresSection.features} />

      <CTASection
        title={ctaSection.title}
        description={ctaSection.description}
        primaryCtaText={ctaSection.primaryCtaText}
        primaryCtaLink={ctaSection.primaryCtaLink}
      />

      <TeamSection
        teamMembers={teamSection.teamMembers}
        title={teamSection.title}
        description={teamSection.description}
      />

      <Footer />
    </>
  );
}
