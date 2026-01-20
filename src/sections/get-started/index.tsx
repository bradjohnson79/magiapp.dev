import { DownloadMAGISection } from './download-magi';
import { HeaderSection } from './header-section';
import { WhatIsLimitedSection } from './what-is-limited';
import { WhatYouCanDo } from './what-you-can-do';

export function GetStartedPageContent() {
  return (
    <>
      <HeaderSection />
      <DownloadMAGISection />
      <WhatYouCanDo />
      <WhatIsLimitedSection />
    </>
  );
}
