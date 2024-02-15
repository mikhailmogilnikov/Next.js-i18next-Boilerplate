'use client';

import { LanguageProvider } from '../../platform/providers';

function Providers({ children, lang }) {
  return <LanguageProvider lang={lang}>{children}</LanguageProvider>;
}

export default Providers;
