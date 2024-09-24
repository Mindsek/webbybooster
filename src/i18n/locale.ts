"use server";
import { Locale } from '@/constants/international';
import { cookies } from 'next/headers';

export const setLocale = (locale: Locale) => {
  cookies().set({
    name: 'NEXT_LOCALE',
    value: locale,
    httpOnly: true,
    path: '/',
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
    secure: true,
  });
};
