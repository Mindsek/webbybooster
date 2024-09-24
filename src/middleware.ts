import { middlewareHandler } from './middlewares/handler';
import { internationalization } from './middlewares/intl';

export default middlewareHandler([internationalization]);

export const config = {
  matcher: [
    '/(fr|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/((?!_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest|assets).*)',
  ],
};