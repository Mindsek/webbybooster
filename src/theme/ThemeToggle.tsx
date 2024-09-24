'use client';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ModeToggle = ({ className }: { className?: string }) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant='ghost'
      size='sm'
      className={className}
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      <Sun className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle Theme</span>
    </Button>
  );
};
