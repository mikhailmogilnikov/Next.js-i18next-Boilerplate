import { Footer } from '@/platform/components/Footer';
import { useTranslation } from '@/platform/i18n';
import Link from 'next/link';

export default async function Page1({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'second-page');

  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}`}>{t('back-to-home')}</Link>
      <Footer lng={lng} />
    </>
  );
}
