'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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
      <Sun className={cn("transition-all", theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100')} />
      <Moon className={cn("absolute transition-all", theme === 'dark' ? '-rotate-0 scale-100' : 'rotate-90 scale-0')} />
      <span className='sr-only'>Toggle Theme</span>
    </Button>
  );
};
