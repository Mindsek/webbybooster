"use client"

import { useEventStore } from '@/store/event.store';
import { addDays } from 'date-fns';
import { useTranslations } from 'next-intl';

export const useInterventions = () => {
    const t = useTranslations('interventions');
    const { events, currentWeek, setCurrentWeek, isDialogOpen, setIsDialogOpen } = useEventStore();

    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i));

    return {
        events,
        currentWeek,
        setCurrentWeek,
        isDialogOpen,
        setIsDialogOpen,
        weekDays,
        t,
    };
};