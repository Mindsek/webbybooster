import { locales } from '@/constants/international';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales,
  defaultLocale: locales[0],
  localePrefix: 'never',

});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
