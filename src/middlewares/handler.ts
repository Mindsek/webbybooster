import type { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import type { ChainMiddlewareType, MiddlewareWrapperType } from './types';

export function middlewareHandler(middlewares: Array<MiddlewareWrapperType>, i = 0): ChainMiddlewareType {
  const current = middlewares[i];

  if (current) {
    const next = middlewareHandler(middlewares, i + 1);

    return current(next);
  }

  return (_req: NextRequest, _evt: NextFetchEvent, res: NextResponse) => {
    return res;
  };
}