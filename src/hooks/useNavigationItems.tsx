import {
  FileText,
  History,
  LayoutDashboard,
  Lock,
  MessageCircleQuestion,
  Settings,
  Star,
  Trash,
  User,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export const useNavigationItems = () => {
  const t = useTranslations('navigation_command');

  return [
    {
      group: t('group1.title'),
      items: [
        {
          link: '/',
          icon: <LayoutDashboard className='min-h-6 min-w-6' />,
          label: t('group1.dashboard'),
        },
        // {
        //   link: '/all-files',
        //   icon: <File className='min-h-6 min-w-6' />,
        //   label: t('group1.files'),
        // },
        {
          link: '/history',
          icon: <History className='min-h-6 min-w-6' />,
          label: t('group1.history'),
        },
        {
          link: '/favorites',
          icon: <Star className='min-h-6 min-w-6' />,
          label: t('group1.favorites'),
        },
        {
          link: '/trash',
          icon: <Trash className='min-h-6 min-w-6' />,
          label: t('group1.trash'),
        },
      ],
    },
    {
      group: t('group2.title'),
      items: [
        {
          link: '/profile',
          icon: <User className="min-w-6 min-h-6" />,
          label: t("group2.profile"),
        },
        {
          link: '/settings',
          icon: <Settings className='min-h-6 min-w-6' />,
          label: t('group2.settings'),
        },
        {
          link: '/support',
          icon: <MessageCircleQuestion className='min-h-6 min-w-6' />,
          label: t('group2.support'),
        },
      ],
    },
    {
      group: t('group3.title'),
      items: [
        {
          link: '/terms',
          icon: <FileText className='min-h-6 min-w-6' />,
          label: t('group3.terms'),
        },
        {
          link: '/privacy',
          icon: <Lock className='min-h-6 min-w-6' />,
          label: t('group3.privacy'),
        },
      ],
    },
  ];
};
