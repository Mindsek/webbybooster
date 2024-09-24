'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export const useCommandSearchBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const t = useTranslations('header.command');

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return { open, setOpen, t };
};
