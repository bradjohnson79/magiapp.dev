import { DownloadMAGISection } from './download-magi';
import { HeaderSection } from './header-section';
import { LastThingSection } from './last-thing';
import { ReadyToContinue } from './ready-to-continue';
import { TrailDaysWorkSection } from './trail-days-work';
import { WhatIsLimitedSection } from './what-is-limited';
import { WhatYouCanDo } from './what-you-can-do';

export function GetStartedPageContent() {
  return (
    <>
      <HeaderSection />
      <DownloadMAGISection />
      <WhatYouCanDo />
      <WhatIsLimitedSection />
      <TrailDaysWorkSection />
      <ReadyToContinue />
      <LastThingSection />
    </>
  );
}
