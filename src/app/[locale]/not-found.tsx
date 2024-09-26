'use client';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
export const dynamic = 'force-dynamic';

const NotFound = () => {
  const t = useTranslations('not_found_page');

  return (
    <div className='flex flex-col grow items-center justify-center gap-8 min-h-screen'>
      <h2 className='text-2xl font-semibold'>{t('title')}</h2>
      <p className='text-gray-500'>{t('description')}</p>
      <Link
        href='/'
        className='rounded-xl bg-foreground px-4 py-2 text-background'
      >
        {t('link')}
      </Link>
    </div>
  );
};

export default NotFound;

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
  };
};
