'use client';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import useMenuActive from '@/hooks/useMenuActive';
import { ModeToggle } from '@/theme/ThemeToggle';
import Image from 'next/image';
import Link from 'next/link';
import { useSideBar } from './Sidebar.logic';

const SideBar = () => {
  const logic = useSideBar();

  return (
    <div className='fixed flex min-h-screen w-20 min-w-20 flex-col justify-center gap-8 p-4 transition-all duration-300 group-hover:min-w-60'>
      <Link
        href='/'
        className='flex items-center gap-2 overflow-hidden px-2 py-1.5'
      >
        <div className='flex items-center justify-center'>
          <Image
            src='/assets/logo.avif'
            alt='logo'
            width={32}
            height={32}
            className='min-h-8 min-w-8'
          />
        </div>
        <h1 className='jumper mt-1 hidden text-2xl font-bold tracking-wider opacity-0 group-hover:flex group-hover:opacity-100'>
          Webby
        </h1>
      </Link>
      <div className='flex grow flex-col'>
        <Command className='bg-transparent'>
          <CommandList className='h-full max-h-[800px]'>
            <CommandGroup>
              {logic.items[0].items.map((item, index) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const isActive = useMenuActive(item.link);

                return (
                  <CommandItem
                    key={index}
                    className={`mb-8 cursor-pointer ${isActive ? 'bg-primary text-background hover:bg-primary/90' : 'hover:bg-accent'}`}
                  >
                    <Link
                      href={item.link}
                      className='flex w-full items-center gap-2'
                    >
                      {item.icon}
                      <span className='hidden w-full whitespace-nowrap group-hover:flex'>
                        {item.label}
                      </span>
                    </Link>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
      <div className='flex flex-col items-start gap-2 overflow-hidden'>
        <ModeToggle />
      </div>
    </div>
  );
};

export default SideBar;
