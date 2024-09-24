import createMiddleware from 'next-intl/middleware';
import type { MiddlewareWrapperType } from './types';
import { routing } from '@/i18n/routing';

export const internationalization: MiddlewareWrapperType = (next) => {
  return (req, evt) => {
    const res = createMiddleware(routing)(req);

    return next(req, evt, res);
  };
};