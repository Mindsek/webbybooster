import { useState } from 'react';
import { useTranslations } from 'next-intl'

export const useHeader = () => {
    const t = useTranslations('header');
    const [open, setOpen] = useState(false);

    return {
        t,
        open,
        setOpen
    }
}

