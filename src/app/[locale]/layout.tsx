import { Toaster } from '@/components/ui/toaster';
import { Locale, locales } from '@/constants/international';
import { cn } from '@/lib/utils';
import { ThemeProviders } from '@/theme/ThemeProvider';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import './globals.css';
export const generateStaticParams = async () => {
  return locales.map((locale: Locale) => ({ locale }));
};
export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      default: 'Webbybooster',
      template: '%s - Webbybooster',
    },
    description: t('description'),
  };
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

const RootLayout = async (props: Props) => {
  const locale = props.params.locale;
  unstable_setRequestLocale(locale as Locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale as Locale}
      suppressHydrationWarning
      className='h-full'
    >
      <body className={cn('h-full overflow-x-hidden bg-secondary')}>
        <ThemeProviders
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <main className='flex grow'>
              {props.children}
            </main>
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProviders>
      </body>
    </html>
  );
};

export default RootLayout;
