import { AIChatSupportSection } from './ai-chat-support';
import { DocsAndSupportSection } from './docs-and-support';
import { FinalCTASection } from './final-cta';
import { HeaderSection } from './header-section';
import { HowItWorksSection } from './how-it-works';
import { PlansOverviewSection } from './plans-overview';
import { WhatCanBuildSection } from './what-can-build-section';
import { WhyMagi } from './why-magi';

export default function Home() {
  return (
    <>
      <HeaderSection />
      <WhatCanBuildSection />
      <WhyMagi />
      <HowItWorksSection />
      <PlansOverviewSection />
      <DocsAndSupportSection />
      <AIChatSupportSection />
      <FinalCTASection />
    </>
  );
}
