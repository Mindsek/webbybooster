'use client';

import { usePathname } from 'next/navigation';

const useMenuActive = (route: string) => {
  const pathname = usePathname();
  const isActive =
    (pathname.includes(route) && route.length) || pathname === route;

  return isActive;
};

export default useMenuActive;
