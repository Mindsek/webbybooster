import { useTranslations } from 'next-intl';

export const useHeader = () => {
    const t = useTranslations('header');

    return {
        t,
    }
}

