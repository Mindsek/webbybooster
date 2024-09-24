import { useNavigationItems } from '@/hooks/useNavigationItems';

export const useSideBar = () => {
  const items = useNavigationItems();

  return {
    items,
  };
};
