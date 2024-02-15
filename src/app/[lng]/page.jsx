import Link from 'next/link';
import { useTranslation } from '../../platform/i18n';
import { Footer } from '../../platform/components/Footer';

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/page1`}>{t('to-second-page')}</Link>
      <br />
      <Link href={`/${lng}/client`}>{t('to-client-page')}</Link>
      <Footer lng={lng} />
    </>
  );
}
