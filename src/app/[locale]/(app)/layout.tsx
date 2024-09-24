import Header from '@/components/layout/Header/Header';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

const RootLayout = async (props: Props) => {
  return (
    <div className='flex grow'>
      <nav className='group min-h-screen border-r bg-background transition-all duration-300 hover:min-w-60 max-md:hidden md:min-w-20'>
        <Sidebar />
      </nav>
      <section className='flex grow flex-col'>
        <div className='p-4'><Header /></div>
        <div className={cn('flex h-full grow flex-col p-4')}>
          {props.children}
        </div>
      </section>
    </div>
  );
};

export default RootLayout;
