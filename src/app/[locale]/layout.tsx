import { Toaster } from '@/components/ui/toaster';
import { locales } from '@/constants/international';
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

export const generateStaticParams = () => {
  return locales.map((locale) => ({ locale }));
};

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      default: 'NEOVA',
      template: '%s - NEOVA',
    },
    description: t('description'),
  };
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

const RootLayout = async (props: Props) => {
  unstable_setRequestLocale(props.params.locale);
  const messages = await getMessages();

  return (
    <html
      lang={props.params.locale}
      suppressHydrationWarning
      className='h-full'
    >
      <body className={cn('h-full overflow-x-hidden bg-background')}>
        <ThemeProviders
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <main className='flex grow'>{props.children}</main>
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProviders>
      </body>
    </html>
  );
};

export default RootLayout;
