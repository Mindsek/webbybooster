import {
  CalendarDays,
  ChartColumnBig,
  FileText,
  LayoutDashboard,
  Lock,
  Pin,
  Receipt,
  ReceiptText,
  User,
  View
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export const useNavigationItems = () => {
  const t = useTranslations('navigation_command');

  return [
    {
      group: t('group1.title'),
      items: [
        {
          link: '/home',
          icon: <LayoutDashboard className='min-h-6 min-w-6' />,
          label: t('group1.home'),
        },
        {
          link: '/tasks',
          icon: <Pin className='min-h-6 min-w-6' />,
          label: t('group1.tasks'),
        },
        {
          link: '/interventions',
          icon: <CalendarDays className='min-h-6 min-w-6' />,
          label: t('group1.interventions'),
        },
        {
          link: '/missions-contracts',
          icon: <ReceiptText className='min-h-6 min-w-6' />,
          label: t('group1.missions_contracts'),
        },
        {
          link: '/revenue-tracking',
          icon: <View className='min-h-6 min-w-6' />,
          label: t('group1.revenue_tracking'),
        },
        {
          link: '/invoicing',
          icon: <Receipt className='min-h-6 min-w-6' />,
          label: t('group1.invoicing'),
        },
        {
          link: '/bpf',
          icon: <ChartColumnBig className='min-h-6 min-w-6' />,
          label: t('group1.bpf'),
        },
      ],
    },
    {
      group: t('group2.title'),
      items: [
        {
          link: '/training-organizations',
          icon: <User className="min-w-6 min-h-6" />,
          label: t("group2.training_organizations"),
        },
        {
          link: '/intermediaries',
          icon: <User className="min-w-6 min-h-6" />,
          label: t("group2.intermediaries"),
        },
        {
          link: '/contacts',
          icon: <User className="min-w-6 min-h-6" />,
          label: t("group2.contacts"),
        },
      ],
    },
    {
      group: t('group3.title'),
      items: [
        {
          link: '/stock-courses',
          icon: <User className="min-w-6 min-h-6" />,
          label: t("group3.stock_courses"),
        },
        {
          link: '/my-documents',
          icon: <User className="min-w-6 min-h-6" />,
          label: t("group3.my_documents"),
        },
        {
          link: '/my-applications',
          icon: <User className="min-w-6 min-h-6" />,
          label: t("group3.my_applications"),
        },
      ],
    },
    {
      group: t('group4.title'),
      items: [
        {
          link: '/sitemap',
          icon: <User className="min-w-6 min-h-6" />,
          label: t("group4.sitemap"),
        },
        {
          link: '/template-documentation',
          icon: <FileText className="min-w-6 min-h-6" />,
          label: t("group4.template_documentation"),
        },
      ],
    },
    {
      group: t('group5.title'),
      items: [
        {
          link: '/terms',
          icon: <FileText className='min-h-6 min-w-6' />,
          label: t('group5.terms'),
        },
        {
          link: '/privacy',
          icon: <Lock className='min-h-6 min-w-6' />,
          label: t('group5.privacy'),
        },
      ],
    },
  ];
};
